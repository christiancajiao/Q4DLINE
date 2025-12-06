import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-white selection:text-black">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
