import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/WEB/Home";
import ImagesGallery from "../pages/WEB/ImagesGalery";
import Contact from "../pages/WEB/Contact";
import Comments from "../pages/WEB/Comments";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/images" element={<ImagesGallery />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
