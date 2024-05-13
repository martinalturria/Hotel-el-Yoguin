import React from "react";
import { MobileMenuProps } from "../../Interfaces/interfaces";
import NavLink from "./NavLink";

const MobileMenu: React.FC<MobileMenuProps & { isAuthenticated: boolean }> = ({
    isOpen,
    onClose,
    isAuthenticated,
    handleLogout,
}) => {
    return (
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
            {isAuthenticated ? (
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                    <NavLink
                        to="/"
                        title="Cerrar Sesión"
                        onClose={onClose}
                        action={handleLogout}
                    />
                </div>
            ) : (
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                    <NavLink to="/" title="Inicio" onClose={onClose} />
                    <NavLink to="/images" title="Imágenes" onClose={onClose} />
                    <NavLink
                        to="/comments"
                        title="Comentarios"
                        onClose={onClose}
                    />
                    <NavLink to="/contact" title="Contacto" onClose={onClose} />
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
