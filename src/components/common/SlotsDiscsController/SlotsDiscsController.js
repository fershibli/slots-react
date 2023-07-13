import React, { useEffect, useState } from "react";
import SlotsDisc from "../SlotsDisc/SlotsDisc";
import "./SlotsDiscsController.css";
import { SLOTS_SYMBOLS } from "../../../config";

const SlotsDiscsController = () => {
    const [slot1, setSlot1] = useState(["◻️", "◻️", "◻️"]);
    const [slot2, setSlot2] = useState(["◻️", "◻️", "◻️"]);
    const [slot3, setSlot3] = useState(["◻️", "◻️", "◻️"]);
    const [stoppedSpin1, setStoppedSpin1] = useState(true);
    const [stoppedSpin2, setStoppedSpin2] = useState(true);
    const [stoppedSpin3, setStoppedSpin3] = useState(true);
    const [message, setMessage] = useState("Good Luck!");
    const [triggerSpin, setTriggerSpin] = useState(false);
    const symbols = SLOTS_SYMBOLS;

    const spinSlots = () => {
        if (triggerSpin) {
            return;
        }
        setStoppedSpin1(false);
        setStoppedSpin2(false);
        setStoppedSpin3(false);
        setTriggerSpin(true);
    };

    useEffect(() => {
        if (slot1[0] === "◻️") {
            return;
        }
        if (stoppedSpin1 && stoppedSpin2 && stoppedSpin3) {
            if (
                slot1.every(
                    (value, index) =>
                        value === slot2[index] &&
                        value === slot3[index] &&
                        symbols.includes(value)
                )
            ) {
                setMessage("Jackpot! You won!");
            } else {
                setMessage("Try again!");
            }
            setTriggerSpin(false);
        }
    }, [
        slot1,
        slot2,
        slot3,
        stoppedSpin1,
        stoppedSpin2,
        stoppedSpin3,
        symbols,
    ]);

    return (
        <div class="panel-wrapper">
            <div className="discs-panel">
                <SlotsDisc
                    discNumber={1}
                    timeout={3000}
                    discState={slot1}
                    setDiscState={setSlot1}
                    triggerSpin={triggerSpin}
                    setStoppedSpin={setStoppedSpin1}
                />
                <SlotsDisc
                    discNumber={2}
                    timeout={5000}
                    discState={slot2}
                    setDiscState={setSlot2}
                    triggerSpin={triggerSpin}
                    setStoppedSpin={setStoppedSpin2}
                />
                <SlotsDisc
                    discNumber={3}
                    timeout={9000}
                    discState={slot3}
                    setDiscState={setSlot3}
                    triggerSpin={triggerSpin}
                    setStoppedSpin={setStoppedSpin3}
                />
            </div>
            <div className="button-message-panel">
                <button onClick={spinSlots}>Spin</button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default SlotsDiscsController;
