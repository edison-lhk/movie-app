import React from "react";
import Trailer from "./components/Trailer/Trailer";
import CreditList from "./components/CreditList/CreditList";
import "./DetailsSection.css";

const DetailsSection = (props) => {

    const {title, duration, overview, trailer, casts, crews} = props;

    const calculateMovieDuration = (duration) => {
        let hour = (Math.floor(duration / 60)).toString();

        let min = (duration % 60).toString();

        if (min.length === 1) {
            min = `0${min}`;
        }

        return `${hour}H ${min}M`;
    };

    const castList = casts.filter(cast => cast.profile_path != null);
    const crewList = crews.filter(crew => crew.profile_path != null);

    return (
        <div className="details-section">
            {duration !== 0 || overview !== '' || trailer !== '' ? (
                <div className="movie-info">
                    {duration !== 0 || overview !== '' ? (
                        <div className="detailed-info">
                            {duration !== 0 ? (
                                <div className="metadata">
                                    <p className="duration">{calculateMovieDuration(duration)}</p>
                                </div>
                            ) : null}
                            {overview !== '' ? (
                                <div className="overview">
                                    <h3>Overview</h3>
                                    <p>{overview}</p>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    <Trailer title={title} trailer={trailer}/>
                </div>
            ) : null}
            {castList.length !== 0 || crewList.length !== 0 ? (
                <div className="movie-credits">
                    <CreditList title="Cast" creditList={castList} type="cast"/>
                    <CreditList title="Crew" creditList={crewList} type="crew"/>
                </div>
            ) : null}
        </div>
    );
};

export default DetailsSection;