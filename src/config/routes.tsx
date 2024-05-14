import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/WEB/Home";
import ImagesGallery from "../pages/WEB/ImagesGallery";
import Contact from "../pages/WEB/Contact";
import Comments from "../pages/WEB/Comments";
import Admin from "../pages/Admin/Admin";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import PrivateRoute from "../components/Admin/PrivateRoutes/PrivateRoutes";
import CommentsPage from "../pages/WEB/Comments";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/images" element={<ImagesGallery />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/admin" element={<Admin />} />

                <Route
                    path="/admin/home"
                    element={
                        <PrivateRoute>
                            <HomeAdmin />
                        </PrivateRoute>
                    }
                />
                 <Route
                    path="/admin/comments"
                    element={
                        <PrivateRoute>
                            <CommentsPage />
                        </PrivateRoute>
                    }
                />
                 <Route
                    path="/admin/images"
                    element={
                        <PrivateRoute>
                            <ImagesGallery />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
