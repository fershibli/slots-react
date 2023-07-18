import React from "react";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";
import "./LightsBar.css";

const LightsBar = () => {
    return (
        <InfiniteLooper speed={1} direction={"vertical"}>
            <div class="led gold" />
            <div class="led red" />
            <div class="led green" />
            <div class="led blue" />
        </InfiniteLooper>
    );
};

export default LightsBar;
