import React from "react";
import { FaStar, FaPencilAlt, FaTrash } from "react-icons/fa";

const TestimonialCard: React.FC<{
    rating: number;
    testimonial: string;
    author: string;
    onEdit: () => void;
    onDelete: () => void;
    isAuthenticated: boolean;
}> = ({ rating, testimonial, author, onEdit, onDelete, isAuthenticated }) => {
    return (
        <div
            className={`flex flex-col justify-between min-w-60 max-w-sm bg-white bg-opacity-90 p-4 rounded-lg shadow-md ${
                !isAuthenticated && "items-center mb-4"
            }`}
        >
            <div className="flex justify-between mb-5">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`h-5 w-5 ${
                                index < rating
                                    ? "text-hotel-gold"
                                    : "text-gray-300"
                            }`}
                        />
                    ))}
                </div>
                {isAuthenticated && (
                    <div className="flex items-center">
                        <button
                            onClick={onEdit}
                            className="p-1 mx-1 text-hotel-gold hover:text-hotel-brown"
                        >
                            <FaPencilAlt />
                        </button>
                        <button
                            onClick={onDelete}
                            className="p-1 mx-1 text-red-600 hover:text-red-800"
                        >
                            <FaTrash />
                        </button>
                    </div>
                )}
            </div>
            <p className="text-center text-lg italic">
                &ldquo;{testimonial}&rdquo;
            </p>
            <p className="text-center font-sans font-semibold text-hotel-black mt-4">
                {author}
            </p>
        </div>
    );
};

export default TestimonialCard;
