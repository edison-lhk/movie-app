import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
    const movieCardList = props.movies.map(movie => {
        return (
            <MovieCard title={movie.original_title} releaseDate={movie.release_date.slice(0,4)} posterPath={movie.poster_path} />
        );
    })

    return (
        <div className="movie-list">
            {movieCardList}
        </div>
    );
};

export default MovieList;