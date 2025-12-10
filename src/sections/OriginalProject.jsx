import React from 'react';

const OriginalProject = () => {
    const images = [
        { id: 1, url: 'https://i.postimg.cc/4ysJ4vPC/01.png' },
        { id: 2, url: 'https://i.postimg.cc/5NkMDWhz/04.png' },
        { id: 3, url: 'https://i.postimg.cc/ncW60YmF/10.png' },
        { id: 4, url: 'https://i.postimg.cc/bJqMs6X8/12.png' },
        { id: 5, url: 'https://i.postimg.cc/jqw9Cn9p/07.png' },
        { id: 6, url: 'https://i.postimg.cc/P5hF63xv/06.png' },
        { id: 7, url: 'https://i.postimg.cc/SQMTmFYq/12-01.png' },
        { id: 8, url: 'https://i.postimg.cc/4xBwWXq8/12-02.png' },
    ];

    return (
        <section id="original-project" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-widest uppercase">
                    ORIGINAL PROJECT — KHEPER
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-widest uppercase">( Work In Progress)  </h3>

                {/* Image Grid (2 rows) */}
                {/* Image Grid (3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">

                    {/* Column 1: 8 Images Grid */}
                    <div className="grid grid-cols-2 gap-2 h-full">
                        {images.map((image) => (
                            <div key={image.id} className="overflow-hidden rounded-lg group h-32">
                                <img
                                    src={image.url}
                                    alt={`Kheper Detail ${image.id}`}
                                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Column 2: Single Tall Image */}
                    <div className="overflow-hidden rounded-lg group h-full min-h-[500px]">
                        <img
                            src="https://i.postimg.cc/Jhd8CVDq/Caminante.png"
                            alt="Kheper Vertical Shot 1"
                            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                    </div>

                    {/* Column 3: Single Tall Image */}
                    <div className="overflow-hidden rounded-lg group h-full min-h-[500px]">
                        <img
                            src="https://i.postimg.cc/gj23XhkJ/vistas-Acorazado.png"
                            alt="Kheper Vertical Shot 2"
                            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                    </div>

                </div>

                {/* Description Text */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
                        Kheper is a 3D short film that follows the journey of a small mechanical wanderer crossing vast natural landscapes in search of purpose. Combining hand-drawn textures and a 2D-over-3D visual style, the project explores themes of resilience, transformation, and the quiet bond between nature and machine. As Q4Dline’s first studio production, Kheper showcases our commitment to narrative-driven worldbuilding and stylized animation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OriginalProject;
