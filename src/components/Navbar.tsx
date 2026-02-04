
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'The Lodge', path: '/' },
        { title: 'Availability', path: '/availability' },
        { title: 'The Property', path: '/about' },
        { title: 'Winter', path: '/winter' },
        { title: 'Summer', path: '/summer' },
    ];

    const isHomePage = location.pathname === '/';
    const isDarkBackground = isHomePage && !scrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${!isDarkBackground ? 'bg-white/95 shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="transition-transform hover:scale-105">
                        <img src="/logo.png" alt="The Timbers" className="h-12 md:h-16 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-widest hover:text-[#c6a87c] transition-colors ${location.pathname === link.path
                                    ? 'text-[#c6a87c]'
                                    : isDarkBackground ? 'text-white' : 'text-[#1a1a1a]'
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <a
                            href="https://skithetimbers.com/availability/"
                            target="_blank"
                            rel="noreferrer"
                            className={`px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors border ${!isDarkBackground
                                ? 'bg-[#c6a87c] text-white border-[#c6a87c] hover:bg-transparent hover:text-[#c6a87c]'
                                : 'bg-white text-[#1a1a1a] border-white hover:bg-transparent hover:text-white'
                                }`}
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${!isDarkBackground ? 'text-[#1a1a1a]' : 'text-white'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#c6a87c]"
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a
                        href="https://skithetimbers.com/availability/"
                        className="block text-center bg-[#c6a87c] text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
