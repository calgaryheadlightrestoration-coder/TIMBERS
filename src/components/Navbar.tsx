
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { title: 'The Lodge', path: '/' },
        { title: 'Availability', path: '/availability' },
        { title: 'The Property', path: '/about' },
        { title: 'Winter', path: '/winter' },
        { title: 'Summer', path: '/summer' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-heading font-bold text-white tracking-[0.2em]">
                        THE TIMBERS
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-widest hover:text-[#c6a87c] transition-colors ${location.pathname === link.path ? 'text-[#c6a87c]' : 'text-gray-300'
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <a
                            href="https://skithetimbers.com/availability/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#c6a87c] hover:bg-[#d4b88f] text-[#0f0f0f] px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute w-full bg-[#0f0f0f] border-b border-white/5 transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#c6a87c]"
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a
                        href="https://skithetimbers.com/availability/"
                        className="block text-center bg-[#c6a87c] text-[#0f0f0f] px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
