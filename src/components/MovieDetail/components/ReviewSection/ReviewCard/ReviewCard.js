import React from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
    const {name, pic, date, rating, content} = props;

    return (
        <div className="review-card">
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
                <p>{content.length > 500 ? content.slice(0, 500) + '... Read More' : content}</p>
            </div>
        </div>
    );
};

export default ReviewCard;