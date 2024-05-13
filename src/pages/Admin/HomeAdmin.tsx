import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import TestimonialCard from "../../components/TestimonialsSection/TestimonialCard";
import Footer from "../../components/Footer/Footer";

const HomeAdmin = () => {
    return (
        <>
            <Hero />
            <div className="bg-hotel-gold bg-opacity-40 flex flex-col md:flex-row justify-around items-center p-10">
                <div className="flex flex-col items-center justify-center text-center h-64">
                    <Link to="/admin/comments">
                        <TestimonialCard
                            rating={5}
                            testimonial="EDITAR LA SECCIÓN COMENTARIOS"
                            author="Aldo Chiesa"
                            isAuthenticated={true}
                            onDelete={() => {}}
                            onEdit={() => {}}
                        />
                        <div className="mt-2 text-lg font-bold font-serif">
                            Editar Comentarios
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center text-center h-64"> {/* Ajuste de altura aquí */}
                    <Link to="/admin/images">
                        <div
                            style={{
                                width: 200,
                                height: 200,
                                backgroundImage: "url(/assets/Images/gallery/image10.jpg)",
                                backgroundSize: "cover",
                                borderRadius: "8px",
                            }}
                        ></div>
                        <div className="mt-2 text-lg font-bold font-serif">
                            Editar Imágenes
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomeAdmin;
