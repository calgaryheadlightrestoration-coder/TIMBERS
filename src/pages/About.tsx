
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-[#0f0f0f] min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-1000">Fernie Alpine Resort</span>
                <h1 className="text-4xl md:text-6xl text-white font-heading mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-100">The Timbers Lodge</h1>
                <div className="w-24 h-[1px] bg-[#c6a87c] mx-auto mb-8"></div>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    A pure Canadian Log Lodge set at the foot of Fernie Alpine Resort, the gem of the Powder Highway.
                </p>
            </div>

            <div className="container mx-auto px-6 space-y-32">
                {/* The Great Room */}
                <section className="grid lg:grid-cols-2 gap-12 items-center group">
                    <div className="relative order-2 lg:order-1 overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                            alt="The Great Room"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">270 Degree Views</span>
                        <h2 className="text-3xl md:text-5xl text-white font-heading">The Great Room</h2>
                        <p className="text-gray-400 leading-relaxed">
                            With its open concept plan, hardwood floors, 270 degrees of picture windows, leather couches, flat screen TV, stereo and 14 seat dining table, The Timber’s Great Room is ideal for entertaining. It's a fantastic place to cocoon on a couch and admire the mountain views of the Elk Valley.
                        </p>
                    </div>
                </section>

                {/* Kitchen */}
                <section className="grid lg:grid-cols-2 gap-12 items-center group">
                    <div className="space-y-6">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Chef Approved</span>
                        <h2 className="text-3xl md:text-5xl text-white font-heading">Gourmet Kitchen</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Designed for larger groups with two fridges, two electric ovens, a gas cook-top, a dishwasher, and a prep sink. Fully stocked with plates, flatware, and everything your chefs need. For the foody audience, there is a large granite island with bar stools.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
                            alt="Gourmet Kitchen"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </section>

                {/* Hot Tub */}
                <section className="grid lg:grid-cols-2 gap-12 items-center group">
                    <div className="relative order-2 lg:order-1 overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1572186192239-e932ec39c31e?q=80&w=2070&auto=format&fit=crop"
                            alt="Hot Tub"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Time Travel in a Mythical</span>
                        <h2 className="text-3xl md:text-5xl text-white font-heading">Hot Tub</h2>
                        <p className="text-gray-400 leading-relaxed">
                            The Timbers hot tub deck has a mythical history and a magical setting. It’s the inspiration for the set of Hot Tub Time Machine. You exit a log building from glass doors to a hot tub encircled by evergreens. Wow, it’s art imitating life at The Timbers!
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="py-20 text-center bg-[#141414] rounded-sm border border-white/5">
                    <h3 className="text-3xl font-heading text-white mb-6">Experience Log Luxury</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Ski-in/Ski-out access, gourmet amenities, and legendary comfort.
                    </p>
                    <a
                        href="mailto:dave@skithetimbers.com"
                        className="inline-block bg-[#c6a87c] hover:bg-[#d4b88f] text-[#0f0f0f] px-10 py-5 font-bold uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Book Your Stay
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
