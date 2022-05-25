import React from "react";
import "./MovieSectionHeader.css";

const MovieSectionHeader = (props) => {
    return (
        <div className="movie-section-header">
            <h3>{props.title}</h3>
        </div>
    );
};

export default MovieSectionHeader;

