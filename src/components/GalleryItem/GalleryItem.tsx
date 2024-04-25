import React from "react";

const GalleryItem: React.FC<{
    image: { url: string; title: string };
    onClick: () => void;
}> = ({ image, onClick }) => {
    return (
        <div className="m-4 w-full md:w-1/3 lg:w-1/4">
            <div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer border-hotel-brown border-2"
                onClick={onClick}
            >
                <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 "
                />
            </div>
        </div>
    );
};

export default GalleryItem;
