'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function Calculator() {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(null);

    const clear = useCallback(() => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
    }, []);

    const deleteLast = useCallback(() => {
        setCurrentOperand((prev) => prev.slice(0, -1));
    }, []);

    const appendNumber = useCallback((number) => {
        setCurrentOperand((prev) => {
            // Prevent multiple decimal points
            if (number === '.' && prev.includes('.')) return prev;
            // Prevent leading zeros
            if (number === '0' && prev === '0') return prev;
            // Limit number length to prevent overflow
            if (prev.length >= 15) return prev;
            
            return prev + number;
        });
    }, []);

    const chooseOperation = useCallback((op) => {
        if (currentOperand === '' && previousOperand === '') return;
        
        if (previousOperand !== '') {
            // If there's already an operation, compute it first
            if (currentOperand === '') {
                // Just update the operation if no new number entered
                setOperation(op);
                return;
            }
            
            // Compute the result before setting the new operation
            const computeResult = () => {
                const prev = parseFloat(previousOperand);
                const current = parseFloat(currentOperand);
                
                if (isNaN(prev) || isNaN(current)) return;
                
                let result;
                try {
                    switch (operation) {
                        case '+': result = prev + current; break;
                        case '-': result = prev - current; break;
                        case '×': result = prev * current; break;
                        case '÷': 
                            if (current === 0) throw new Error('Cannot divide by zero');
                            result = prev / current; 
                            break;
                        default: return;
                    }
                    
                    // Handle very large/small numbers
                    if (Math.abs(result) > 1e15 || (Math.abs(result) < 1e-6 && result !== 0)) {
                        result = result.toExponential(6);
                    } else if (Number.isInteger(result)) {
                        result = result.toString();
                    } else {
                        result = parseFloat(result.toFixed(10)).toString();
                    }
                    
                    setPreviousOperand(result);
                    setCurrentOperand('');
                    setOperation(op);
                } catch (error) {
                    setCurrentOperand('Error');
                    setPreviousOperand('');
                    setOperation(null);
                    setTimeout(() => setCurrentOperand(''), 1500);
                }
            };
            
            computeResult();
        } else {
            setPreviousOperand(currentOperand);
            setCurrentOperand('');
            setOperation(op);
        }
    }, [currentOperand, previousOperand, operation]);

    const compute = useCallback(() => {
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        
        // If there's no operation or current number, do nothing
        if (!operation || isNaN(current)) return;
        // If there's no previous number, use current number as previous
        if (isNaN(prev)) {
            setPreviousOperand(currentOperand);
            setCurrentOperand('');
            return;
        }

        let result;
        try {
            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '×':
                    result = prev * current;
                    break;
                case '÷':
                    if (current === 0) {
                        throw new Error('Cannot divide by zero');
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            // Handle very large/small numbers
            if (Math.abs(result) > 1e15 || (Math.abs(result) < 1e-6 && result !== 0)) {
                result = result.toExponential(6);
            } else if (Number.isInteger(result)) {
                result = result.toString();
            } else {
                // Limit decimal places
                result = parseFloat(result.toFixed(10)).toString();
            }

            setCurrentOperand(result);
            setPreviousOperand('');
            setOperation(null);
        } catch (error) {
            setCurrentOperand('Error');
            setPreviousOperand('');
            setOperation(null);
            setTimeout(() => setCurrentOperand(''), 1500);
        }
    }, [currentOperand, operation, previousOperand]);

    const getDisplayNumber = useCallback((number) => {
        if (number === '') return '0';
        if (number === 'Error') return 'Error';
        
        // Handle exponential notation
        if (number.includes('e')) {
            const [base, exponent] = number.split('e');
            return `${parseFloat(base).toFixed(6)}e${exponent}`;
        }
        
        const stringNumber = number.toString();
        const [integer, decimal] = stringNumber.split('.');
        
        // Handle empty or invalid numbers
        if (isNaN(parseFloat(integer)) && !decimal) return '0';
        
        // Format integer part with commas
        const integerDisplay = isNaN(parseFloat(integer)) 
            ? '0' 
            : parseFloat(integer).toLocaleString('en', { maximumFractionDigits: 0 });
            
        // Handle decimal part
        if (!decimal) return integerDisplay;
        return `${integerDisplay}.${decimal}`;
    }, []);

    // Button styling with different categories
    const buttonStyle = `h-12 sm:h-16 md:h-20 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-medium rounded-xl transition-all duration-200 active:scale-95 shadow-sm`;
    
    const numberButtonStyle = `${buttonStyle} bg-zinc-800 hover:bg-zinc-700 text-zinc-100`;
    const operatorButtonStyle = `${buttonStyle} bg-blue-600 hover:bg-blue-700 text-white`;
    const functionButtonStyle = `${buttonStyle} bg-zinc-700 hover:bg-zinc-600 text-blue-400`;
    const equalsButtonStyle = `${buttonStyle} bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 flex flex-col items-center">
            {/* Back to Home Button */}
            <div className="w-full max-w-md mb-6 sm:mb-8">
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
            
            <div className="w-full max-w-md text-center mb-8 sm:mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                    Calculator
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                    Perform basic to advanced calculations with ease
                </p>
            </div>
            
            <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm rounded-3xl p-5 sm:p-6 shadow-2xl border border-gray-700/50">
                    {/* Display */}
                    <div className="bg-gray-900/70 rounded-xl p-4 sm:p-5 mb-5 border border-gray-700/50 shadow-inner">
                        <div className="text-blue-400 text-right text-sm sm:text-base h-6 mb-1">
                            {previousOperand && `${getDisplayNumber(previousOperand)} ${operation}`}
                        </div>
                        <div className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-right break-all min-h-[1.5em]">
                            {currentOperand || '0'}
                        </div>
                    </div>

                    {/* Buttons Grid */}
                    <div className="grid grid-cols-4 gap-3 sm:gap-4">
                        {/* Row 1 */}
                        <button className={`${functionButtonStyle} col-span-2`} onClick={clear}>AC</button>
                        <button className={functionButtonStyle} onClick={deleteLast}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-8 2H9a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                        <button className={operatorButtonStyle} onClick={() => chooseOperation('÷')}>÷</button>

                        {/* Row 2 */}
                        {[7, 8, 9].map(n => (
                            <button key={n} className={numberButtonStyle} onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className={operatorButtonStyle} onClick={() => chooseOperation('×')}>×</button>

                        {/* Row 3 */}
                        {[4, 5, 6].map(n => (
                            <button key={n} className={numberButtonStyle} onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className={operatorButtonStyle} onClick={() => chooseOperation('-')}>-</button>

                        {/* Row 4 */}
                        {[1, 2, 3].map(n => (
                            <button key={n} className={numberButtonStyle} onClick={() => appendNumber(n.toString())}>{n}</button>
                        ))}
                        <button className={operatorButtonStyle} onClick={() => chooseOperation('+')}>
                            <span className="relative top-[-1px]">+</span>
                        </button>

                        {/* Row 5 */}
                        <button className={numberButtonStyle} onClick={() => appendNumber('0')}>0</button>
                        <button className={numberButtonStyle} onClick={() => appendNumber('.')}>.</button>
                        <button className={`${equalsButtonStyle} col-span-2`} onClick={compute}>=</button>
                    </div>
                </div>
        </div>
    );
}
