// Footer.tsx
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
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

    return (
        <footer className="bg-hotel-black">
            <div ref={ref} className="max-w-6xl mx-auto px-4 py-10 text-white">
                <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:justify-around">
                    <div
                        className={`flex flex-col gap-1 justify-center items-center ${animationComponent}`}
                    >
                        <Link to="/contact">
                            <h3
                                className={`font-serif text-xl text-center font-semibold mb-2 text-hotel-nav ${animationTitle}`}
                            >
                                Contacto:
                            </h3>
                        </Link>
                        <p className="font-sans text-sm">
                            Celular: (358) 422-5525
                        </p>
                        <p className="font-sans text-sm">
                            Teléfono: (358) 4961-531
                        </p>
                        <p className="font-sans text-sm">
                            Dirección: Bv. Roca 323 (Porteros 1 y 2), Alcira
                        </p>
                    </div>
                    <div
                        className={`flex flex-col gap-4 ${animationComponent}`}
                    >
                        <h3 className="font-serif text-xl text-center font-semibold mb-2 text-hotel-nav">
                            Síguenos:
                        </h3>
                        <div className="flex justify-center space-x-4 text-2xl">
                            <a
                                href="https://www.facebook.com/aldo.chiesa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/aldovoley/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`text-center text-sm mt-8 ${animationTitle}`}>
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <a
                            href="https://www.linkedin.com/in/martin-alturria/"
                            target="_blank"
                            className="font-sans text-sm"
                        >
                            CREADO MARTÍN ALTURRIA
                        </a>
                        . Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
