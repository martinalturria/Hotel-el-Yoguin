import React from "react";
import {
    AiOutlinePhone,
    AiOutlineEnvironment,
} from "react-icons/ai";

const ContactInfo: React.FC = () => {
    return (
        <div className="bg-hotel-black text-hotel-cream p-8 w-full max-w-md mx-auto rounded-lg shadow-md">
            <h2 className="font-serif text-2xl text-center font-bold mb-6">Contáctanos</h2>
            <div className="flex flex-col md:justify-center md:items-center h-full">
                <div className="mb-4 flex items-center">
                    <AiOutlinePhone className="text-hotel-gold mr-2" />
                    <span className="font-sans">(358) 4 22-5525</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineEnvironment className="text-hotel-gold mr-2" />
                    <span className="font-sans">Bv. Roca, Alcira, Córdoba</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
