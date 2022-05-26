import React, { useState } from "react";

const ReadMore = (props) => {
    const {text, changeState, id} = props;
    const [content, setContent] = useState('Read More');
    const [expand, setExpand] = useState(false);

    return (
        <>
            {text.length > 500 ? (
                <>
                    <span className="read-more" id={`id-${id}`} onClick={(e) => {
                        if (!expand) {
                            setContent(text.slice(500, -1));
                            e.target.style = "color: gray; cursor: auto";
                            document.querySelector(`p.show-less#id-${id}`).style = "display: block; cursor: pointer; color: white";
                            setExpand(true);
                            changeState(true);
                        } else return;
                    }} style={{cursor: "pointer", color: "white"}}>{content}</span>
                    <p className="show-less" id={`id-${id}`} onClick={(e) => {
                        if (expand) {
                            setContent('Read More');
                            e.target.style = "display: none;";
                            document.querySelector(`span.read-more#id-${id}`).style = "color: white; cursor: pointer";
                            setExpand(false);
                            changeState(false);
                        } else return;
                    }} style={{display: "none"}}> Show Less</p>
                </>
            ) : null}
        </>
    );
}

export default ReadMore;