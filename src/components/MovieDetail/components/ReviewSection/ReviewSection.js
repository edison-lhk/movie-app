import React from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./ReviewSection.css";

const ReviewSection = (props) => {
    const {reviews} = props;

    const reviewsList = reviews.filter(review => review.author_details.rating != null);
    const reviewsShortList = reviewsList.length > 3 ? reviewsList.slice(0, 3) : reviewsList;
    const reviewCardList = reviewsShortList.map(review => <ReviewCard name={review.author} pic={review.author_details.avatar_path} date={review.updated_at.slice(0,10)} rating={review.author_details.rating} content={review.content} />);

    return (
        <>
            {reviewsList.length !== 0 ? (
                <div className="review-section">
                    <h3>Reviews</h3>
                    <div className="review-card-list">
                        {reviewCardList}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default ReviewSection;