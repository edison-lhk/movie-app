import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return(
        <div className="nav-bar">
            <h1>Movie App</h1>
            <ul>
                <li className="nav-btn"><a href="#">Home</a></li>
                <li className="nav-btn"><a href="#">Movies</a></li>
                <li className="nav-btn"><a href="#">TV Shows</a></li>
            </ul>
        </div>
    );
}

export default NavBar;