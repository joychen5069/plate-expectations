import React from "react";

function LandingCard(props) {
    return (
        <div className="landing-card" id={props.id}>
            <div className="col-12">
                {props.children}
            </div>
        </div>
    );
};

export default LandingCard;