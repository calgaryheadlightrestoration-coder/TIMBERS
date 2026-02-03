
import React from 'react';
import { Check, X } from 'lucide-react';

const Availability: React.FC = () => {
    const blocks = [
        { dates: 'Dec 1 - Dec 6', nights: '4 night min', price: 1549, status: 'available' },
        { dates: 'Dec 6 - Dec 13', nights: '4 night min', price: 1649, status: 'available' },
        { dates: 'Dec 13 - Dec 18', nights: '4 night min', price: 1749, status: 'available' },
        { dates: 'Dec 19 - Dec 26', nights: '7 nights', price: 3000, status: 'booked' },
        { dates: 'Dec 27 - Jan 1', nights: '5 nights', price: 3000, status: 'available' },
        { dates: 'Jan 1 - Jan 6', nights: '5 nights', price: 1999, status: 'available' },
        { dates: 'Jan 6 - Jan 13', nights: '7 nights', price: 2199, status: 'available' },
        { dates: 'Jan 13 - Jan 20', nights: '7 nights', price: 2199, status: 'available' },
        { dates: 'Jan 20 - Jan 27', nights: '7 nights', price: 2199, status: 'booked' },
        { dates: 'Jan 27 - Feb 3', nights: '7 nights', price: 2199, status: 'available' },
        { dates: 'Feb 3 - Feb 10', nights: '7 nights', price: 2399, status: 'available' },
        { dates: 'Feb 10 - Feb 17', nights: '7 nights', price: 2499, status: 'available' },
        { dates: 'Feb 17 - Feb 24', nights: '7 nights', price: 2399, status: 'available' },
        { dates: 'Feb 24 - Mar 2', nights: '7 nights', price: 2349, status: 'available' },
        { dates: 'Mar 2 - Mar 9', nights: '7 nights', price: 2199, status: 'available' },
        { dates: 'Mar 9 - Mar 16', nights: '7 nights', price: 2199, status: 'booked' },
        { dates: 'Mar 16 - Mar 21', nights: '5 nights', price: 2099, status: 'available' },
        { dates: 'Mar 20 - Mar 25', nights: '5 nights', price: 2099, status: 'available' },
        { dates: 'Mar 25 - Mar 31', nights: '5 night min', price: 1999, status: 'available' },
    ];

    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#c6a87c] uppercase tracking-[0.2em] text-sm font-bold block mb-4">Secure Your Stay</span>
                    <h1 className="text-4xl md:text-6xl font-heading text-white mb-6">Winter Availability</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The Timbers offers exclusive weekly blocks during peak season. Lock in your dates for the ultimate Fernie experience.
                        Direct booking saves 15% vs third-party platforms.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-[#141414] border border-white/5 rounded-sm overflow-hidden">
                    <div className="grid grid-cols-4 bg-[#1a1a1a] p-4 md:p-6 border-b border-white/5 text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-500">
                        <div className="col-span-2 md:col-span-1">Dates</div>
                        <div className="hidden md:block">Duration</div>
                        <div>Nightly Rate</div>
                        <div className="text-right">Status</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {blocks.map((block, i) => (
                            <div key={i} className={`grid grid-cols-4 p-4 md:p-6 items-center transition-colors hover:bg-white/[0.02] ${block.status === 'booked' ? 'opacity-50 grayscale' : ''}`}>
                                <div className="col-span-2 md:col-span-1 font-heading text-white md:text-lg">{block.dates}</div>
                                <div className="hidden md:block text-gray-400 text-sm">{block.nights}</div>
                                <div className="text-[#c6a87c] font-bold">${block.price}</div>
                                <div className="flex justify-end">
                                    {block.status === 'booked' ? (
                                        <span className="inline-flex items-center gap-2 text-red-500/80 text-[10px] uppercase tracking-widest font-bold border border-red-500/20 px-3 py-1 rounded-full">
                                            Booked
                                        </span>
                                    ) : (
                                        <button className="inline-flex items-center gap-2 bg-[#c6a87c]/10 text-[#c6a87c] text-[10px] uppercase tracking-widest font-bold border border-[#c6a87c]/50 px-4 py-1.5 hover:bg-[#c6a87c] hover:text-black transition-all rounded-sm">
                                            Request
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-4">All bookings subject to 16% tax.</p>
                    <a href="mailto:dave@skithetimbers.com" className="inline-block bg-[#c6a87c] text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Contact to Book
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Availability;
