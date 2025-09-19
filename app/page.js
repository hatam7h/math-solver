import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 py-12 md:py-16 lg:py-20 font-sans antialiased">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/30 mb-6">
                        <span className="text-xs font-medium text-blue-300">MATHEMATICS MADE SIMPLE</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
                        Welcome to Math Solver
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        Your comprehensive platform for exploring mathematical concepts, solving problems, and expanding your knowledge through interactive tools and insightful articles.
                    </p>
                    
                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                        {[
                            {
                                icon: '📖',
                                title: 'Math Blog',
                                description: 'Dive into articles about various mathematical concepts and theories.',
                                href: '/blog',
                                color: 'from-indigo-600/10 to-violet-600/10',
                                buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
                                iconBg: 'bg-indigo-600/20 border-indigo-500/30'
                            },
                            {
                                icon: '🧮',
                                title: 'Math Solver',
                                description: 'Solve complex mathematical problems with our advanced solver.',
                                href: '/mathsolver',
                                color: 'from-emerald-600/10 to-teal-600/10',
                                buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
                                iconBg: 'bg-emerald-600/20 border-emerald-500/30'
                            },
                            {
                                icon: '🖩',
                                title: 'Calculator',
                                description: 'Perform quick calculations with our powerful calculator tool.',
                                href: '/calculator',
                                color: 'from-rose-600/10 to-pink-600/10',
                                buttonColor: 'bg-rose-600 hover:bg-rose-700',
                                iconBg: 'bg-rose-600/20 border-rose-500/30'
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                                <div className="relative">
                                    <div className={`w-16 h-16 rounded-xl ${feature.iconBg} border flex items-center justify-center mb-4 mx-auto`}>
                                        <span className="text-2xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm mb-5">{feature.description}</p>
                                    <Link
                                        href={feature.href}
                                        className={`${feature.buttonColor} text-white font-medium text-sm py-2.5 px-5 rounded-lg transition duration-300 shadow-sm inline-flex items-center group-hover:translate-y-[-2px]`}
                                    >
                                        Get Started
                                        <svg className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-24 max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Why Choose Math Solver?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Interactive Learning',
                                description: 'Engage with interactive tools and visualizations to better understand complex mathematical concepts.',
                                icon: '🎯'
                            },
                            {
                                title: 'Comprehensive Guides',
                                description: 'Access detailed explanations and step-by-step solutions for a wide range of mathematical topics.',
                                icon: '📚'
                            },
                            {
                                title: 'User-Friendly Interface',
                                description: 'Navigate easily through our intuitive and responsive design that works on all devices.',
                                icon: '✨'
                            },
                            {
                                title: 'Regular Updates',
                                description: 'Benefit from continuously updated content and new features added regularly.',
                                icon: '🔄'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/40 hover:border-blue-500/30 transition-colors duration-300">
                                <span className="text-2xl">{feature.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </main>
    );
}
