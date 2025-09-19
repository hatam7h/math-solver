"use client";
import { useState } from "react";
import Link from "next/link";

export default function MathSolver() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Back to Home Button */}
                <div className="mb-6 sm:mb-8">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
                    >
                        <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
                <header className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                        Math Solver
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Advanced mathematical tools for all your calculation needs
                    </p>
                </header>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <SolverCard title="🔢 Logarithm Solver" maxHeight="none">
                        <LogarithmSolver />
                    </SolverCard>
                    
                    <SolverCard title="📏 Quadratic Solver" maxHeight="none">
                        <QuadraticSolver />
                    </SolverCard>
                    
                    <div className="lg:col-span-2">
                        <SolverCard title="📐 Trigonometry Calculator" maxHeight="none">
                            <TrigonometryCalculator />
                        </SolverCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LogarithmSolver() {
    const [base, setBase] = useState("");
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const validateInput = (value) => {
        if (value === "") return true;
        const num = parseFloat(value);
        return !isNaN(num) && num > 0 && num <= 1e100;
    };

    const solveLog = () => {
        setError("");
        const baseNum = parseFloat(base);
        const numberNum = parseFloat(number);

        if (!base || !number) {
            setError("Please enter both base and number");
            return;
        }

        if (isNaN(baseNum) || isNaN(numberNum)) {
            setError("Please enter valid numbers");
            return;
        }

        if (baseNum <= 0 || numberNum <= 0) {
            setError("Both base and number must be positive");
            return;
        }

        if (baseNum === 1) {
            setError("Logarithm base cannot be 1");
            return;
        }

        try {
            const logResult = Math.log(numberNum) / Math.log(baseNum);
            
            if (!isFinite(logResult)) {
                throw new Error("Result is too large or invalid");
            }

            // Format the result nicely
            let formattedResult;
            if (Math.abs(logResult) > 1e6 || (Math.abs(logResult) < 1e-6 && logResult !== 0)) {
                formattedResult = logResult.toExponential(6);
            } else {
                formattedResult = parseFloat(logResult.toFixed(8)).toString();
                // Remove trailing .0 if it's a whole number
                if (formattedResult.endsWith('.0')) {
                    formattedResult = formattedResult.slice(0, -2);
                }
            }
            
            setResult(`log₍${base}₎(${number}) = ${formattedResult}`);
        } catch (err) {
            setError("Error in calculation");
            console.error("Logarithm error:", err);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <InputField 
                    value={base} 
                    setValue={(value) => {
                        if (validateInput(value) || value === "") {
                            setBase(value);
                            setError("");
                        } else {
                            setError("Please enter a valid positive number");
                        }
                    }} 
                    placeholder="Base" 
                    type="number"
                    min="0.00000001"
                    step="any"
                />
                <InputField 
                    value={number} 
                    setValue={(value) => {
                        if (validateInput(value) || value === "") {
                            setNumber(value);
                            setError("");
                        } else {
                            setError("Please enter a valid positive number");
                        }
                    }}
                    placeholder="Number" 
                    type="number"
                    min="0.00000001"
                    step="any"
                />
            </div>
            <SolveButton onClick={solveLog} text="Solve Logarithm" />
            <Result text={result} />
        </>
    );
}

function QuadraticSolver() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const validateCoefficient = (value) => {
        if (value === "") return true;
        if (value === "-" || value === "." || value === "-.") return true;
        const num = parseFloat(value);
        return !isNaN(num) && isFinite(num) && Math.abs(num) <= 1e100;
    };

    const formatNumber = (num) => {
        if (Math.abs(num) < 1e-6) return "0";
        if (Math.abs(num) > 1e6 || Math.abs(num) < 1e-4) {
            return num.toExponential(4);
        }
        // Remove trailing zeros and decimal point if not needed
        return parseFloat(num.toFixed(8)).toString();
    };

    const solveQuadratic = () => {
        setError("");
        
        if (a === "" || b === "" || c === "") {
            setError("Please enter all coefficients");
            return;
        }

        const A = parseFloat(a);
        const B = parseFloat(b);
        const C = parseFloat(c);

        if (isNaN(A) || isNaN(B) || isNaN(C)) {
            setError("Please enter valid numbers");
            return;
        }

        if (A === 0) {
            // Linear equation
            if (B === 0) {
                setError("Not a valid equation");
                return;
            }
            const root = -C / B;
            setResult(`Single root: x = ${formatNumber(root)}`);
            return;
        }

        const discriminant = B * B - 4 * A * C;
        
        if (discriminant < 0) {
            // Complex roots
            const realPart = -B / (2 * A);
            const imaginaryPart = Math.sqrt(-discriminant) / (2 * Math.abs(A));
            
            if (Math.abs(realPart) < 1e-10) {
                setResult(`Complex roots: ±${formatNumber(imaginaryPart)}i`);
            } else {
                setResult(
                    `Complex roots: ${formatNumber(realPart)} ± ${formatNumber(imaginaryPart)}i`
                );
            }
        } else if (discriminant === 0) {
            // One real root (double root)
            const root = -B / (2 * A);
            setResult(`Double root: x = ${formatNumber(root)}`);
        } else {
            // Two real roots
            const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
            const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
            setResult(`Roots: x₁ = ${formatNumber(root1)}, x₂ = ${formatNumber(root2)}`);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <InputField 
                    value={a} 
                    setValue={(value) => {
                        if (validateCoefficient(value)) {
                            setA(value);
                            setError("");
                        }
                    }} 
                    placeholder="a" 
                    type="number"
                    step="any"
                />
                <InputField 
                    value={b} 
                    setValue={(value) => {
                        if (validateCoefficient(value)) {
                            setB(value);
                            setError("");
                        }
                    }} 
                    placeholder="b" 
                    type="number"
                    step="any"
                />
                <InputField 
                    value={c} 
                    setValue={(value) => {
                        if (validateCoefficient(value)) {
                            setC(value);
                            setError("");
                        }
                    }} 
                    placeholder="c" 
                    type="number"
                    step="any"
                />
            </div>
            <SolveButton onClick={solveQuadratic} text="Solve Quadratic" />
            <Result text={result} />
        </>
    );
}

function TrigonometryCalculator() {
    const [angle, setAngle] = useState("");
    const [unit, setUnit] = useState("degrees");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const formatTrigValue = (value) => {
        if (Math.abs(value) > 1e10) return "undefined";
        if (Math.abs(value) < 1e-10) return "0";
        if (Math.abs(value - Math.round(value)) < 1e-10) {
            return Math.round(value).toString();
        }
        // Format to show up to 6 decimal places, removing trailing zeros
        return value.toFixed(6).replace(/\.?0+$/, '');
    };

    const calculateTrig = () => {
        setError("");
        
        if (angle === "") {
            setError("Please enter an angle");
            return;
        }

        const parsedAngle = parseFloat(angle);
        if (isNaN(parsedAngle) || !isFinite(parsedAngle)) {
            setError("Please enter a valid number");
            return;
        }

        // Normalize angle
        let normalizedAngle = parsedAngle;
        if (unit === "degrees") {
            // Convert to equivalent angle between 0-360 degrees
            normalizedAngle = ((parsedAngle % 360) + 360) % 360;
            if (normalizedAngle > 180) normalizedAngle -= 360; // Keep between -180 and 180
        } else {
            // Convert to equivalent angle between -π and π
            const twoPi = 2 * Math.PI;
            normalizedAngle = ((parsedAngle % twoPi) + twoPi) % twoPi;
            if (normalizedAngle > Math.PI) normalizedAngle -= twoPi;
        }

        const radianAngle = unit === "degrees" ? (parsedAngle * Math.PI) / 180 : parsedAngle;
        
        try {
            const sin = Math.sin(radianAngle);
            const cos = Math.cos(radianAngle);
            
            let tan, cot;
            const tanUndefined = Math.abs(cos) < 1e-10;
            const cotUndefined = Math.abs(sin) < 1e-10;
            
            if (tanUndefined) {
                tan = Infinity * Math.sign(sin) * Math.sign(cos);
            } else {
                tan = sin / cos;
            }
            
            if (cotUndefined) {
                cot = Infinity * Math.sign(cos) * Math.sign(sin);
            } else {
                cot = cos / sin;
            }

            const angleText = unit === "degrees" 
                ? `${normalizedAngle}°` 
                : `${normalizedAngle.toFixed(4)} rad`;
                
            setResult([
                `Angle: ${angleText}`,
                `sin(θ) = ${formatTrigValue(sin)}`,
                `cos(θ) = ${formatTrigValue(cos)}`,
                tanUndefined ? "tan(θ) = undefined" : `tan(θ) = ${formatTrigValue(tan)}`,
                cotUndefined ? "cot(θ) = undefined" : `cot(θ) = ${formatTrigValue(cot)}`
            ].join("\n"));
        } catch (err) {
            setError("Error in calculation");
            console.error("Trigonometry error:", err);
        }
    };

    return (
        <>
            <InputField 
                value={angle} 
                setValue={(value) => {
                    if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
                        setAngle(value);
                        setError("");
                    }
                }} 
                placeholder={`Enter angle in ${unit}`} 
                type="text"
                inputMode="decimal"
            />
            <div className="flex gap-2 mt-2 sm:mt-3">
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="flex-1 p-2 sm:p-3 rounded-2xl bg-zinc-700 text-white border border-zinc-600 text-center transition focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                >
                    <option value="degrees">Degrees</option>
                    <option value="radians">Radians</option>
                </select>
                <button 
                    onClick={() => {
                        if (angle && !isNaN(parseFloat(angle))) {
                            const value = parseFloat(angle);
                            if (unit === "degrees") {
                                // Convert to radians
                                setAngle(((value * Math.PI) / 180).toFixed(8).replace(/\.?0+$/, ''));
                                setUnit("radians");
                            } else {
                                // Convert to degrees
                                setAngle(((value * 180) / Math.PI).toFixed(8).replace(/\.?0+$/, ''));
                                setUnit("degrees");
                            }
                        }
                    }}
                    className="px-3 sm:px-4 bg-zinc-700 hover:bg-zinc-600 rounded-2xl transition text-sm sm:text-base whitespace-nowrap"
                    type="button"
                >
                    {unit === "degrees" ? "To Radians" : "To Degrees"}
                </button>
            </div>
            <SolveButton onClick={calculateTrig} text="Calculate Trigonometry" />
            <Result text={result} />
        </>
    );
}

const SolverCard = ({ title, children, maxHeight = 'auto' }) => (
    <div
        className="bg-gray-800/80 rounded-2xl border border-gray-700/50 shadow-lg p-5 sm:p-6 flex flex-col h-full transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10"
        style={{
            maxHeight: maxHeight,
            overflowY: maxHeight === 'none' ? 'visible' : 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#3b82f6 #1f2937',
        }}
    >
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-700/50">
            <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-200">
                {title}
            </h2>
        </div>
        {children}
        <style jsx>{`
            div::-webkit-scrollbar {
                display: none;
            }
        `}</style>
    </div>
);

const InputField = ({ 
    value, 
    setValue, 
    placeholder, 
    type = "number",
    min,
    step,
    inputMode = "numeric"
}) => (
    <div className="relative group">
        <input
            type={type}
            inputMode={inputMode}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            min={min}
            step={step}
            className="w-full p-3 sm:p-4 bg-gray-700/50 text-white border border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 placeholder-gray-500/60 transition-all duration-200 text-center font-mono text-sm sm:text-base"
        />
        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-focus-within:border-blue-500/30 group-hover:border-gray-500/30 transition-all duration-200"></div>
    </div>
);

const SolveButton = ({ onClick, text }) => (
    <button
        onClick={onClick}
        className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm sm:text-base"
        type="button"
    >
        {text}
    </button>
);

const Result = ({ text }) => {
    if (!text) return null;
    
    return (
        <div className="mt-4 p-4 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 text-gray-100 whitespace-pre-wrap text-sm sm:text-base font-mono transition-all duration-300">
            {text.split('\n').map((line, i) => (
                <div key={i} className="py-1">
                    {line.includes('=') ? (
                        <div className="flex flex-wrap items-baseline gap-1">
                            <span className="text-gray-400">{line.split('=')[0]}=</span>
                            <span className="text-blue-300 font-medium">{line.split('=').slice(1).join('=')}</span>
                        </div>
                    ) : (
                        <span className="text-gray-300">{line}</span>
                    )}
                </div>
            ))}
        </div>
    );
};
