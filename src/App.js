import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import uniqid from "uniqid";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetail/MovieDetails";

const App = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [defaultMoviesList, setdefaultMoviesList] = useState([]);
    const [searchMoviesList, setSearchMoviesList] = useState([]);
 
    useEffect(() => {
        async function fetchMoviesData() {
            const movieSearchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            const request = await fetch(movieSearchUrl);
            const response  = await request.json();
            const moviesList = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
            setdefaultMoviesList (() => {
                for (let i = 0; i < moviesList.length; i++) {
                    moviesList[i].key = uniqid();
                }
                return moviesList;
            });
        }
        fetchMoviesData();
    }, []);

    const searchMovie = async (movie) => {
        const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
        const request = await fetch(movieSearchUrl);
        const reponse = await request.json();
        const moviesList = reponse.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
        setSearchMoviesList (() => {
            for (let i = 0; i < moviesList.length; i++) {
                moviesList[i].key = uniqid();
            }
            return moviesList;
        });
    }
    
    
    return (
        <div className="movie-app-container">
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<><NavBar /><MovieList movies={defaultMoviesList} /></>} />
                    <Route path="/search-movies" element={<><NavBar /><SearchBar searchMovie={searchMovie} /><MovieList movies={searchMoviesList} /></>} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;