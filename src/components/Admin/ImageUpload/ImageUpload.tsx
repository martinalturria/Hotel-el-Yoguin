import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
    firebaseAddImage,
    firebaseUpdateImage,
} from "../../../redux/features/images/imagesSlice";

interface ImageUploadProps {
    existingImage?: { id: string; url: string; title: string };
    onClose: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    existingImage,
    onClose,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>(existingImage?.title || "");
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (existingImage) {
            setTitle(existingImage.title);
        }
    }, [existingImage]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (file) {
            dispatch(firebaseAddImage(file));
        }
        onClose();
    };

    const handleUpdate = () => {
        if (existingImage && file) {
            dispatch(
                firebaseUpdateImage({ id: existingImage.id, file, title })
            );
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg m-10">
                <input type="file" onChange={handleFileChange} />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título de la imagen"
                    className="mt-2 p-2 border rounded"
                />
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                    >
                        Cancelar
                    </button>
                    {existingImage ? (
                        <button
                            onClick={handleUpdate}
                            className="bg-hotel-gold hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Actualizar
                        </button>
                    ) : (
                        <button
                            onClick={handleUpload}
                            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                            Subir
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
