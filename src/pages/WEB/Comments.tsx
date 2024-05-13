/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { firebaseRemoveComment, selectComments } from "../../redux/features/comments/commentsSlice";
import { selectIsAuthenticated } from "../../redux/features/admin/adminSlice";
import Hero from "../../components/Hero/Hero";
import TestimonialCard from "../../components/TestimonialsSection/TestimonialCard";
import TestimonialForm from "../../components/TestimonialsSection/TestimonialForm";
import Footer from "../../components/Footer/Footer";
import ConfirmationDialog from "../../components/Admin/ComfirmDelete/ConfirmDelete";
import { AppDispatch } from "../../redux/store";

const CommentsPage: React.FC = () => {
    const comments = useSelector(selectComments);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch<AppDispatch>();
    const [currentComment, setCurrentComment] = useState<any>(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [formAnimation, setFormAnimation] = useState("");
    const [cardsAnimation, setCardsAnimation] = useState("");

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
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

    const handleEdit = (comment: any) => {
        setCurrentComment(comment);
    };

    const handleDelete = (comment: any) => {
        setCurrentComment(comment);
        setShowConfirmDialog(true);
    };

    const confirmDelete = () => {
        if (currentComment) {
            dispatch(firebaseRemoveComment(currentComment.id))
                .unwrap()
                .then(() => {
                    console.log("Comentario eliminado correctamente.");
                    setShowConfirmDialog(false);
                    setCurrentComment(null);
                })
                .catch((error) => {
                    console.error("Error al eliminar el comentario:", error);
                });
        } else {
            setShowConfirmDialog(false);
        }
    };

    return (
        <>
            <Hero />
            <div ref={ref} className="bg-hotel-gold bg-opacity-40">
                <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
                    <div className={`mb-8 ${formAnimation}`}>
                        <TestimonialForm comment={currentComment} />
                    </div>
                    <div className={`flex flex-col justify-center gap-8 md:flex-row md:flex-wrap md:gap-8 ${cardsAnimation}`}>
                        {comments.map((comment: any) => (
                            <TestimonialCard
                                key={comment.id}
                                rating={comment.rating}
                                testimonial={comment.comment}
                                author={comment.name}
                                onEdit={() => handleEdit(comment)}
                                onDelete={() => handleDelete(comment)}
                                isAuthenticated={isAuthenticated}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {showConfirmDialog && (
                <ConfirmationDialog
                    onConfirm={confirmDelete}
                    onCancel={() => setShowConfirmDialog(false)}
                />
            )}
            <Footer />
        </>
    );
};

export default CommentsPage;
