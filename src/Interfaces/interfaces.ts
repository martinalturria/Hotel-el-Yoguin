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
    description?: string;
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
