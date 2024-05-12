import { FaStar } from "react-icons/fa";

const TestimonialCard: React.FC<{
    rating: number;
    testimonial: string;
    author: string;
}> = ({ rating, testimonial, author }) => {
    return (
        <div className="flex flex-col justify-center min-w-60 max-w-sm bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`h-5 w-5 ${
                            index < rating ? "text-hotel-gold" : "text-gray-300"
                        }`}
                    />
                ))}
            </div>
            <p className="text-center text-lg italic">
                &ldquo;{testimonial}&rdquo;
            </p>
            <p className="text-center font-sans font-semibold text-hotel-black mt-4">{author}</p>
        </div>
    );
};

export default TestimonialCard;