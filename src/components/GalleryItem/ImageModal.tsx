import React, { useEffect } from "react";

const ImageModal: React.FC<{
    images: { url: string; title: string }[];
    selectedImageIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}> = ({ images, selectedImageIndex, onClose, onNext, onPrevious }) => {
    const image = images[selectedImageIndex];

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
                case "ArrowLeft":
                    onPrevious();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, onNext, onPrevious]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            tabIndex={-1}
        >
            <div className="relative w-full max-w-3xl max-h-full flex justify-center items-center">
                <img
                    src={image.url}
                    alt={image.title}
                    className="block max-w-full max-h-full rounded shadow-lg z-20"
                />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-2 text-3xl text-white font-bold z-30"
                >
                    &times;
                </button>
                <button
                    onClick={onPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 z-30"
                >
                    ‹
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 z-30"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
