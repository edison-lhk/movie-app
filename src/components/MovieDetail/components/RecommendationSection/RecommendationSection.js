import React from "react";
import uniqid from "uniqid";
import MovieCard from "../../../MovieCard/MovieCard";
import "./RecommendationSection.css";

const RecommendationSection = (props) => {
    const {recommendations} = props;

    const recommendationsList = recommendations.filter(movie => movie.poster_path != null && movie.backdrop_path != null);

    return (
        <>
            {recommendationsList.length !== 0 ? (
                <div className="recommendations-section">
                    <h3>You may also like...</h3>
                    <div className="recommendations-list">
                        {recommendationsList.map(movie => {
                            return (
                                <MovieCard title={movie.original_title} releaseDate={movie.release_date.slice(0,4)} posterPath={movie.poster_path} id={movie.id} key={uniqid()}/> 
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default RecommendationSection;