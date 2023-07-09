import React, { useState, useEffect } from "react";

const SlotDisc = ({ key, timeout, discState, setDiscState, triggerSpin }) => {
    const [shouldSpin, setShouldSpin] = useState(true);
    SlotDisc.symbols = ["🍒", "🍊", "🍇", "🍋", "🍎", "🔔"];

    useEffect(() => {
        if (triggerSpin && shouldSpin) {
            setShouldSpin(false);
            // picks a random position for the middle component
            const randomPos = Math.floor(
                Math.random() * SlotDisc.symbols.length
            );
            // gets the previous one, looping backwards if needed
            const prevPos =
                randomPos - 1 < 0 ? SlotDisc.symbols.length - 1 : randomPos - 1;
            // gets the next one, looping forward if needed
            const nextPos =
                randomPos + 1 === SlotDisc.symbols.length ? 0 : randomPos + 1;
            // then sets a temporary rolling state for the disc
            setDiscState(["⏬", "⏬", "⏬"]);
            // then schedules the calculated state for the said disc
            setTimeout(
                () =>
                    setDiscState([
                        SlotDisc.symbols[prevPos],
                        SlotDisc.symbols[randomPos],
                        SlotDisc.symbols[nextPos],
                    ]),
                timeout
            );
        } else {
            setShouldSpin(true);
        }
    }, [shouldSpin, triggerSpin, setDiscState, timeout]);

    return (
        <div key={key} className="slot-disc">
            {discState.map((discSymbol, index) => (
                <div
                    key={`${key}-${index.padStart(2, "0")}`}
                    className="disc-symbol"
                >
                    {discSymbol}
                </div>
            ))}
        </div>
    );
};

export default SlotDisc;
