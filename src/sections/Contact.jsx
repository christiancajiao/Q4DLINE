import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest uppercase">
                    CONTACT
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold tracking-wide">Have a project in mind?</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            At QU4DLINE, we collaborate with studios, brands, and production companies who seek high-end animation, cinematics, visual design, and stylized content.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Tell us about your idea, your team, or your upcoming production. We’re ready to support you from concept development to final render.
                        </p>

                        <div className="pt-8 space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📩</span>
                                <a href="mailto:q4dline.info@gmail.com" className="text-xl hover:text-white/80 transition-colors">
                                    q4dline.info@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📍</span>
                                <span className="text-xl text-gray-300">Based in Colombia — working with clients worldwide</span>
                            </div>
                        </div>

                        <p className="text-gray-400 italic pt-4">
                            “Feel free to reach out. We reply quickly and with the best energy.”
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-gray p-8 rounded-lg border border-gray-800">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">MESSAGE</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-4 rounded hover:bg-gray-200 transition-colors tracking-widest uppercase"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} QU4DLINE. All rights reserved.
            </div>
        </section>
    );
};

export default Contact;
