import React from 'react';

const OriginalProjectPart3 = () => {
    const videos = [
        { id: 'Y1ImLx9JKAo', title: 'Kheper Vertical Short', isVertical: true },
        { id: '7vYnsjGX-iM', title: 'Kheper Horizontal Video', isVertical: false },
    ];

    return (
        <section id="original-project-part3" className="py-24 bg-brand-dark text-white border-t border-gray-800">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

                    {/* Video 1: Vertical */}
                    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <iframe
                            className="absolute inset-0 w-full h-full scale-[1.35] pointer-events-none"
                            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[0].id}&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0`}
                            title={videos[0].title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Video 2: Horizontal */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black group">
                        <div className="absolute inset-0 z-20 bg-transparent"></div>
                        <iframe
                            className="absolute inset-0 w-full h-full scale-[1.35] pointer-events-none"
                            src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[1].id}&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0`}
                            title={videos[1].title}
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

export default OriginalProjectPart3;
