import React, { useState } from "react";
import SlotDisc from "../SlotDisc/SlotDisc";

const SlotsDiscPanel = ({ triggerSpin }) => {
    const [slot1, setSlot1] = useState(["◻️", "◻️", "◻️"]);
    const [slot2, setSlot2] = useState(["◻️", "◻️", "◻️"]);
    const [slot3, setSlot3] = useState(["◻️", "◻️", "◻️"]);

    return (
        <div className="disc-panel">
            <SlotDisc
                key={1}
                timeout={1000}
                discState={slot1}
                setDiscState={setSlot1}
                triggerSpin={triggerSpin}
            />
            <SlotDisc
                key={2}
                timeout={2000}
                discState={slot2}
                setDiscState={setSlot2}
                triggerSpin={triggerSpin}
            />
            <SlotDisc
                key={3}
                timeout={3000}
                discState={slot3}
                setDiscState={setSlot3}
                triggerSpin={triggerSpin}
            />
        </div>
    );
};

export default SlotsDiscPanel;
