import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
    const {title, releaseDate, posterPath, id} = props;

    return (
        <Link to={`/movie/${id}`} style={{textDecoration:"none", color: "white"}}>
            <div className="movie-card">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w200/${posterPath}`} alt={title}/>
                </div>
                <div className="info">
                    <h3 className="movie-title">{title} {`(${releaseDate})`}</h3>
                </div> 
            </div>
        </Link>
    );
};

export default MovieCard;