
import React from 'react';
import { Sun, Anchor, Bike, Fish } from 'lucide-react';

const Summer: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-[#0f0f0f] min-h-screen">
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-1000">More Than Just A Ski Town</span>
                <h1 className="text-4xl md:text-6xl text-white font-heading mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-100">Summer Adventures</h1>
                <div className="w-24 h-[1px] bg-[#c6a87c] mx-auto mb-8"></div>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Fernie is an ideal summer location with an incredible breadth of mountain activities. Come see why it is favoured by many over the mountain parks.
                </p>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-[#141414] border border-white/5 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1544186381-31a3097c5e2b?q=80&w=2070&auto=format&fit=crop" alt="Biking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8">
                        <Bike className="text-[#c6a87c] w-8 h-8 mb-4" />
                        <h3 className="text-2xl text-white font-heading mb-4">Mountain Biking</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            From kid-friendly rides to black diamond extremes, Fernie boasts six biking areas. Two areas are right out The Timber’s front door.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#141414] border border-white/5 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1587313862211-137272202684?q=80&w=2070&auto=format&fit=crop" alt="Golfing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8">
                        <Sun className="text-[#c6a87c] w-8 h-8 mb-4" />
                        <h3 className="text-2xl text-white font-heading mb-4">Golfing</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            With 360 degree mountain views, wildlife sightings, and great prices, Fernie Golf and Country Club is a fantastic experience.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#141414] border border-white/5 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1510425121773-f3d73b06db99?q=80&w=2070&auto=format&fit=crop" alt="Fishing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8">
                        <Fish className="text-[#c6a87c] w-8 h-8 mb-4" />
                        <h3 className="text-2xl text-white font-heading mb-4">Fly Fishing</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            World class fly fishing for cutthroat trout in the Elk and Wigwam rivers. Walk and wade or drift boats – it's all here.
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#141414] border border-white/5 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1976&auto=format&fit=crop" alt="Rafting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8">
                        <Anchor className="text-[#c6a87c] w-8 h-8 mb-4" />
                        <h3 className="text-2xl text-white font-heading mb-4">Rafting</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            Play on the waters of the Raging Elk Canyon. Enjoy it with rafting or kayaking trips in Class II, III and IV whitewater.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20 text-center">
                <a
                    href="mailto:dave@skithetimbers.com"
                    className="inline-block bg-[#c6a87c] hover:bg-[#d4b88f] text-[#0f0f0f] px-12 py-5 font-bold uppercase tracking-widest transition-all hover:scale-105"
                >
                    Book Your Summer Adventure
                </a>
            </div>
        </div>
    );
};

export default Summer;
