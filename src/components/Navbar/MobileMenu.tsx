import React from "react";
import { MobileMenuProps } from "../../Interfaces/interfaces";
import NavLink from "./NavLink";

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                <NavLink to="/" title="Inicio" onClose={onClose} />
                <NavLink to="/images" title="Imagenes" onClose={onClose}/>
                <NavLink to="/comments" title="Comentarios" onClose={onClose}/>
                <NavLink to="/contact" title="Contacto" onClose={onClose}/>
            </div>
        </div>
    );
};

export default MobileMenu;
