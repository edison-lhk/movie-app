import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = (props) => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const location = useLocation();
    const movieID = location.state.id;
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&append_to_response=videos`;

    useEffect(() => {
        async function fetchMovieDetailsData() {
            const request = await fetch(movieDetailsUrl);
            const reponse = await request.json();
            console.log(reponse);

        }
        fetchMovieDetailsData();
    }, []);

    return (
        <div className="movie-detail">
            <div className="poster">

            </div>
            <div className="basic-info">

            </div>
            <div className="movie-stats">
                
            </div>
        </div>
    );
};

export default MovieDetails;