import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/Contact/ContactForm";
import GoogleMap from "../../components/Contact/GoogleMap";
import Footer from "../../components/Footer/Footer";
import ContactInfo from "../../components/Contact/ContactInfo";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
    const [animationComponent, setAnimationComponent] = useState("");
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setAnimationComponent("components-fade-in");
        } else {
            setAnimationComponent("components-fade-out");
        }
    }, [inView]);
    return (
        <div>
            <Hero key={location.pathname} />
            <div
                ref={ref}
                className="bg-hotel-gold bg-opacity-40 text-hotel-cream"
            >
                <div className="container mx-auto px-4 py-10">
                    <div
                        className={`flex flex-col md:flex-row gap-10 md:justify-between ${animationComponent}`}
                    >
                        <div className="md:hidden">
                            <ContactInfo />
                        </div>
                        <ContactForm />
                    </div>
                    <div className={`${animationComponent}`}>
                        <GoogleMap />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
