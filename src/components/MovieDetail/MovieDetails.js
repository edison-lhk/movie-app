import React from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import RecommendationSection from "./components/RecommendationSection/RecommendationSection";

const MovieDetails = () => {
    const location = useLocation();

    window.scrollTo(0, 0);

    return (
        <div className="movie-details">
            <div className="container">
                <HeroSection title={location.state.title} quote={location.state.quote} releaseDate={location.state.releaseDate} genres={location.state.genres} rating={location.state.rating} poster={location.state.posterPath} backgroundImage={location.state.backdropPath}/>
                <DetailsSection title={location.state.title} duration={location.state.duration} overview={location.state.overview} trailer={location.state.trailer} casts={location.state.casts} crews={location.state.crews} />
                <ReviewSection reviews={location.state.reviews} />
                <RecommendationSection recommendations={location.state.recommendations} />
            </div>
        </div>
    );
};

export default MovieDetails;