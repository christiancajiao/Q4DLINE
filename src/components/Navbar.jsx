import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsServicesDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={(e) => handleScrollTo(e, '#reel')} className="text-2xl font-bold tracking-widest text-white">
          Q4Dline
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#reel"
            onClick={(e) => handleScrollTo(e, '#reel')}
            className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors relative group"
          >
            REEL
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors flex items-center focus:outline-none"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
            >
              SERVICES
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-black/95 border border-gray-800 rounded shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${isServicesDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#services-pre"
                onClick={(e) => handleScrollTo(e, '#services-pre')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Services Pre
              </a>
              <a
                href="#services-pro"
                onClick={(e) => handleScrollTo(e, '#services-pro')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Services Pro
              </a>
              <a
                href="#services-post"
                onClick={(e) => handleScrollTo(e, '#services-post')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Services Post
              </a>
            </div>
          </div>

          <a
            href="#original-project"
            onClick={(e) => handleScrollTo(e, '#original-project')}
            className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors relative group"
          >
            ORIGINAL PROJECT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors flex items-center focus:outline-none"
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
            >
              ABOUT US
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-black/95 border border-gray-800 rounded shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${isAboutDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <a
                href="#about-us"
                onClick={(e) => handleScrollTo(e, '#about-us')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#team"
                onClick={(e) => handleScrollTo(e, '#team')}
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Team
              </a>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors relative group"
          >
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 h-screen">
          <div className="flex flex-col items-center py-8 space-y-6">
            <a
              href="#reel"
              onClick={(e) => handleScrollTo(e, '#reel')}
              className="text-lg font-medium tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              REEL
            </a>

            <div className="flex flex-col items-center space-y-4 w-full bg-white/5 py-4">
              <span className="text-lg font-bold text-white tracking-wider">SERVICES</span>
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Overview
              </a>
              <a
                href="#services-pre"
                onClick={(e) => handleScrollTo(e, '#services-pre')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Pre-Production
              </a>
              <a
                href="#services-pro"
                onClick={(e) => handleScrollTo(e, '#services-pro')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Services Pro
              </a>
              <a
                href="#services-post"
                onClick={(e) => handleScrollTo(e, '#services-post')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Post-Production
              </a>
            </div>

            <a
              href="#original-project"
              onClick={(e) => handleScrollTo(e, '#original-project')}
              className="text-lg font-medium tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              ORIGINAL PROJECT
            </a>

            <div className="flex flex-col items-center space-y-4 w-full bg-white/5 py-4">
              <span className="text-lg font-bold text-white tracking-wider">ABOUT US</span>
              <a
                href="#about-us"
                onClick={(e) => handleScrollTo(e, '#about-us')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#team"
                onClick={(e) => handleScrollTo(e, '#team')}
                className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Team
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="text-lg font-medium tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
