import React, { useState, useEffect } from 'react';

const Reel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Placeholder images for the reel
    const slides = [
        'https://i.postimg.cc/L8j0DkDn/04Low.jpg',
        'https://i.postimg.cc/jqw9Cn9p/07.png',
        'https://i.postimg.cc/SQMTmFYq/12-01.png',
        'https://i.postimg.cc/4xBwWXq8/12-02.pnng',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="reel" className="relative w-full h-screen overflow-hidden bg-black">
            {/* Carousel Slides */}
            <div className="absolute inset-0 w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Reel Slide ${index + 1}`}
                            className="w-full h-full object-cover opacity-60" // Darken image slightly for text contrast if needed
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
                    </div>
                ))}
            </div>

            {/* Content Overlay (Optional Title or just clean) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-[0.2em] opacity-90 animate-fade-in-up">
                    QU4DLINE
                </h1>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2"
            >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2"
            >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Reel;
