import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { selectComments } from "../../redux/features/comments/commentsSlice";
import Hero from "../../components/Hero/Hero";
import TestimonialCard from "../../components/TestimonialsSection/TestimonialCard";
import Footer from "../../components/Footer/Footer";
import TestimonialForm from "../../components/TestimonialsSection/TestimonialForm";

const CommentsPage: React.FC = () => {
    const comments = useSelector(selectComments);
    const [formAnimation, setFormAnimation] = useState("");
    const [cardsAnimation, setCardsAnimation] = useState("");

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setFormAnimation("components-fade-in");
            setCardsAnimation("components-fade-in");
        } else {
            setFormAnimation("components-fade-out");
            setCardsAnimation("components-fade-out");
        }
    }, [inView]);

    return (
        <>
            <Hero />
            <div ref={ref} className="bg-hotel-gold bg-opacity-40">
                <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
                    <div className={`mb-8 ${formAnimation}`}>
                        <TestimonialForm />
                    </div>
                    <div
                        className={`flex flex-col justify-center gap-8 md:flex-row md:gap-8 ${cardsAnimation}`}
                    >
                        {comments.map((comment, index) => (
                            <TestimonialCard
                                key={index}
                                rating={comment.rating}
                                testimonial={comment.comment} 
                                author={comment.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CommentsPage;
