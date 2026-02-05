import React from "react";

function LandingCard(props) {
    return (
        <div className="landing-card" id={props.id}>
            <div>
                {props.children}
            </div>
        </div >
    );
};

export default LandingCard;