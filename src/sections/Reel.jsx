import React from 'react';

const Reel = () => {
    const videoId = "dUeJa52r-s0";
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?si=IaGasuVckO3EIetT&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;

    return (
        <section id="reel" className="w-full bg-black">
            {/* Video Container */}
            <div className="relative w-full aspect-video group cursor-pointer">
                {/* Click Overlay */}
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 w-full h-full"
                    aria-label="Watch full video on YouTube"
                >
                </a>

                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <iframe
                        src={embedUrl}
                        title="Q4Dline Reel"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full object-cover"
                    ></iframe>
                </div>

                {/* Optional Overlay Gradient/Logo */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors group-hover:bg-black/20"></div>
            </div>

            {/* Disclaimer Text */}
            <div className="container mx-auto px-6 py-8">
                <div className="bg-brand-gray border border-gray-700 p-8 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center">
                        The selection of these shots is part of the personal reels of Juan José Vélez and Darshi Velasco, who have worked for various international studios and brands. Only the character animation featured here was created by our team.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Reel;
