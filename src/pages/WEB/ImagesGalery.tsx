import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Hero from "../../components/Hero/Hero";
import ImageModal from "../../components/GalleryItem/ImageModal";
import { useInView } from "react-intersection-observer";

const images = [
    { id: 1, url: "/assets/Images/gallery/image1.jpg", title: "Imagen 1" },
    { id: 2, url: "/assets/Images/gallery/image2.jpg", title: "Imagen 2" },
    { id: 2, url: "/assets/Images/gallery/image3.jpg", title: "Imagen 3" },
    { id: 2, url: "/assets/Images/gallery/image4.jpg", title: "Imagen 4" },
    { id: 2, url: "/assets/Images/gallery/image5.jpg", title: "Imagen 5" },
    { id: 2, url: "/assets/Images/gallery/image6.jpg", title: "Imagen 6" },
    { id: 2, url: "/assets/Images/gallery/image7.jpg", title: "Imagen 7" },
    { id: 2, url: "/assets/Images/gallery/image8.jpg", title: "Imagen 8" },
    { id: 2, url: "/assets/Images/gallery/image9.jpg", title: "Imagen 9" },
    { id: 2, url: "/assets/Images/gallery/image10.jpg", title: "Imagen 10" },
];

const ImageGallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    );

    const [animationComponent, setAnimationComponent] = useState("");
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setAnimationComponent("components-fade-in");
        } else {
            setAnimationComponent("components-fade-out");
        }
    }, [inView]);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex !== null ? (prevIndex + 1) % images.length : null
        );
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex !== null
                ? (prevIndex - 1 + images.length) % images.length
                : null
        );
    };

    return (
        <div>
            <Hero />
            <div
                ref={ref}
                className={`bg-hotel-cream p-8 flex flex-wrap justify-center items-center ${animationComponent}`}
            >
                {images.map((image, index) => (
                    <GalleryItem
                        key={image.id}
                        image={image}
                        onClick={() => openModal(index)}
                    />
                ))}
                {selectedImageIndex !== null && (
                    <ImageModal
                        images={images}
                        selectedImageIndex={selectedImageIndex}
                        onClose={closeModal}
                        onNext={goToNextImage}
                        onPrevious={goToPreviousImage}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ImageGallery;
