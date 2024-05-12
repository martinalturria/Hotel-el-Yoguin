import { useSelector } from 'react-redux';
import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState, useMemo } from "react";
import { selectComments } from '../../redux/features/comments/commentsSlice';

const TestimonialsSection: React.FC = () => {
    const comments = useSelector(selectComments);
    const filteredComments = useMemo(() => {
        return comments
            .filter(comment => comment.rating === 5)
            .sort((a, b) => b.date.localeCompare(a.date)) 
            .slice(0, 3);
    }, [comments]);

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
                    {filteredComments.map((testimonial, index) => (
                        <TestimonialCard key={index} rating={testimonial.rating} testimonial={testimonial.comment} author={testimonial.name} />
                    ))}
                </div>
                <a
                    href="/comments"
                    className={`text-hotel-gold text-2xl mt-8 inline-block hover:text-hotel-brown transition duration-300 ${animationTitle}`}
                >
                    Ver más
                </a>
            </div>
        </div>
    );
};

export default TestimonialsSection;
