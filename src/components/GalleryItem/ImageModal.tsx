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
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            tabIndex={-1}
        >
            <div className="relative w-auto max-w-3xl max-h-full overflow-auto">
                <img
                    src={image.url}
                    alt={`Imagen ${selectedImageIndex + 1}`}
                    className="block mx-auto w-auto max-h-[80vh] rounded shadow-lg z-20"
                />
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 text-3xl text-white font-bold z-30"
                >
                    &times;
                </button>
                <button
                    onClick={onPrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 z-30"
                >
                    ‹
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 z-30"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
