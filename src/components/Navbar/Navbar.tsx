import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const logo = "/assets/Images/logo.png";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-30 bg-hotel-nav bg-opacity-80 sm:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="block h-20 md:h-28 w-auto md:mt-10"
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden sm:flex sm:space-x-4 mt-10">
                        <div className="flex justify-end space-x-4">
                            <NavLink
                                to="/"
                                title="Inicio"
                                onClose={closeMobileMenu}
                            />
                            <NavLink
                                to="/images"
                                title="Imagenes"
                                onClose={closeMobileMenu}
                            />
                            {/* <NavLink
                                to="/comments"
                                title="Comentarios"
                                onClose={closeMobileMenu}
                            /> */}
                            <NavLink
                                to="/contact"
                                title="Contacto"
                                onClose={closeMobileMenu}
                            />
                        </div>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-hotel-black hover:bg-hotel-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hotel-cream"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                </div>
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                />
            </div>
        </nav>
    );
};

export default Navbar;
