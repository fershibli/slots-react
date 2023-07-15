import React, { useState, useEffect, useRef } from "react";
import { SLOTS_SYMBOLS } from "../../../config";
import "./SlotsDisc.css";
import InfiniteLooper from "../InfinteLooper/InfiniteLooper";

const SlotsDisc = ({
    discNumber,
    timeout,
    setDiscState,
    triggerSpin,
    setStoppedSpin,
}) => {
    const slotDiscRef = useRef([]);
    const [shouldSpin, setShouldSpin] = useState(true);
    const [symbolsOffset, setSymbolsOffset] = useState(0);
    const [slotSpeed, setSlotSpeed] = useState(0);
    const [slotHeight, setSlotHeight] = useState(170);
    const [slotRect, setSlotRect] = useState({});
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
            setSlotSpeed(0.007);
            setTimeout(() => {
                const accelerationInterval = setInterval(() => {
                    setSlotSpeed((slotSpeed) => {
                        if (slotSpeed === 0) {
                            clearInterval(accelerationInterval);
                            return 0;
                        }
                        return slotSpeed * 1.11;
                    });
                }, parseInt(timeout / 100));
                setSymbolsOffset(prevPos);
            }, 500);
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

    useEffect(() => {
        if (slotDiscRef.current) {
            setSlotHeight(slotDiscRef.current.children[0].offsetHeight * 3);
            const currentSlotRect = slotDiscRef.current.getBoundingClientRect();
            setSlotRect({
                top: currentSlotRect.top,
                left: currentSlotRect.left,
                width: currentSlotRect.width,
                height: currentSlotRect.height,
            });
        }
    }, []);

    return (
        <div
            className="wrapper"
            style={{
                height: parseInt(slotHeight) + "px",
                "&:after": {
                    height: parseInt(slotRect.height) + "px",
                    width: parseInt(slotRect.width) + "px",
                    top: parseInt(slotRect.top) + "px",
                    left: parseInt(slotRect.left) + "px",
                },
            }}
        >
            <InfiniteLooper speed={slotSpeed} direction={"up"}>
                <div className="slot-disc" ref={slotDiscRef}>
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
