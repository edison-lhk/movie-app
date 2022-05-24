import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieDetails.css";

const MovieDetails = () => {
    const location = useLocation();
    const naviagate = useNavigate();

    window.scrollTo(0, 0);

    const calculateMovieDuration = (duration) => {
        let hour = (Math.floor(duration / 60)).toString();

        let min = (duration % 60).toString();

        if (min.length === 1) {
            min = `0${min}`;
        }

        return `${hour}H ${min}M`;
    };

    const castList = location.state.casts.filter(cast => cast.profile_path != null);
    const crewList = location.state.crews.filter(crew => crew.profile_path != null);
    const recommendationsList = location.state.recommendations.filter(movie => movie.poster_path != null && movie.backdrop_path != null)

    return (
        <div className="movie-details">
            <div className="container">
                <div className="hero-section" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8), rgb(0,0,0)), url("https://image.tmdb.org/t/p/w1280/${location.state.backdropPath}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}}>
                    <span className="material-icons" onClick={() => {naviagate("/");}}>arrow_back</span>
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w400/${location.state.posterPath}`} alt={location.state.title}/>
                    </div>
                    <div className="basic-info">
                        <div className="movie-title">
                            <h1>{location.state.title} ({location.state.releaseDate.slice(0,4)})</h1>
                        </div>
                        <div className="movie-quote">
                            <p>{location.state.quote}</p>
                        </div>
                        <ul className="movie-genres">
                            {location.state.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                    </div>
                    <div className="movie-stats">
                        <p>Rating</p>
                        <p className="rating">{location.state.rating}</p>
                    </div>
                </div>
                <div className="details-section">
                    {location.state.duration !== 0 && location.state.trailer !== '' ? (
                        <div className="movie-info">
                            <div className="detailed-info">
                                {location.state.duration !== 0 ? (
                                    <div className="metadata">
                                        <p className="duration">{calculateMovieDuration(location.state.duration)}</p>
                                    </div>
                                ) : null}
                                {location.state.overview !== '' ? (
                                    <div className="overview">
                                        <h3>Overview</h3>
                                        <p>{location.state.overview}</p>
                                    </div>
                                ) : null}
                            </div>
                            {location.state.trailer !== '' ? (
                                <div className="movie-trailer">
                                    <h3>Watch Trailer</h3>
                                    <iframe width="950" height="500" title={`${location.state.title} Trailer`} frameBorder="0" src={`https://www.youtube.com/embed/${location.state.trailer}`}></iframe>
                                </div>
                            ) : null}
                            </div>
                    ) : null}
                    <div className="movie-credits">
                        {castList.length !== 0 ? (
                            <div className="cast-list">
                                <h3>Cast</h3>
                                <div className="cast-card-list">
                                    {castList.map(cast => {
                                        return (
                                            <div className="cast-card" key={cast.id}>
                                                <div className="container">
                                                    <div className="cast-photo">
                                                        <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name}/>
                                                    </div>
                                                    <div className="cast-info">
                                                        <p className="name">{cast.name}</p>
                                                        <p className="character">{cast.character}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                        {crewList.length !== 0 ? (
                            <div className="crew-list">
                                <h3>Crew</h3>
                                <div className="crew-card-list">
                                    {crewList.map(crew => {
                                        return (
                                            <div className="crew-card" key={crew.id}>
                                                <div className="container">
                                                    <div className="crew-photo">
                                                        <img src={`https://image.tmdb.org/t/p/w200/${crew.profile_path}`} alt={crew.name}/>
                                                    </div>
                                                    <div className="crew-info">
                                                        <p className="name">{crew.name}</p>
                                                        <p className="job">{crew.job}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
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
            </div>
        </div>
    );
};

export default MovieDetails;