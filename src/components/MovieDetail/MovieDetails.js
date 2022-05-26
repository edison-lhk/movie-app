import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import RecommendationSection from "./components/RecommendationSection/RecommendationSection";

const MovieDetails = () => {
    const [movie, setMovie] = useState({genres:[], release_date: '', videos: {results: [{name: '', key: ''}]}, credits: {cast: [], crew: []}, reviews: {results: []},recommendations: {results: []}});
    const location = useLocation();
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    window.scrollTo(0, 0);

    useEffect(() => {
        async function fetchMovieDetailsData() {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${location.state.id}?api_key=${API_KEY}&append_to_response=videos,credits,reviews,recommendations`;
            const request = await fetch(movieDetailsUrl);
            const response = await request.json();
            if (response.videos.results.length === 0) {
                response.videos.results = [{name: '', key: ''}];
            };
            setMovie(response);
        }
        fetchMovieDetailsData();
    }, [location.state.id]);

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
        <div className="movie-details">
            <div className="container">
                <HeroSection title={movie.original_title} quote={movie.tagline} releaseDate={movie.release_date} genres={movie.genres} rating={movie.vote_average} poster={movie.poster_path} backgroundImage={movie.backdrop_path}/>
                <DetailsSection title={movie.original_title} duration={movie.runtime} overview={movie.overview} trailer={getOfficialTrailerPath(movie)} casts={movie.credits.cast} crews={movie.credits.crew} />
                <ReviewSection reviews={movie.reviews.results} />
                <RecommendationSection recommendations={movie.recommendations.results} />
            </div>
        </div>
    );
};

export default MovieDetails;