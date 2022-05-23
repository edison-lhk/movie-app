import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {

    return (
        <div className="movie-card">
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w200/${props.posterPath}`} alt={props.title}/>
            </div>
            <div className="info">
                <h3 className="movie-title">{props.title} {`(${props.releaseDate})`}</h3>
            </div> 
        </div>
    );
};

export default MovieCard;