import React from "react";
import uniqid from "uniqid";
import CreditCard from "../CreditCard/CreditCard";
import "./CreditList.css";

const CreditList = (props) => {
    const {title, creditList, type} = props;

    const creditCardList = creditList.map(credit => <CreditCard name={credit.name} role={credit.character ? credit.character : credit.job} pic={credit.profile_path} key={uniqid()}/>);

    return (
        <>
            {creditList.length !== 0 ? (
                <div className={`credit-list ${type}`}>
                    <h3>{title}</h3>
                    <div className="credit-card-list">
                        {creditCardList}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default CreditList;