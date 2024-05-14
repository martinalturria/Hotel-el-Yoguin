// Admin Interfaces
export interface AdminState {
    isAuthenticated: boolean;
    username: string;
    error: string | null;
}

// Comments Interfaces
export interface Comment {
    id: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
}

export interface CommentsState {
    comments: Comment[];
}

// Imeges Interfaces
export interface Image {
    id: string;
    url: string;
    name: string;
    title: string;
}

export interface ImagesState {
    images: Image[];
}

export interface NewImageData {
    file: File;
}

export interface ImagesState {
    images: Image[];
}

// NavLink interface
export interface NavLinkProps {
    to: string;
    title: string;
}

// MobileMenu interface
export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isAuthenticated: boolean;
    handleLogout: () => void;
}

// Hero Type
export type HeroContent = {
    [key: string]: {
        backgroundImage: string;
        title: string;
        subtitle: string;
    };
};

export interface NewCommentData {
    name: string;
    rating: number;
    comment: string;
}
