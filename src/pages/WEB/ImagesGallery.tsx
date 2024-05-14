import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Hero from "../../components/Hero/Hero";
import ImageModal from "../../components/GalleryItem/ImageModal";
import { useInView } from "react-intersection-observer";
import {
    selectImages,
    fetchAndSetImages,
} from "../../redux/features/images/imagesSlice";
import { RootState, AppDispatch } from "../../redux/store";
import useAuthListener from "../../hooks/useAuthListener";
import ImageUpload from "../../components/Admin/ImageUpload/ImageUpload";

const ImageGallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    );
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [animationComponent, setAnimationComponent] = useState("");
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const images = useSelector((state: RootState) => selectImages(state));
    const isAuthenticated = useSelector(
        (state: RootState) => state.admin.isAuthenticated
    );
    const dispatch = useDispatch<AppDispatch>();

    useAuthListener();

    useEffect(() => {
        dispatch(fetchAndSetImages());
    }, [dispatch]);

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

    const openUploadModal = () => {
        setShowUploadModal(true);
    };

    const closeUploadModal = () => {
        setShowUploadModal(false);
    };

    return (
        <div>
            <Hero />
            <div className="bg-hotel-cream p-8">
                {isAuthenticated && (
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={openUploadModal}
                            className="bg-hotel-brown text-white px-4 py-2 rounded hover:bg-hotel-black transition duration-300"
                        >
                            Subir Nueva Imagen
                        </button>
                    </div>
                )}
                <div
                    ref={ref}
                    className={`flex flex-wrap justify-center items-center ${animationComponent}`}
                >
                    {images.map((image, index) => (
                        <GalleryItem
                            key={image.id}
                            image={image}
                            onClick={() => openModal(index)}
                            isAuthenticated={isAuthenticated}
                        />
                    ))}
                </div>
                {selectedImageIndex !== null && (
                    <ImageModal
                        images={images}
                        selectedImageIndex={selectedImageIndex}
                        onClose={closeModal}
                        onNext={goToNextImage}
                        onPrevious={goToPreviousImage}
                    />
                )}
                {showUploadModal && <ImageUpload onClose={closeUploadModal} />}
            </div>
            <Footer />
        </div>
    );
};

export default ImageGallery;
