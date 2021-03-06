import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import uniqid from "uniqid";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieSectionHeader from "./components/MovieSectionHeader/MovieSectionHeader";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetail/MovieDetails";

const App = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [upComingMoviesList, setupComingMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [searchMoviesList, setSearchMoviesList] = useState([]);
 
    useEffect(() => {
        async function fetchPopularMoviesData() {
            const movieSearchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            const request = await fetch(movieSearchUrl);
            const response  = await request.json();
            const moviesList = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
            setPopularMoviesList (() => {
                for (let i = 0; i < moviesList.length; i++) {
                    moviesList[i].key = uniqid();
                }
                return moviesList;
            });
        }

        async function fetchupComingMoviesData() {
            const movieSearchUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
            const request = await fetch(movieSearchUrl);
            const response  = await request.json();
            const moviesList = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
            setupComingMoviesList (() => {
                for (let i = 0; i < moviesList.length; i++) {
                    moviesList[i].key = uniqid();
                }
                return moviesList;
            });
        }

        async function fetchTopRatedMoviesData() {
            const movieSearchUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
            const request = await fetch(movieSearchUrl);
            const response  = await request.json();
            const moviesList = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
            setTopRatedMoviesList (() => {
                for (let i = 0; i < moviesList.length; i++) {
                    moviesList[i].key = uniqid();
                }
                return moviesList;
            });
        }

        fetchPopularMoviesData();
        fetchupComingMoviesData();
        fetchTopRatedMoviesData();
    }, []);

    const searchMovie = async (movie) => {
        const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
        const request = await fetch(movieSearchUrl);
        const response = await request.json();
        const moviesList = response.results.filter(movie => movie.poster_path != null && movie.backdrop_path != null);
        setSearchMoviesList (() => {
            for (let i = 0; i < moviesList.length; i++) {
                moviesList[i].key = uniqid();
            }
            return moviesList;
        });
    }

    const clearSearchMovie = () => {
        setSearchMoviesList([]);
    };
    
    
    return (
        <div className="movie-app-container">
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={
                            <>
                                <NavBar clearSearchMovie={clearSearchMovie}/>
                                {popularMoviesList.length !== 0 ? (
                                    <>
                                        <MovieSectionHeader title="Popular" />
                                        <MovieList movies={popularMoviesList} />
                                    </>
                                ) : null}
                                {upComingMoviesList.length !== 0 ? (
                                    <>
                                        <MovieSectionHeader title="Upcoming" />
                                        <MovieList movies={upComingMoviesList} />
                                    </>
                                ) : null}
                                {topRatedMoviesList.length !== 0 ? (
                                    <>
                                        <MovieSectionHeader title="Top-Rated" />
                                        <MovieList movies={topRatedMoviesList} />
                                    </>
                                ) : null}
                            </>
                        } />
                    <Route path="/search-movies" element={
                        <>
                            <NavBar clearSearchMovie={clearSearchMovie}/>
                            <SearchBar searchMovie={searchMovie}/>
                            <MovieList movies={searchMoviesList} />
                        </>
                    } />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;