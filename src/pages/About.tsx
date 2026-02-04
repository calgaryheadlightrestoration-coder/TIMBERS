
import React from 'react';

const About: React.FC = () => {
    const rooms = [
        {
            title: "Great Room",
            subtitle: "270 Degree Views",
            description: "With its open concept plan, hardwood floors, 270 degrees of picture windows, leather couches, flat screen TV, stereo and 14 seat dining table, The Timber’s Great Room is ideal for entertaining. It's a fantastic place to cocoon on a couch and admire the mountain views of the Elk Valley.",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Gourmet Kitchen",
            subtitle: "Chef Approved",
            description: "Designed for larger groups with two fridges, two electric ovens, a gas cook-top, a dishwasher, and a prep sink. Fully stocked with plates, flatware, and everything your chefs need. For the foody audience, there is a large granite island with bar stools.",
            image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Mountain Views",
            subtitle: "360 Degree Panorama",
            description: "Surrounded by the towering peaks of the Lizard Range, The Timbers offers unparalleled views of Fernie's pristine wilderness. Whether you're watching the morning sun hit the peaks or the stars emerge over the valley, the mountain is always the centerpiece of your stay.",
            image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Mountain Gear",
            subtitle: "Mud Room",
            description: "Ski down the Elk Quad line and stroll a few steps into a large mudroom. Rack skis, remove boots on the custom timber bench, and hang wet clothing on hand forged hooks. Features heated concrete floors, washer, dryer, and laundry sink.",
            image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const bedrooms = [
        { title: "Log Heaven", desc: "Main floor, King bed, ensuite with soaker tub/shower. 11ft ceilings, tranquility and warmth.", image: "https://images.unsplash.com/photo-1616594039964-40891a90c3d9?q=80&w=2072&auto=format&fit=crop" },
        { title: "Tree Tops", desc: "Upstairs, Queen bed, balcony views, steam shower. 15ft ceilings, large log details.", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" },
        { title: "Larch View", desc: "Upstairs, Queen bed, cozy with treetop balcony. Full ensuite with deep tub/shower.", image: "https://images.unsplash.com/photo-1505693416388-b0346ef4143d?q=80&w=2070&auto=format&fit=crop" },
        { title: "Elk Quad", desc: "Upstairs, Two Queen beds, view of Elk Quad Chair. Full ensuite with deep soaker tub.", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2073&auto=format&fit=crop" },
        { title: "The Bunkie", desc: "Main floor, Massive Queen/Queen bunk. 11ft log walls. Stuff of childhood dreams.", image: "https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=2070&auto=format&fit=crop" },
        { title: "Mountain Hideaway", desc: "Upstairs, Queen + Twin bed. Sloped ceilings. Bathroom across hall.", image: "https://images.unsplash.com/photo-1512918760534-27f6ddadb94e?q=80&w=2070&auto=format&fit=crop" }
    ];

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-1000">Fernie Alpine Resort</span>
                <h1 className="text-4xl md:text-6xl text-[#1a1a1a] font-heading mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-100">The Timbers Lodge</h1>
                <div className="w-24 h-[1px] bg-[#c6a87c] mx-auto mb-8"></div>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    A pure Canadian Log Lodge set at the foot of Fernie Alpine Resort, the gem of the Powder Highway.
                </p>
            </div>

            <div className="container mx-auto px-6 space-y-32">
                {/* Main Rooms */}
                {rooms.map((room, index) => (
                    <section key={index} className="grid lg:grid-cols-2 gap-12 items-center group">
                        <div className={`relative overflow-hidden rounded-sm ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{room.subtitle}</span>
                            <h2 className="text-3xl md:text-5xl text-[#1a1a1a] font-heading">{room.title}</h2>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                {room.description}
                            </p>
                        </div>
                    </section>
                ))}

                {/* Bedrooms Grid */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl text-[#1a1a1a] font-heading mb-4">The Bedrooms</h2>
                        <p className="text-gray-500">Sleeps 14-16 guests comfortably</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bedrooms.map((room, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-sm mb-6 h-64">
                                    <img
                                        src={room.image}
                                        alt={room.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-heading text-[#1a1a1a] mb-2">{room.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{room.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <div className="py-20 text-center bg-gray-50 rounded-sm border border-gray-100">
                    <h3 className="text-3xl font-heading text-[#1a1a1a] mb-6">Experience Log Luxury</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                        Ski-in/Ski-out access, gourmet amenities, and legendary comfort.
                    </p>
                    <a
                        href="mailto:dave@skithetimbers.com"
                        className="inline-block bg-[#c6a87c] hover:bg-[#d4b88f] text-white px-10 py-5 font-bold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg"
                    >
                        Book Your Stay
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
