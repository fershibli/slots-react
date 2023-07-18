import React from "react";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";
import "./LightsBar.css";

const LightsBar = () => {
    return (
        <InfiniteLooper speed={1} direction={"up"}>
            <div className="led-bar">
                <div className="led gold"></div>
                <div className="led red"></div>
                <div className="led green"></div>
                <div className="led blue"></div>
            </div>
        </InfiniteLooper>
    );
};

export default LightsBar;
