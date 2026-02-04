
import React from 'react';
import { Mountain, Wind, Snowflake } from 'lucide-react';

const Winter: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-[#0f0f0f] min-h-screen">
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-1000">The Gem of the Powder Highway</span>
                <h1 className="text-4xl md:text-6xl text-white font-heading mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-100">Winter Escape</h1>
                <div className="w-24 h-[1px] bg-[#c6a87c] mx-auto mb-8"></div>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Ride Fernie Alpine Resort, known for its legendary snowfall and "The Fernie Factor" – delivering deep powder days that defy predictions.
                </p>
            </div>

            <div className="container mx-auto px-6 space-y-32">
                {/* Cat Skiing */}
                <section className="grid lg:grid-cols-2 gap-12 items-center group">
                    <div className="relative overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1541469502804-ladd77395048?q=80&w=2070&auto=format&fit=crop"
                            alt="Cat Skiing"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#c6a87c] text-black px-4 py-2 text-xs font-bold uppercase tracking-widest">
                            Premium Package
                        </div>
                    </div>
                    <div className="space-y-6">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Fernie Wilderness Adventures</span>
                        <h2 className="text-3xl md:text-5xl text-white font-heading">Cat Ski & Stay</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Book your Timbers Cat Ski & Stay Package. Ski Fernie and epic backcountry turns at Fernie Wilderness Adventures, then kick back 7 nights at The Timbers. Enjoy 6 days skiing (4 resort and 2 cat) for approx. $3500 p.p. based on a 12-13 person group.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mountain size={20} className="text-[#c6a87c]" />
                                <span>Over 5,000 acres of terrain</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Wind size={20} className="text-[#c6a87c]" />
                                <span>Elevations over 7,150 ft / 2170 meters</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Snowflake size={20} className="text-[#c6a87c]" />
                                <span>Dry powder for legendary lines</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* The Fernie Factor */}
                <section className="bg-[#141414] p-12 md:p-20 rounded-sm border border-white/5 text-center">
                    <h2 className="text-3xl md:text-5xl text-white font-heading mb-8">The Fernie Factor</h2>
                    <p className="text-gray-400 leading-relaxed max-w-4xl mx-auto mb-12 text-lg">
                        With five bowls to ski, the variety of terrain is immense. Combine that with an abundant snowpack and Fernie is a standout. The snowfall often beats weather predictions, dubbed the “Fernie Factor”, with up to 37 feet of snowfall annually. Snake Ridge became an instant favorite long before a ski magazine listed it as Canada’s best powder run.
                    </p>
                    <a
                        href="mailto:dave@skithetimbers.com"
                        className="inline-block bg-transparent border border-[#c6a87c] text-[#c6a87c] hover:bg-[#c6a87c] hover:text-black px-10 py-4 font-bold uppercase tracking-widest transition-all"
                    >
                        Inquire About Winter Blocks
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Winter;
