import React, { useState, useEffect } from "react";

const SlotsDisc = ({
    discNumber,
    timeout,
    discState,
    setDiscState,
    triggerSpin,
    setStoppedSpin,
}) => {
    const [shouldSpin, setShouldSpin] = useState(true);
    SlotsDisc.symbols = ["🍒", "🍊", "🍇", "🍋", "🍎", "🔔"];

    useEffect(() => {
        if (triggerSpin && shouldSpin) {
            setShouldSpin(false);
            // picks a random position for the middle component
            const randomPos = Math.floor(
                Math.random() * SlotsDisc.symbols.length
            );
            // gets the previous one, looping backwards if needed
            const prevPos =
                randomPos - 1 < 0
                    ? SlotsDisc.symbols.length - 1
                    : randomPos - 1;
            // gets the next one, looping forward if needed
            const nextPos =
                randomPos + 1 === SlotsDisc.symbols.length ? 0 : randomPos + 1;
            // then sets a temporary rolling state for the disc
            setDiscState(["⏬", "⏬", "⏬"]);
            // then schedules the calculated state for the said disc
            setTimeout(() => {
                setDiscState([
                    SlotsDisc.symbols[prevPos],
                    SlotsDisc.symbols[randomPos],
                    SlotsDisc.symbols[nextPos],
                ]);
                setStoppedSpin(true);
            }, timeout);
        } else if (!triggerSpin) {
            setShouldSpin(true);
        }
    }, [shouldSpin, triggerSpin, setDiscState, timeout]);

    return (
        <div className="slot-disc">
            {discState.map((discSymbol, index) => (
                <div
                    key={`${discNumber}-${index.toString().padStart(2, "0")}`}
                    className="disc-symbol"
                >
                    {discSymbol}
                </div>
            ))}
        </div>
    );
};

export default SlotsDisc;
