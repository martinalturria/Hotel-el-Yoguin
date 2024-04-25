import React from "react";
import { AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

const ContactInfo: React.FC = () => {
    return (
        <div className="bg-hotel-black text-hotel-cream p-8 w-full max-w-md mx-auto rounded-lg shadow-md">
            <h2 className="font-serif text-2xl text-center font-bold mb-6">
                Contáctanos
            </h2>
            <div className="flex flex-col md:justify-center md:items-center h-full">
                <div className="mb-4 flex items-center">
                    <FaMobileAlt className="text-hotel-gold mr-2" />
                    <span className="font-sans">(358) 422-5525</span>
                </div>
                <div className="mb-4 flex items-center">
                    <AiOutlinePhone className="text-hotel-gold mr-2" />
                    <span className="font-sans">(358) 4961-531</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineEnvironment className="text-hotel-gold mr-2" />
                    <span className="font-sans">
                        Bv. Roca 323 (Porteros 1 y 2), Alcira
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
