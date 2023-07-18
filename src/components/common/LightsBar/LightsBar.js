import React from "react";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";
import "./LightsBar.css";

const LightsBar = ({ height, speed }) => {
    return (
        <div className="wrapper" style={{ height }}>
            <InfiniteLooper speed={0.3} direction={"up"}>
                <div className="led-bar">
                    <div className="led gold" />
                    <div className="led red" />
                    <div className="led blue" />
                    <div className="led green" />
                </div>
            </InfiniteLooper>
        </div>
    );
};

export default LightsBar;
