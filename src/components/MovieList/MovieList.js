import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
    const movieCardList = props.movies.map(movie => {
        return (
            <MovieCard title={movie.original_title} releaseDate={movie.release_date.slice(0,4)} posterPath={movie.poster_path} id={movie.id} key={movie.key}/>
        );
    })

    return (
        <div className="movie-list">
            {movieCardList?.length !== 0 ? movieCardList: <h3>No Movies Found</h3>}
        </div>
    );
};

export default MovieList;