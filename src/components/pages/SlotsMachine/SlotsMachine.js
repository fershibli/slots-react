import React, { useEffect, useState } from "react";

const SlotsMachine = () => {
    const [slot1, setSlot1] = useState(["◻️", "◻️", "◻️"]);
    const [slot2, setSlot2] = useState(["◻️", "◻️", "◻️"]);
    const [slot3, setSlot3] = useState(["◻️", "◻️", "◻️"]);
    const [message, setMessage] = useState("");
    const [stoppedSpin, setStoppedSpin] = useState(true);

    const symbols = ["🍒", "🍊", "🍇", "🍋", "🍎", "🔔"];

    const spinSlots = () => {
        if (!stoppedSpin) {
            return;
        }
        setStoppedSpin(false);

        const randomSymbols = () => {
            const randomPos = Math.floor(Math.random() * symbols.length);
            const prevPos =
                randomPos - 1 < 0 ? symbols.length - 1 : randomPos - 1;
            const nextPos =
                randomPos + 1 === symbols.length ? 0 : randomPos + 1;
            return [symbols[prevPos], symbols[randomPos], symbols[nextPos]];
        };

        setSlot1(["⏬", "⏬", "⏬"]);
        setSlot2(["⏬", "⏬", "⏬"]);
        setSlot3(["⏬", "⏬", "⏬"]);
        setMessage("Spinning...");
        setTimeout(() => setSlot1(randomSymbols()), 1000);
        setTimeout(() => setSlot2(randomSymbols()), 2000);
        setTimeout(() => {
            setSlot3(randomSymbols());
            setStoppedSpin(true);
        }, 3000);
    };
    useEffect(() => {
        if (stoppedSpin) {
            if (slot1 === slot2 && slot2 === slot3) {
                setMessage("Jackpot! You won!");
            } else {
                setMessage("Try again!");
            }
        }
    }, [slot1, slot2, slot3, stoppedSpin]);

    return (
        <div>
            <h1>Slot Machine</h1>
            <div className="slots">
                <div className="slot">
                    {slot1[0]} {slot2[0]} {slot3[0]}
                </div>
                <div className="slot">
                    {slot1[1]} {slot2[1]} {slot3[1]}
                </div>
                <div className="slot">
                    {slot1[2]} {slot2[2]} {slot3[2]}
                </div>
            </div>
            <button onClick={spinSlots}>Spin</button>
            <p>{message}</p>
        </div>
    );
};

export default SlotsMachine;
