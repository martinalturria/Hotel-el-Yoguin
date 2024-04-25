import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaWifi, FaTv, FaHotTub, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { MdLocalBar, MdOutlineBedroomParent } from "react-icons/md";
import { PiThermometerColdBold } from "react-icons/pi";

const ServicesSection: React.FC = () => {
    const [animationTitle, setAnimationTitle] = useState("");
    const [animationComponent, setAnimationComponent] = useState("");
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            setAnimationTitle("title-fade-in");
            setAnimationComponent("components-fade-in");
        } else {
            setAnimationTitle("title-fade-out");
            setAnimationComponent("components-fade-out");
        }
    }, [inView]);

    const services = [
        { name: "Habitaciones", icon: MdOutlineBedroomParent },
        { name: "Baño Privado", icon: FaBath },
        { name: "Calefacción", icon: FaHotTub },
        { name: "Aire Acond.", icon: PiThermometerColdBold },
        { name: "TV por cable", icon: FaTv },
        { name: "Serv. de Bar", icon: MdLocalBar },
        { name: "Comedor", icon: IoFastFood },
        { name: "Cocheras", icon: GiHomeGarage },
        { name: "Wi-Fi", icon: FaWifi },
    ];

    return (
        <div
            ref={ref}
            className={
                "bg-hotel-black bg-opacity-95 text-hotel-gold py-16 min-h-96 flex flex-col gap-12 justify-center items-center"
            }
        >
            <h2
                className={`font-sans px-4 text-3xl text-center font-semibold mb-10 ${animationTitle}`}
            >
                SERVICIOS DE NUESTRO HOTEL
            </h2>
            <div
                className={`flex flex-wrap justify-center gap-8 ${animationComponent}`}
            >
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <service.icon className="text-hotel-gold mb-2 text-3xl md:text-6xl" />
                        <span className="text-base font-sans">{service.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
