import { useLocation } from "react-router-dom";
import { HeroContent } from "../../Interfaces/interfaces";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const frontImage = "/assets/Images/hero/Frente.jpg";
const roomImage = "/assets/Images/hero/Habitacion.jpg";

const heroContent: HeroContent = {
    "/": {
        backgroundImage: frontImage,
        title: "Bienvenidos al Hotel El Yoguin",
        subtitle: "Lujo y confort en el corazón de Alcira",
    },
    "/images": {
        backgroundImage: roomImage,
        title: "Galería de Imágenes",
        subtitle: "Descubre nuestros espacios",
    },
    "/comments": {
        backgroundImage: roomImage,
        title: "Comentarios",
        subtitle: "Opiniones de nuestros huéspedes",
    },
    "/contact": {
        backgroundImage: roomImage,
        title: "Contacto",
        subtitle: "Estamos para servirte",
    },
};

const Hero: React.FC = () => {
    const location = useLocation();
    const content = heroContent[location.pathname] || heroContent["/"];
    const isHome = location.pathname === "/";
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);

        const frameId = requestAnimationFrame(() => {
            setAnimate(true);
        });

        return () => cancelAnimationFrame(frameId);
    }, [location.pathname]);

    return (
        <div className={`relative ${isHome ? "h-screen" : "h-[70vh]"}`}>
            <Navbar />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div
                className="relative z-10 flex flex-col justify-center items-center h-full"
                style={{
                    backgroundImage: `url(${content.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-20">
                    <h1
                        className={`text-6xl lg:text-7xl text-hotel-gold font-bold text-center font-handwriting ${
                            animate ? "animate-fadeIn" : ""
                        }`}
                    >
                        {content.title}
                    </h1>
                    <h2
                        className={`text-xl md:text-xl lg:text-2xl text-white font-semibold text-center mt-4 font-sans ${
                            animate ? "animate-fadeIn" : ""
                        }`}
                    >
                        {content.subtitle}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
