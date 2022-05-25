import React from "react";
import "./Trailer.css";

const Trailer = (props) => {
    const {title, trailer} = props;

    return (
        <>
            {trailer !== '' ? (
                <div className="movie-trailer">
                    <h3>Watch Trailer</h3>
                    <iframe width="950" height="500" title={`${title} Trailer`} frameBorder="0" allow="fullscreen" src={`https://www.youtube.com/embed/${trailer}`}></iframe>
                </div>
            ) : null}
        </>
    );
};

export default Trailer;
