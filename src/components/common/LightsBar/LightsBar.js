import React from "react";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";
import "./LightsBar.css";

const LightsBar = () => {
    return (
        <InfiniteLooper speed={0.3} direction={"down"}>
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
