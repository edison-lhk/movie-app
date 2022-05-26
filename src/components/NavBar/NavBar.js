import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {

    const navigate = useNavigate();

    useEffect(() => props.clearSearchMovie(), [navigate]);

    return(
        <div className="nav-bar">
            <h1>Movie App</h1>
            <ul>
                <Link to="/" style={{textDecoration: "none", color: "white"}}><li className="nav-btn">Home</li></Link>
                <Link to="/search-movies" style={{textDecoration: "none", color: "white"}}><li className="nav-btn">Search</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;