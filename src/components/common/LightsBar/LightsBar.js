import React from "react";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";
import "./LightsBar.css";

const LightsBar = () => {
    return (
        <InfiniteLooper speed={1} direction={"up"}>
            <div className="led-bar">
                <div className="led gold" />
                <div className="led red" />
                <div className="led green" />
                <div className="led blue" />
            </div>
        </InfiniteLooper>
    );
};

export default LightsBar;
