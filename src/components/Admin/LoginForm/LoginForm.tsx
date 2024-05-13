import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsAuthenticated,
    setUser,
} from "../../../redux/features/admin/adminSlice";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/admin/home");
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential.user.email) {
                dispatch(setUser({ email: userCredential.user.email }));
            } else {
                throw new Error("Email no disponible");
            }
        } catch (error) {
            setError("Login fallido. Verifique sus credenciales.");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="bg-hotel-cream p-8 w-full max-w-3xl mx-auto rounded-lg shadow-md">
            <h2 className="font-serif text-3xl text-center text-hotel-black font-bold mb-6">
                Acceso Administrativo
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu Usuario"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Tu Contraseña"
                        className="w-full p-2 text-hotel-black bg-white rounded border border-hotel-black"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-hotel-gold text-hotel-black font-bold py-2 px-4 rounded hover:bg-hotel-brown"
                >
                    Ingresar
                </button>
                {error && (
                    <div className="text-center font-bold mt-4 text-red-500">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
