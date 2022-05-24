import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return(
        <div className="nav-bar">
            <h1>Movie App</h1>
            <ul>
                <Link to="/" style={{textDecoration: "none", color: "white"}}><li className="nav-btn">Home</li></Link>
                <li className="nav-btn">Movies</li>
                <li className="nav-btn">TV Shows</li>
                <Link to="/search-movies" style={{textDecoration: "none", color: "white"}}><li className="nav-btn">Search</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;