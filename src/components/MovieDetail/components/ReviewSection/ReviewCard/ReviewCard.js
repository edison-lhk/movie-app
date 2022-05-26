import React, { useState } from "react";
import ReadMore from "./components/ReadMore";
import "./ReviewCard.css";

const ReviewCard = (props) => {
    const {name, pic, date, rating, content, id} = props;
    const [readMore, setReadMore] = useState(false);

    const changeReadMoreState = (state) => {
        setReadMore(state);
    };

    return (
        <div className={`review-card`} id={`id-${id}`}>
            <div className="review-info">
                <div className="review-photo">
                    <img src={pic !== null ? (pic.includes('https') ? pic.slice(1,-1) : `https://image.tmdb.org/t/p/w200${pic}`) : `https://via.placeholder.com/100x100?text=${name}`} alt={name} />
                </div>
                <div className="review-author">
                    <p className="name">{name}</p>
                    <p className="date">{new Date(date).toLocaleDateString('en-us', {year: "numeric", month: "short", day: "numeric"})}</p>
                </div>
                <div className="review-rating">
                    <p>Rating:</p>
                    <span>{rating}</span>
                </div>
            </div>
            <div className="review-content">
                <p>{content.length > 500 ? (!readMore ? content.slice(0, 500) + '... ' : content.slice(0, 500)) : content}<ReadMore text={content} changeState={changeReadMoreState} id={id}/></p>
            </div>
        </div>
    );
};

export default ReviewCard;