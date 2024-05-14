import React from "react";

const ConfirmationDialog: React.FC<{
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}> = ({ onConfirm, onCancel, message }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg m-10">
                <p className="mb-10">{message}</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
