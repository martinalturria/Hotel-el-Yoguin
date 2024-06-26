import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { firebaseAddComment, firebaseUpdateComment } from "../../redux/features/comments/commentsSlice";
import { AppDispatch } from "../../redux/store";
import { Comment, NewCommentData } from "../../Interfaces/interfaces";

interface TestimonialFormProps {
    comment?: Comment; 
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ comment }) => {
    const [formData, setFormData] = useState<NewCommentData>({
        name: "",
        rating: 0,
        comment: "",
    });
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (comment) {
            setFormData({
                name: comment.name,
                rating: comment.rating,
                comment: comment.comment,
            });
        }
    }, [comment]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    const validateFields = () => {
        const { name, rating, comment } = formData;
        return name && rating && comment;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateFields()) {
            const newCommentData: NewCommentData = { ...formData };
            if (comment) {
                const updatedComment: Comment = {
                    ...comment,
                    name: newCommentData.name,
                    rating: newCommentData.rating,
                    comment: newCommentData.comment,
                };
                dispatch(firebaseUpdateComment(updatedComment))
                    .unwrap()
                    .then(() => {
                        setStatus("Comentario actualizado correctamente.");
                        setStatusType("success");
                        setFormData({ name: "", rating: 0, comment: "" }); 
                    })
                    .catch(() => {
                        setStatus("Error al actualizar el comentario.");
                        setStatusType("error");
                    })
                    .finally(() => {
                        setTimeout(() => {
                            setStatus("");
                            setStatusType("");
                        }, 5000);
                    });
            } else {
                dispatch(firebaseAddComment(newCommentData))
                    .unwrap()
                    .then(() => {
                        setStatus(
                            "Comentario enviado correctamente. ¡Gracias por tu feedback!"
                        );
                        setStatusType("success");
                        setFormData({ name: "", rating: 0, comment: "" }); 
                    })
                    .catch(() => {
                        setStatus("Error al enviar el comentario.");
                        setStatusType("error");
                    })
                    .finally(() => {
                        setTimeout(() => {
                            setStatus("");
                            setStatusType("");
                        }, 5000);
                    });
            }
        } else {
            setStatus("Por favor, completa todos los campos correctamente.");
            setStatusType("error");
            setTimeout(() => {
                setStatus("");
                setStatusType("");
            }, 5000);
        }
    };

    return (
        <div className="bg-hotel-cream p-8 w-full max-w-3xl mx-auto rounded-lg shadow-md">
            <h2 className="font-serif text-3xl text-center text-hotel-black font-bold mb-6">
                Deja Tu Comentario, Muchas Gracias por confiar en nosotros.
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu Nombre"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <div className="mb-4 flex flex-col items-center">
                    <label className="text-lg text-hotel-black mb-2">
                        Selecciona tu calificación:
                    </label>
                    <div className="flex justify-center">
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleRatingChange(index + 1)}
                                className={`text-3xl ${
                                    index < formData.rating
                                        ? "text-hotel-gold"
                                        : "text-gray-300"
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <textarea
                        name="comment"
                        rows={5}
                        value={formData.comment}
                        onChange={handleInputChange}
                        placeholder="Tu Comentario"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-hotel-gold text-hotel-black font-bold py-2 px-4 rounded hover:bg-hotel-brown"
                >
                    {comment ? "Actualizar Comentario" : "Enviar Comentario"}
                </button>
                {status && (
                    <div
                        className={`text-center font-bold mt-4 ${
                            statusType === "error"
                                ? "text-red-500"
                                : "text-green-500"
                        }`}
                    >
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TestimonialForm;
