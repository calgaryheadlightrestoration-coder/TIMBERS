
import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    bookingDates: string;
    formId: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingDates, formId }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(`https://formcarry.com/s/${formId}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>

                {status === 'success' ? (
                    <div className="p-12 text-center space-y-6">
                        <CheckCircle size={64} className="mx-auto text-[#c6a87c]" />
                        <h2 className="text-3xl font-heading text-[#1a1a1a]">Request Sent!</h2>
                        <p className="text-gray-500">We've received your inquiry for <strong>{bookingDates}</strong> and will get back to you shortly.</p>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block mb-2">Booking Inquiry</span>
                        <h2 className="text-3xl font-heading text-[#1a1a1a] mb-6">Request Your Stay</h2>

                        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 mb-8">
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Dates Selected</p>
                            <p className="text-[#1a1a1a] font-heading text-xl">{bookingDates}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="dates" value={bookingDates} />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">First Name</label>
                                    <input required name="firstName" type="text" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-[#c6a87c] transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Last Name</label>
                                    <input required name="lastName" type="text" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-[#c6a87c] transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                                <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-[#c6a87c] transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                                <input required name="phone" type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-[#c6a87c] transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message (Optional)</label>
                                <textarea name="message" rows={3} className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-[#c6a87c] transition-colors resize-none"></textarea>
                            </div>

                            <button
                                disabled={status === 'submitting'}
                                type="submit"
                                className="w-full bg-[#1a1a1a] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#c6a87c] transition-all disabled:opacity-50"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Request'}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-xs text-center">Something went wrong. Please try again or email us directly.</p>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
