import React from 'react';

const ServicesFX = () => {
    const videos = [
        { id: 'ICcHHLTRaB4', type: 'standard' }, // Video 1
        { id: '6WgCc1XEKi0', type: 'short' },    // Video 2
        { id: 'N-hdV1Qph24', type: 'short' }     // Video 3
    ];

    return (
        <section className="bg-brand-dark relative py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:min-h-[80vh] w-full">

                    {/* Column 1: Description + Standard Video */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* 1. Description Card */}
                        <div className="bg-brand-gray border border-gray-700 p-8 flex flex-col justify-center rounded-lg flex-1">
                            <h3 className="text-3xl font-bold mb-6 tracking-widest uppercase text-white">
                                Services - 2D FX
                            </h3>
                            <div className="w-12 h-1 bg-white mb-8"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                We create 2D effects animation that enhances visual storytelling and emotional impact.
                                From stylized effects to dynamic graphic elements, our 2D FX integrate seamlessly
                                with animation and design to strengthen rhythm, atmosphere, and visual clarity.
                            </p>
                        </div>

                        {/* 2. Standard Video */}
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-800 group">
                            <iframe
                                src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&controls=0&showinfo=0&rel=0&playsinline=1`}
                                title="Service FX Video 1"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    </div>

                    {/* Column 2: Short 1 */}
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 group">
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&loop=1&playlist=${videos[1].id}&controls=0&showinfo=0&rel=0&playsinline=1`}
                            title="Service FX Video 2"
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>

                    {/* Column 3: Short 2 */}
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 group">
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[2].id}?autoplay=1&mute=1&loop=1&playlist=${videos[2].id}&controls=0&showinfo=0&rel=0&playsinline=1`}
                            title="Service FX Video 3"
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesFX;
