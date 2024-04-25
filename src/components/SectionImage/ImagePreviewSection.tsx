import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ImagePreviewSection: React.FC = () => {
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

    const imagePreviews = [
        { imgSrc: "/assets/Images/home/image1.jpg", galleryLink: "/images" },
        { imgSrc: "/assets/Images/home/image2.jpg", galleryLink: "/images" },
        { imgSrc: "/assets/Images/home/image3.jpg", galleryLink: "/images" },
    ];

    return (
        <div
            ref={ref}
            className="bg-hotel-brown bg-opacity-10 px-4 sm:px-6 lg:px-16 md:h-screen md:mb-0 flex flex-col justify-evenly"
        >
            <h2
                className={`font-serif px text-2xl mt-10 md:mt-0 lg:mt-0 md:text-3xl font-semibold text-center mb-12 ${animationTitle}`}
            >
                NUESTRAS COMODIDADES EN IMÁGENES
            </h2>
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${animationComponent}`}
            >
                {imagePreviews.map((preview, index) => (
                    <Link
                        to={preview.galleryLink}
                        key={index}
                        className="group block"
                    >
                        <div className="relative overflow-hidden bg-white">
                            <img
                                src={preview.imgSrc}
                                alt={`Gallery Preview ${index + 1}`}
                                className="object-cover w-full h-40 md:h-72 group-hover:opacity-95 transition ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <Link
                to="/images"
                className={`font-sans mb-4 text-hotel-brown text-center text-xl mt-7 md:mt-0 font-semibold hover:text-hotel-black transition duration-300 ${animationTitle}`}
            >
                Entrar a la galería
            </Link>
        </div>
    );
};

export default ImagePreviewSection;
