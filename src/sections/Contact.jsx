import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        emailjs.sendForm(
            'service_gd0jhaj',
            'template_eoxrsjp',
            form.current,
            'g_HUD6J-n_pR3Ly-9'
        )
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                alert("Message sent successfully!");
            }, (error) => {
                console.error('EmailJS Error:', error);
                setLoading(false);
                setStatus('error');
                // Try to show a more specific error message if available
                const errorMessage = error.text || "Unknown error occurred";
                alert(`Failed to send message: ${errorMessage}. Please check the console for more details.`);
            });
    };

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
                            At Q4Dline, we collaborate with studios, brands, and production companies who seek high-end animation, cinematics, visual design, and stylized content.
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
                        <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name" // IMPORTANT: Must match EmailJS template variable
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email" // IMPORTANT: Must match EmailJS template variable
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 tracking-wide">MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message" // IMPORTANT: Must match EmailJS template variable
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-brand-black border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded hover:bg-gray-200 transition-colors tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Q4Dline. All rights reserved.
            </div>
        </section>
    );
};

export default Contact;
