@echo off
echo Cleaning previous build...
if exist build rmdir /s /q build
if exist out rmdir /s /q out
if exist math-solver-cpanel.zip del math-solver-cpanel.zip

echo Installing dependencies...
call npm ci

if %ERRORLEVEL% NEQ 0 (
    echo Error installing dependencies. Exiting.
    exit /b %ERRORLEVEL%
)

echo Building static export...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Error building the application. Exiting.
    exit /b %ERRORLEVEL%
)

echo Copying build files...
if not exist build mkdir build
xcopy /E /I /Y out\* build\

if exist build\index.html (
    echo Creating .htaccess file...
    echo # Enable URL rewriting > build\.htaccess
    echo RewriteEngine On >> build\.htaccess
    echo RewriteBase / >> build\.htaccess
    echo. >> build\.htaccess
    echo # Handle Next.js static files >> build\.htaccess
    echo RewriteRule ^_next/(.*) _next/$1 [L] >> build\.htaccess
    echo. >> build\.htaccess
    echo # Handle clean URLs >> build\.htaccess
    echo RewriteCond %%{REQUEST_FILENAME} !-f >> build\.htaccess
    echo RewriteCond %%{REQUEST_FILENAME} !-d >> build\.htaccess
    echo RewriteRule . /index.html [L] >> build\.htaccess

    echo Creating ZIP file...
    powershell -Command "Compress-Archive -Path 'build\*' -DestinationPath 'math-solver-cpanel.zip' -Force"
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo ===============================================
        echo Build completed successfully!
        echo ===============================================
        echo.
        echo Next steps for cPanel deployment:
        echo 1. Upload the 'math-solver-cpanel.zip' file to your cPanel
        echo 2. Extract it in your public_html or desired directory
        echo 3. Ensure .htaccess is in the root directory
        echo 4. No Node.js server is needed - this is static HTML
    ) else (
        echo Error creating ZIP file.
    )
) else (
    echo Error: Build files not found. Check for build errors.
    exit /b 1
)

pause
