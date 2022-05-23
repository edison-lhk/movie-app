import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [movieSearch, setMovieSearch] = useState('');

    return (
        <div className="search-bar">
            <form onSubmit={(e) => {
                e.preventDefault();
                props.searchMovie(movieSearch);
                setMovieSearch('');
            }}>
                <input type="search" name="movie-search" id="movie-search" placeholder="Search for a movie, tv show, person....." value={movieSearch} onChange={(e) => setMovieSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;