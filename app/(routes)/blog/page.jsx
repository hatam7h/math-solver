import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 font-sans antialiased">
            {/* Back to Home Button */}
            <div className="max-w-7xl mx-auto mb-8">
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
            <Head>
                <title>Math Blog - Calculator, Logarithm, Quadratic, Trigonometry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <main className="w-full max-w-5xl mx-auto bg-gray-800/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/40 text-gray-100 space-y-6 sm:space-y-8 md:space-y-10 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <header className="text-center space-y-2 sm:space-y-3">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/30 mb-2">
                        <span className="text-xs font-medium text-blue-300">MATHEMATICS RESOURCES</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight">
                        Mathematical Insights
                    </h1>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-2 leading-relaxed">
                        Discover the beauty of mathematics through interactive tools and comprehensive guides
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
                    {/* Calculator */}
                    <section className="group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/40 active:scale-[0.98] overflow-hidden">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center mb-4 sm:mb-5">
                                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-700/30 border border-blue-500/30 mr-4 shadow-inner">
                                    <span className="text-2xl sm:text-3xl">🖩</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-blue-200 tracking-tight">
                                    Calculator Overview
                                </h2>
                            </div>
                            <p className="text-sm sm:text-[0.95rem] text-gray-300 leading-relaxed mb-4 sm:mb-5 tracking-wide">
                                Our advanced calculator enables you to perform both basic and complex mathematical operations with precision. Experience seamless calculations for arithmetic, powers, roots, logarithms, and trigonometric functions—all in one intuitive interface.
                            </p>
                            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-700/50">
                                <div className="flex space-x-2">
                                    <span className="px-2.5 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-800/40">Arithmetic</span>
                                    <span className="px-2.5 py-1 text-xs font-medium bg-indigo-900/30 text-indigo-300 rounded-full border border-indigo-800/40">Scientific</span>
                                </div>
                                <span className="text-xs font-medium text-blue-400/90 flex items-center">
                                    Try it now
                                    <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Logarithms */}
                    <section className="group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-500/40 active:scale-[0.98] overflow-hidden">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center mb-4 sm:mb-5">
                                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-700/30 border border-indigo-500/30 mr-4 shadow-inner">
                                    <span className="text-2xl sm:text-3xl">🔢</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-indigo-200 tracking-tight">
                                    Understanding Logarithms
                                </h2>
                            </div>
                            <p className="text-sm sm:text-[0.95rem] text-gray-300 leading-relaxed mb-4 tracking-wide">
                                A logarithm is the inverse of exponentiation, answering: "To what exponent must a base be raised to produce a given number?" This fundamental concept has applications across mathematics, science, and engineering.
                            </p>
                            <div className="mt-5 pt-4 border-t border-gray-700/50">
                                <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-indigo-500/20">
                                    <div className="font-mono text-sm sm:text-[0.9rem] text-indigo-300 text-center">
                                        log<sub className="text-indigo-400">b</sub>(x) = y  ⇔  b<sup className="text-indigo-400">y</sup> = x
                                    </div>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 text-xs font-medium bg-indigo-900/30 text-indigo-300 rounded-full border border-indigo-800/40">Exponents</span>
                                    <span className="px-2.5 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-800/40">Inverse Functions</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quadratic */}
                    <section className="group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-rose-500/40 active:scale-[0.98] overflow-hidden">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center mb-4 sm:mb-5">
                                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-rose-600/30 to-pink-700/30 border border-rose-500/30 mr-4 shadow-inner">
                                    <span className="text-2xl sm:text-3xl">🧮</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-rose-200 tracking-tight">
                                    Quadratic Equations
                                </h2>
                            </div>
                            <p className="text-sm sm:text-[0.95rem] text-gray-300 leading-relaxed mb-4 tracking-wide">
                                A quadratic equation is a second-degree polynomial equation that forms a parabola when graphed. These equations appear in various scientific and engineering applications, from projectile motion to optimization problems.
                            </p>
                            <div className="mt-4 space-y-3">
                                <div className="text-sm font-medium text-rose-100 mb-1">Standard Form:</div>
                                <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-rose-500/20">
                                    <div className="font-mono text-sm sm:text-[0.9rem] text-rose-300 text-center">
                                        ax<sup className="text-rose-400">2</sup> + bx + c = 0
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-rose-100 mt-4 mb-1">Quadratic Formula:</div>
                                <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-rose-500/20 overflow-x-auto">
                                    <div className="font-mono text-sm sm:text-[0.9rem] text-rose-300 text-center whitespace-nowrap">
                                        x = (-b ± √(b² - 4ac)) / 2a
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Trigonometry */}
                    <section className="group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-teal-500/40 active:scale-[0.98] overflow-hidden">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                        <div className="relative">
                            <div className="flex items-center mb-4 sm:mb-5">
                                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-teal-600/30 to-emerald-700/30 border border-teal-500/30 mr-4 shadow-inner">
                                    <span className="text-2xl sm:text-3xl">📐</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-teal-200 tracking-tight">
                                    Trigonometry Basics
                                </h2>
                            </div>
                            <p className="text-sm sm:text-[0.95rem] text-gray-300 leading-relaxed mb-4 tracking-wide">
                                The study of relationships between angles and sides of triangles, with applications in physics, engineering, and computer graphics. Master these fundamental functions to understand wave patterns, circular motion, and periodic phenomena.
                            </p>
                            
                            <div className="mt-4">
                                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3.5">
                                    {[
                                        { 
                                            func: 'sin(θ)', 
                                            value: 'Opposite / Hypotenuse', 
                                            color: 'from-blue-900/40 to-blue-800/20',
                                            border: 'border-blue-800/40',
                                            text: 'text-blue-300'
                                        },
                                        { 
                                            func: 'cos(θ)', 
                                            value: 'Adjacent / Hypotenuse', 
                                            color: 'from-indigo-900/40 to-indigo-800/20',
                                            border: 'border-indigo-800/40',
                                            text: 'text-indigo-300'
                                        },
                                        { 
                                            func: 'tan(θ)', 
                                            value: 'Opposite / Adjacent', 
                                            color: 'from-purple-900/40 to-purple-800/20',
                                            border: 'border-purple-800/40',
                                            text: 'text-purple-300'
                                        },
                                        { 
                                            func: 'cot(θ)', 
                                            value: 'Adjacent / Opposite', 
                                            color: 'from-rose-900/40 to-rose-800/20',
                                            border: 'border-rose-800/40',
                                            text: 'text-rose-300'
                                        }
                                    ].map((item, index) => (
                                        <div 
                                            key={index}
                                            className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-lg p-2.5 sm:p-3 group-hover:shadow-md transition-shadow duration-300`}
                                        >
                                            <div className="flex items-center">
                                                <span className={`font-bold text-base sm:text-lg ${item.text} w-12 sm:w-14`}>
                                                    {item.func}
                                                </span>
                                                <span className="text-xs sm:text-sm text-gray-300 ml-1.5 opacity-90">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-between items-center">
                                    <span className="text-xs font-medium text-teal-400/90">
                                        Right Triangle Ratios
                                    </span>
                                    <div className="flex space-x-1">
                                        <span className="w-2 h-2 rounded-full bg-teal-400/60"></span>
                                        <span className="w-2 h-2 rounded-full bg-teal-400/40"></span>
                                        <span className="w-2 h-2 rounded-full bg-teal-400/20"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
