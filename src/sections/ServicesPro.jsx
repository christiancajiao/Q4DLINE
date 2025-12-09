import React from 'react';

const ServicesPro = () => {
    const videos = [
        { id: 'gKGhasyKhbA', title: 'Monstruo verde' },
        { id: 'zEF02etM52I', title: 'Lobito Camisa Roja' },
        { id: 'adZ969a-fyk', title: 'Lobita buzo blanco' },
        { id: 'B3lqoVDA8r0', title: 'Barco', isWide: true },
    ];

    return (
        <section id="services-pro" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">

                <h3 className="text-3xl font-bold mb-12 tracking-widest uppercase text-white border-l-4 border-brand-primary pl-4">
                    Services - Pro
                </h3>

                {/* Top Row: 4 Looping Videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {videos.map((video) => (
                        <div key={video.id} className={`relative overflow-hidden rounded-lg border border-gray-800 bg-black group ${video.isWide ? 'lg:col-span-2' : ''} h-96 lg:h-[500px]`}>
                            {/* Transparent overlay to prevent interaction */}
                            <div className="absolute inset-0 z-20 bg-transparent"></div>

                            <iframe
                                className="absolute inset-0 w-full h-full scale-[1] pointer-events-none"
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0&vq=highres&quality=hd1080`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Image and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Environment Image */}
                    <div className="lg:col-span-2 rounded-lg overflow-hidden border border-gray-800 shadow-2xl h-full">
                        <img
                            src="https://i.postimg.cc/4dKJmFvv/enviroment.png"
                            alt="3D Environment Production"
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="bg-brand-gray p-8 rounded-lg border border-gray-800 relative h-full flex flex-col justify-center">
                        <div className="absolute -left-3 top-10 w-6 h-12 bg-brand-primary rounded-r"></div>
                        <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
                            In the production stage, we build the full 3D pipeline that brings each project to life. This includes modeling characters and environments, developing robust rigs for expressive and precise motion, and crafting high-quality 3D animation.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesPro;
