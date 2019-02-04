import React from "react";
import {NavLink} from  "react-router-dom";

const Navigation = () => {
    return (
        <nav class="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </nav>

    )
};

export default Navigation;