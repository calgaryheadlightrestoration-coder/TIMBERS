
import React, { useState, useEffect } from 'react';
import { ArrowRight, Mountain, Snowflake, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [
        'https://images.unsplash.com/photo-1542668595-fa9394e5b686?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518096338423-f8438b4d8961?q=80&w=2070&auto=format&fit=crop'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0f0f0f]">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                        </div>
                    </div>
                ))}

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-20">
                    <span className="block text-[#c6a87c] text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Fernie, British Columbia
                    </span>
                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-heading text-white mb-8 tracking-tighter shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-100 leading-[0.9]">
                        Fernie BC's<br />
                        <span className="text-[#c6a87c]">Ultimate</span><br />
                        Mountain Lodge
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase tracking-widest">
                        Pure Canadian Log Luxury at the foot of legendary slopes.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <Link to="/availability" className="bg-[#c6a87c] hover:bg-white hover:text-black text-black px-12 py-5 font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl">
                            Check Availability
                        </Link>
                        <Link to="/about" className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-12 py-5 font-bold uppercase tracking-[0.2em] transition-all backdrop-blur-md">
                            Explore Lodge
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Grid */}
            <section className="py-24 bg-[#141414]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
                                The Ultimate<br />
                                <span className="text-[#c6a87c]">Mountain Lodge</span>
                            </h2>
                            <div className="w-20 h-[1px] bg-[#c6a87c]"></div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                The Timbers is a pure Canadian Log Lodge set at the foot of Fernie Alpine Resort, the gem of the Powder Highway.
                                With its prime ski-in/ski-out access, gourmet kitchen, games room, and six bedrooms, it ticks all the boxes for a legendary getaway.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-3 text-[#c6a87c] uppercase tracking-widest text-xs font-bold hover:text-white transition-colors group">
                                View The Property <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1518096338423-f8438b4d8961?q=80&w=1000&auto=format&fit=crop"
                                alt="Lodge Interior"
                                className="rounded-sm w-full h-80 object-cover mt-12"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=1000&auto=format&fit=crop"
                                alt="Skiing"
                                className="rounded-sm w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasons */}
            <section className="grid md:grid-cols-2">
                <Link to="/winter" className="group relative h-[600px] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <Snowflake size={48} className="text-white/80 mb-6 group-hover:rotate-180 transition-transform duration-700" />
                        <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-sm font-bold mb-4">Legendary</span>
                        <h3 className="text-4xl md:text-6xl font-heading text-white group-hover:scale-105 transition-transform">Winter</h3>
                    </div>
                </Link>
                <Link to="/summer" className="group relative h-[600px] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <Sun size={48} className="text-white/80 mb-6 group-hover:rotate-90 transition-transform duration-700" />
                        <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-sm font-bold mb-4">Adventure</span>
                        <h3 className="text-4xl md:text-6xl font-heading text-white group-hover:scale-105 transition-transform">Summer</h3>
                    </div>
                </Link>
            </section>

            {/* Quote */}
            <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Mountain size={40} className="text-[#c6a87c] mx-auto mb-8 opacity-50" />
                    <blockquote className="text-2xl md:text-4xl font-heading text-white leading-normal mb-8">
                        "If you don't do it this year, you will be one year older when you do."
                    </blockquote>
                    <cite className="text-gray-500 uppercase tracking-widest font-bold not-italic font-xs md:text-sm">
                        - Warren Miller
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default Home;
