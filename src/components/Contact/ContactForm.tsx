import { useState } from "react";
import { AiOutlineEnvironment, AiOutlinePhone } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFields = () => {
        const { name, phone, subject, message } = formData;
        if (!name || !phone || !subject || !message) {
            return false;
        }
        if (!/^\+?\d{10,15}$/.test(phone)) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateFields()) {
            const { phone, name, subject, message } = formData;
            const encodedMessage = encodeURIComponent(
                `Hola, mi nombre es ${name} - Tel: ${phone}. ${subject} - ${message}`
            );
            const phoneProp = "+543584225525";
            const api = `https://api.whatsapp.com/send/?phone=${phoneProp}&text=${encodedMessage}&type=phone_number&app_absent=0`;
            window.open(api, "_blank");
            setStatus("Mensaje enviado correctamente!");
            setStatusType("success");
            setTimeout(() => {
                setStatus("");
                setStatusType("");
                setFormData({
                    name: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            }, 5000);
        } else {
            setStatus("Por favor, completa todos los campos correctamente.");
            setStatusType("error");
            setTimeout(() => {
                setStatus("");
                setStatusType("");
            }, 5000);
        }
    };

    return (
        <div className="bg-hotel-cream p-8 w-full max-w-3xl mx-auto rounded-lg shadow-md">
            <h2 className="font-serif text-3xl text-center text-hotel-black font-bold mb-6">
                Contacta con Nosotros
            </h2>
            <div className="hidden md:flex md:flex-col justify-center items-center mb-5 text-lg text-hotel-black">
                <div className="mb-4 flex items-center">
                    <FaMobileAlt className="text-hotel-gold mr-2 text-3xl" />
                    <span className="font-sans">(358) 422-5525</span>
                </div>
                <div className="mb-4 flex items-center">
                    <AiOutlinePhone className="text-hotel-gold mr-2 text-3xl" />
                    <span className="font-sans">(358) 4961-531</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineEnvironment className="text-hotel-gold mr-2 text-3xl" />
                    <span className="font-sans">Bv. Roca 323 (Porteros 1 y 2), Alcira, Córdoba</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu Nombre"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Tu Teléfono"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Asunto"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tu Mensaje"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-hotel-gold text-hotel-black font-bold py-2 px-4 rounded hover:bg-hotel-brown"
                >
                    Enviar Mensaje
                </button>
                {status && (
                    <div
                        className={`text-center font-bold mt-4 ${
                            statusType === "error"
                                ? "text-red-500"
                                : "text-green-500"
                        }`}
                    >
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
