import React, { useState} from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [movieSearch, setMovieSearch] = useState('');

    return (
        <div className="search-bar">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (movieSearch !== '') {
                    props.searchMovie(movieSearch);
                    setMovieSearch('');
                } else {
                    return;
                }
            }}>
                <input type="search" autoComplete="off" name="movie-search" id="movie-search" placeholder="Search for any movies....." value={movieSearch} onChange={(e) => setMovieSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;