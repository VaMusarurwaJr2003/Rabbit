import React from "react";

function SpecialsData(props) {
    return (
        <div className="s-card">
            <div className="s-image">
                <img src={props.images} alt="images" />
            </div>
            <h2>{props.heading}</h2>
            <h5>{props.head}</h5>
            <h4>{props.text}</h4>
        </div>
    );
}

export default SpecialsData;