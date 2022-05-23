import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        async function fetchMoviesData() {
            const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Spiderman`;
            const request = await fetch(movieSearchUrl);
            const response  = await request.json();
            const movies = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
            setMovies(movies);
        }
        fetchMoviesData();
    }, []);

    const searchMovie = async (movie) => {
        const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
        const request = await fetch(movieSearchUrl);
        const reponse = await request.json();
        const movies = reponse.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
        setMovies(movies);
        console.log(movies);
    }
    
    
    return (
        <div className="movie-app-container">
            <NavBar />
            <SearchBar searchMovie={searchMovie}/>
            <MovieList movies={movies}/>
        </div>
    );
};

export default App;