import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

const testimonials = [
    {
        rating: 5,
        testimonial:
            "Muy buena y familiar la atención. Aparte Aldo, su dueño orgullosamente te cuenta sobre su hotel que es un sitio historico",
        author: "Gisela Abt",
    },
    {
        rating: 4,
        testimonial: "Buen lugar, Limpio, cómodo y con buen servicio.",
        author: "Julio Molas",
    },
    {
        rating: 5,
        testimonial:
            "Excelente hotel, de lo mejor de la zona. Es un casa histórica, el bar-comedor se mantiene como era originalmente y sirven unos menúes muy ricos y caseros. Altamente recomendable!",
        author: "Fabian Barreda",
    },
];

const TestimonialsSection: React.FC = () => {
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
        <div
            ref={ref}
            className="relative text-center py-16"
            style={{
                backgroundImage: "url(/assets/Images/home/Testimonial.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative max-w-6xl mx-auto px-4">
                <h2
                    className={`font-handwriting text-6xl text-hotel-cream mb-8 ${animationTitle}`}
                >
                    Testimonios de nuestros Clientes
                </h2>
                <div
                    className={`flex flex-col justify-center gap-8 md:flex-row md:gap-8 ${animationComponent}`}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                {/* <a
                    href="/comments"
                    className={`text-hotel-gold text-2xl mt-8 inline-block hover:text-hotel-brown transition duration-300 ${animationTitle}`}
                >
                    Ver más
                </a> */}
            </div>
        </div>
    );
};

export default TestimonialsSection;
