import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
    const [movie, setMovie] = useState({genres:[], release_date: '', videos: {results: [{name: '', key: ''}]}, credits: {cast: [], crew: []}, reviews: {results: []},recommendations: {results: []}});
    const {title, releaseDate, posterPath, id} = props;
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    useEffect(() => {
        async function fetchMovieDetailsData() {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,reviews,recommendations`;
            const request = await fetch(movieDetailsUrl);
            const response = await request.json();
            if (response.videos.results.length === 0) {
                response.videos.results = [{name: '', key: ''}];
            };
            setMovie(response);
            console.log(response);
        }
        fetchMovieDetailsData();
    }, []);

    const getOfficialTrailerPath = movie => {
        let trailerPath = '';

        if (movie.videos.results.length > 0) {
            for (let i = 0; i < movie.videos.results.length; i++) {
                if (movie.videos.results[i].name.includes("Official Trailer")) {
                    trailerPath = movie.videos.results[i].key;
                }
            }

            if (trailerPath === '') {
                for (let i = 0; i < movie.videos.results.length; i++) {
                    if (movie.videos.results[i].name.includes("Trailer") && !(/\d/.test(movie.videos.results[i].name))) {
                        trailerPath = movie.videos.results[i].key;
                    }
                }

                if (trailerPath === '') {
                    for (let i = 0; i < movie.videos.results.length; i++) {
                        if (movie.videos.results[i].name.includes("Trailer") && trailerPath === '') {
                            trailerPath = movie.videos.results[i].key;
                        }
                    }

                    if (trailerPath === '') {
                        trailerPath = movie.videos.results[0].key;
                    }
                }
            }
        }

        return trailerPath;
    }

    return (
        <Link to={`/movie/${id}`} state={{title: movie.original_title, releaseDate: movie.release_date, quote: movie.tagline, overview: movie.overview, duration: movie.runtime, genres: movie.genres, rating: movie.vote_average, posterPath: movie.poster_path, backdropPath: movie.backdrop_path, trailer: getOfficialTrailerPath(movie), casts: movie.credits.cast, crews: movie.credits.crew, reviews: movie.reviews.results, recommendations: movie.recommendations.results}} style={{textDecoration:"none", color: "white"}}>
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