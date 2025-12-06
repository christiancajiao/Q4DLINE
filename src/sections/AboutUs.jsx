import React from 'react';

const AboutUs = () => {
    return (
        <section id="about-us" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6 max-w-4xl">

                <div className="flex flex-col border border-gray-700 rounded-lg overflow-hidden">

                    {/* Block 1: ABOUT US */}
                    <div className="p-12 border-b border-gray-700 hover:bg-white/5 transition-colors duration-300">
                        <h2 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                            ABOUT US
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            QU4DLINE is a boutique animation studio founded by four Latin American artists specialized in 3D animation, cinematic storytelling, and stylized visual content. Our strength lies in blending narrative, technical precision, and high-end visual direction. We support projects from concept to final render, delivering international-level results with efficiency, clarity, and craftsmanship.
                        </p>
                    </div>

                    {/* Block 2: MISSION */}
                    <div className="p-12 border-b border-gray-700 hover:bg-white/5 transition-colors duration-300">
                        <h2 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                            MISSION
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To create stylized, technically refined, and emotionally driven animation for international projects—guiding each story from its initial concept to the final render with a balance of craft, narrative, and innovation.
                        </p>
                    </div>

                    {/* Block 3: VISION */}
                    <div className="p-12 hover:bg-white/5 transition-colors duration-300">
                        <h2 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                            VISION
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To become a Latin American leader in high-quality 3D animation for games, cinematics, and premium visual content, recognized for our distinctive style, technical precision, and reliable creative execution.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUs;
