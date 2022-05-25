import React from "react";
import "./CreditCard.css";

const CreditCard = (props) => {
    const {name, role, pic} = props;

    return (
        <div className="credit-card">
            <div className="container">
                    <div className="credit-photo">
                        <img src={`https://image.tmdb.org/t/p/w200/${pic}`} alt={name}/>
                    </div>
                    <div className="credit-info">
                        <p className="name">{name}</p>
                        <p className="role">{role}</p>
                    </div>
            </div>
        </div>
    );
};

export default CreditCard;