import React, { useEffect, useState } from "react";
import SlotsDiscsController from "../../common/SlotsDiscsController/SlotsDiscsController";
import "./SlotsMachine.css";

const SlotsMachine = () => {
    return (
        <div id="slots-machine-container">
            <h1>Slot Machine</h1>
            <SlotsDiscsController />
        </div>
    );
};

export default SlotsMachine;
