import React, { useState, useEffect } from 'react';
import { FaVimeoV, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
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

    const videoSrc = isMobile
        ? "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Superman%20Reel%20Vertical%20Q4dline_.mp4"
        : "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/Reel%20Superman%20Q4dline.mp4";

    const posterSrc = isMobile
        ? "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/reelStillVertical.png"
        : "https://pub-a3dfd359e9d342bc800cb0fee0e46ca2.r2.dev/ReelStill.png";

    return (
        <section id="reel" className="w-full bg-black">
            {/* Video Container */}
            <h3 className="text-3xl font-bold mb-12 tracking-widest uppercase text-white border-l-4 border-brand-primary pl-4">
                SERVICES - POST- VFX ANIMATION
            </h3>
            <div className="relative w-full h-screen md:h-auto md:aspect-video group">
                {/* Video Background */}
                <a
                    href="https://vimeo.com/1172593490?fl=pl&fe=sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1AB7EA] transition-colors duration-300"
                    aria-label="Watch on Vimeo"
                >
                    <LazyVideo
                        key={isMobile ? 'mobile' : 'desktop'}
                        src={videoSrc}
                        poster={posterSrc}
                        alt="Q4Dline Superman Reel"
                        className="absolute inset-0 w-full h-full"
                        objectFit={isMobile ? "contain" : "cover"}
                    />
                </a>


                {/* Optional Overlay Gradient/Logo */}
            </div>

            {/* Disclaimer Text */}
            <div className="container mx-auto px-6 py-8">
                <div className="bg-brand-gray border border-gray-700 p-8 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mb-6">
                        The selection of these shots is part of the personal reel of Juan José Vélez. Only the 3D character animation was done by our team; all other VFX processes were handled by Boxel.
                    </p>


                </div>
            </div>
        </section>
    );
};

export default ReelSuperman;
