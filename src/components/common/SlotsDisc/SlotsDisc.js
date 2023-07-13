import React, { useState, useEffect } from "react";
import { SLOTS_SYMBOLS } from "../../../config";
import "./SlotsDisc.css";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";

const SlotsDisc = ({
    discNumber,
    timeout,
    discState,
    setDiscState,
    triggerSpin,
    setStoppedSpin,
}) => {
    const [shouldSpin, setShouldSpin] = useState(true);
    const [symbolsOffset, setSymbolsOffset] = useState(0);
    const [slotSpeed, setSlotSpeed] = useState(0);
    SlotsDisc.symbols = SLOTS_SYMBOLS;

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
            // sets new offset based on prevPos;
            setSlotSpeed(0.01);
            setTimeout(() => setSymbolsOffset(prevPos), 400);
            // then schedules the calculated state for the said disc
            setTimeout(() => {
                setDiscState([
                    SlotsDisc.symbols[prevPos],
                    SlotsDisc.symbols[randomPos],
                    SlotsDisc.symbols[nextPos],
                ]);
                setSlotSpeed(0);
                setStoppedSpin(true);
            }, timeout);
        } else if (!triggerSpin) {
            setShouldSpin(true);
        }
    }, [shouldSpin, triggerSpin, setDiscState, timeout, setStoppedSpin]);

    return (
        <div className="wrapper">
            <InfiniteLooper speed={slotSpeed} direction={"up"}>
                <div className="slot-disc">
                    {[
                        ...SLOTS_SYMBOLS.slice(
                            symbolsOffset,
                            SLOTS_SYMBOLS.length
                        ),
                        ...SLOTS_SYMBOLS.slice(0, symbolsOffset),
                    ].map((discSymbol, index) => (
                        <div
                            key={`${discNumber}-${index
                                .toString()
                                .padStart(2, "0")}`}
                            className="disc-symbol"
                        >
                            {discSymbol}
                        </div>
                    ))}
                </div>
            </InfiniteLooper>
        </div>
    );
};

export default SlotsDisc;
