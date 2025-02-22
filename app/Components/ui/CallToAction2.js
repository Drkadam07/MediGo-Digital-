'use client'
import React, { useState } from "react";
import { XCircle } from "lucide-react";
import { FaPaperPlane } from 'react-icons/fa';
const CallToAction2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/AssetsServices/call.png"
                    alt="Doctors running"
                    className="w-full max-w-sm md:max-w-md"
                />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Don't let your competitors get ahead.
                </h2>
                <p className="text-gray-700 mt-2">
                    Partner with MediGo Digital, a leading healthcare digital marketing agency - before your competitors do.
                </p>
                <button
                    onClick={() => setIsOpen(true)}
                    className="mt-4 px-6 py-3 w-full sm:w-auto bg-gradient-to-r text-gray-800 font-semibold rounded-full shadow-xl shadow-purple-400/40 from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white transition-all "
                >
                    Click here
                </button>
            </div>

            {/* Popup Form */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-gradient-to-r from-purple-100 to-teal-100  rounded-lg shadow-lg p-6 w-full max-w-md relative">
                        {/* Close Button (Top Right) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                        >
                            <XCircle size={24} />
                        </button>

                        <h3 className="text-xl font-bold mb-4 text-center">Request a Call Back!</h3>
                        <form>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 mb-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 mb-2 border rounded"
                            />
                            <input
                                type="tel"
                                placeholder="Phone No"
                                className="w-full p-2 mb-2 border rounded"
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full p-2 mb-2 border rounded"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 mt-4 flex items-center justify-center gap-2 sm:w-auto bg-gradient-to-r text-gray-800 font-semibold rounded-full shadow-xl shadow-purple-400/40 from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white transition-all"
                            >
                                <FaPaperPlane className="w-5 h-5" /> {/* Icon */}
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CallToAction2;
