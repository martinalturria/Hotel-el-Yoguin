import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ImagePreviewSection from "../../components/SectionImage/ImagePreviewSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialSection";
import WhatsApp from "../../components/WhatsApp/WhatsApp";

const Home: React.FC = () => {
    return (
        <div>
            <WhatsApp />
            <Hero key={location.pathname} />
            <ImagePreviewSection />
            <ServicesSection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default Home;
