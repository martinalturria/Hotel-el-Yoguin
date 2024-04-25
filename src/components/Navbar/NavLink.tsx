import React from "react";
import {
    Link,
    NavLinkProps,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const NavLink: React.FC<NavLinkProps & { onClose: () => void }> = ({
    to,
    title,
    onClose,
}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            to={to}
            className={`px-3 py-2 rounded-md text-base font-medium font-sans ${
                match
                    ? "text-hotel-cream font-bold text-lg"
                    : "text-hotel-cream hover:bg-hotel-brown hover:bg-opacity-40 hover:text-hotel-cream"
            }`}
            onClick={onClose}
            aria-current={match ? "page" : undefined}
        >
            {title}
        </Link>
    );
};

export default NavLink;
