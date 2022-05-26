import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = (props) => {
    const {title, quote, releaseDate, genres, rating, poster, backgroundImage} = props;
    const navigate = useNavigate();

    return (
        <div className="hero-section" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8), rgb(0,0,0)), url("https://image.tmdb.org/t/p/w1280/${backgroundImage}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}}>
            <span className="material-icons" onClick={() => {navigate('/');}}>arrow_back</span>
            <div className="poster">
                {poster !== undefined ? <img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt={title}/> : null}
            </div>
            <div className="basic-info">
                <div className="movie-title">
                    {title !== undefined && releaseDate !== undefined ?  <h1>{title} ({releaseDate})</h1> : null}
                </div>
                <div className="movie-quote">
                    <p>{quote}</p>
                </div>
                <ul className="movie-genres">
                    {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                </ul>
            </div>
            <div className="movie-stats">
                <p>Rating</p>
                <p className="rating">{rating}</p>
            </div>
        </div>
    );
};

export default HeroSection;