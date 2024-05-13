import React from "react";
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

interface NavLinkProps {
    to: string;
    title: string;
    onClose: () => void;
    action?: () => void; 
}

const NavLink: React.FC<NavLinkProps> = ({
    to,
    title,
    onClose,
    action
}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    const handleClick = () => {
        if (action) {
            action(); 
        }
        onClose();
    };

    return (
        <Link
            to={to}
            className={`px-3 py-2 rounded-md text-base font-medium font-sans ${
                match
                    ? "text-hotel-cream font-bold text-lg"
                    : "text-hotel-cream hover:bg-hotel-brown hover:bg-opacity-40 hover:text-hotel-cream"
            }`}
            onClick={handleClick}
            aria-current={match ? "page" : undefined}
        >
            {title}
        </Link>
    );
};

export default NavLink;
