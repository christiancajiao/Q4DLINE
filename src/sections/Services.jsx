import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-brand-black text-white relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest uppercase">
                    Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0"></div>

                    {/* PRE-PRODUCTION */}
                    <div className="relative z-10 group">
                        <div className="bg-brand-gray p-8 rounded-lg border border-gray-800 hover:border-white/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-light-gray rounded-full flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6 tracking-wider">PRE-PRODUCTION</h3>
                            <ul className="space-y-3 text-gray-400 text-sm tracking-wide">
                                <li>Storyboard / Animatic</li>
                                <li>Concept Art Development</li>
                                <li>Scene and Sequence Planning</li>
                                <li>Character and Setting Design</li>
                            </ul>
                        </div>
                    </div>

                    {/* PRODUCTION */}
                    <div className="relative z-10 group">
                        <div className="bg-brand-gray p-8 rounded-lg border border-gray-800 hover:border-white/30 transition-all duration-300 h-full flex flex-col items-center text-center transform md:-translate-y-4">
                            <div className="w-16 h-16 bg-brand-light-gray rounded-full flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6 tracking-wider">PRODUCTION</h3>
                            <ul className="space-y-3 text-gray-400 text-sm tracking-wide">
                                <li>Digital 2D Animation</li>
                                <li>3D Animation</li>
                                <li>Audio / Effects synchronization</li>
                                <li>Voice Recording (Voicing)</li>
                                <li>Video and Audio Editing</li>
                                <li>Composition and Color Grading</li>
                                <li>Sound Design</li>
                                <li>Final Rendering and Delivery</li>
                            </ul>
                        </div>
                    </div>

                    {/* POST-PRODUCTION */}
                    <div className="relative z-10 group">
                        <div className="bg-brand-gray p-8 rounded-lg border border-gray-800 hover:border-white/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-light-gray rounded-full flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6 tracking-wider">POST-PRODUCTION</h3>
                            <ul className="space-y-3 text-gray-400 text-sm tracking-wide">
                                <li>Visual Effects (VFX)</li>
                                <li>Motion Graphics</li>
                                <li>Final Compositing</li>
                                <li>Marketing Assets</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
