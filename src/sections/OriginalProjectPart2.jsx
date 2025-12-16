import React from 'react';

const OriginalProjectPart2 = () => {
    const videos = [
        { id: 'fONqyuF_dXQ', title: 'Kheper Video 1' },
        { id: 'Y0DJYfFaxWA', title: 'Kheper Video 2' },
    ];

    const images = [
        'https://i.postimg.cc/L5k6pQMn/model-Kheper01Edit.png',
        'https://i.postimg.cc/6pb6tGFd/model-Kheper02wedit.png',
        'https://i.postimg.cc/yYV7RPH3/model-Kheper03w-Edit.png'
    ];

    return (
        <section id="original-project-part2" className="py-24 bg-brand-dark text-white border-t border-gray-800">
            <div className="container mx-auto px-6">

                <h3 className="text-2xl font-bold mb-12 tracking-widest uppercase text-gray-400">
                    Character & Motion Study
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* 1. Image 1 (Left) */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <img
                            src={images[0]}
                            alt="Kheper Model Edit 1"
                            className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* 2. Split Column (Center-Left) */}
                    <div className="flex flex-col gap-6 h-full aspect-[9/16] md:aspect-auto">
                        {/* Top Image */}
                        <div className="overflow-hidden rounded-lg border border-gray-800 group flex-1 relative bg-black">
                            <img
                                src={images[1]}
                                alt="Kheper Model Edit 2"
                                className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Bottom Image */}
                        <div className="overflow-hidden rounded-lg border border-gray-800 group flex-1 relative bg-black">
                            <img
                                src={images[2]}
                                alt="Kheper Model Edit 3"
                                className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* 3. Video 2 (Center-Right) - Gray Background */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <iframe
                            className="absolute inset-0 w-full h-full scale-[2.5] pointer-events-none"
                            src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[1].id}&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0&vq=hd1080&playsinline=1`}
                            title={videos[1].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* 4. Video 1 (Right) - Orange Background */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <iframe
                            className="absolute inset-0 w-full h-full scale-[1.35] pointer-events-none"
                            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[0].id}&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0&vq=hd1080&playsinline=1`}
                            title={videos[0].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OriginalProjectPart2;
