import React, { useState, useEffect } from 'react';
import { FaVimeoV, FaYoutube } from "react-icons/fa";
import LazyVideo from '../components/LazyVideo';

const ReelSuperman = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const videoSrc = "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Reel%20Superman%20Q4dline.mp4";

    return (
        <section id="reel-superman" className="w-full bg-black">
            {/* Video Container */}
            <div className="relative w-full h-screen md:h-auto md:aspect-video group">
                {/* Video Background */}
                <LazyVideo
                    key={isMobile ? 'mobile' : 'desktop'}
                    src={videoSrc}
                    alt="Reel Superman"
                    className="absolute inset-0 w-full h-full"
                    objectFit={isMobile ? "contain" : "cover"}
                />

                {/* Optional Overlay Gradient/Logo */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 transition-colors group-hover:bg-black/20"></div>
            </div>

            {/* Disclaimer Text */}
            <div className="container mx-auto px-6 py-8">
                <div className="bg-brand-gray border border-gray-700 p-8 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mb-6">
                        The selection of these shots is part of the personal reel of Juan José Vélez. Only the 3D character animation was done by our team; all other VFX processes were handled by Boxel.
                    </p>

                    {/* Social Links */}

                </div>
            </div>
        </section>
    );
};

export default ReelSuperman;
