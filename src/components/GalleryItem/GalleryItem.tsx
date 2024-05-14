import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { firebaseRemoveImage } from "../../redux/features/images/imagesSlice";
import { AppDispatch } from "../../redux/store";
import ConfirmationDialog from "../Admin/ComfirmDelete/ConfirmDelete";
import ImageUpload from "../Admin/ImageUpload/ImageUpload";

const GalleryItem: React.FC<{
    image: { id: string; url: string; title: string };
    onClick: () => void;
    isAuthenticated: boolean;
}> = ({ image, onClick, isAuthenticated }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = () => {
        dispatch(firebaseRemoveImage(image.id));
        setShowConfirm(false);
    };

    const openConfirmationDialog = () => setShowConfirm(true);
    const closeConfirmationDialog = () => setShowConfirm(false);

    const openEditDialog = () => setShowEdit(true);
    const closeEditDialog = () => setShowEdit(false);

    return (
        <div className="m-4 w-full md:w-1/3 lg:w-1/4 relative">
            {isAuthenticated && (
                <div className="absolute top-2 right-2 z-10 flex space-x-2">
                    <button
                        onClick={openEditDialog}
                        className="p-1 mx-1 text-hotel-gold hover:text-hotel-brown"
                    >
                        <FaPencilAlt />
                    </button>
                    <button
                        onClick={openConfirmationDialog}
                        className="p-1 mx-1 text-red-600 hover:text-red-800"
                    >
                        <FaTrash />
                    </button>
                </div>
            )}
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
            {showConfirm && (
                <ConfirmationDialog
                    onConfirm={handleDelete}
                    onCancel={closeConfirmationDialog}
                    message="¿Estás seguro de que deseas eliminar esta imagen?"
                />
            )}
            {showEdit && (
                <ImageUpload existingImage={image} onClose={closeEditDialog} />
            )}
        </div>
    );
};

export default GalleryItem;
