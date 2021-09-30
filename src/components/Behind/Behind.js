import React from "react";
import Freetime from "./Freetime";
import Roadmap from "./Roadmap";

function Behind() {
    return (
        <div>
        <div className="Section Behind">
            <div className="about-me">
                <h1 className="lastname">Åsheim</h1>
                <h1 className="firstname">Johannes</h1>
                <p className="short-text">Ernergisk, tullete og eventyrlysten gammel sjel som gjør mye rart og spennende.</p>
                <img className="behind-picture" src="/images/dance.png" alt=""/>
            </div>
        </div>
        <Roadmap />
        <Freetime />
        </div>
    );
}

export default Behind;

