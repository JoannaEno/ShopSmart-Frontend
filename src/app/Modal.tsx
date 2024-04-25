import { useState } from "react";


const Modal = ({ isOpen, onClose, data }: any) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Product Suggestion</h2>
                        <p>{data.message.content}</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;