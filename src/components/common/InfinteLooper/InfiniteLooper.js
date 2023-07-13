import React, { useCallback, useEffect, useRef, useState } from "react";
import "./InfiniteLooper.css";

const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const orientation =
        direction === "up" || direction === "down" ? "vertical" : "horizontal";

    function resetAnimation() {
        if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "false");

            setTimeout(() => {
                if (innerRef?.current) {
                    innerRef.current.setAttribute("data-animate", "true");
                }
            }, 10);
        }
    }

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width, height } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth, height: parentHeight } =
            outerRef.current.getBoundingClientRect();

        if (orientation === "vertical") {
            console.log({ parentHeight, height });
            const heightDeficit = parentHeight - height;

            const instanceHeight = height / innerRef.current.children.length;

            console.log({ heightDeficit }, { instanceHeight });
            if (heightDeficit) {
                setLooperInstances(
                    looperInstances +
                        Math.ceil(heightDeficit / instanceHeight) +
                        1
                );
            }
        } else {
            const widthDeficit = parentWidth - width;

            const instanceWidth = width / innerRef.current.children.length;
            if (widthDeficit) {
                setLooperInstances(
                    looperInstances +
                        Math.ceil(widthDeficit / instanceWidth) +
                        1
                );
            }
        }

        resetAnimation();
    }, [looperInstances, orientation]);

    /*
        6 instances, 200 each = 1200
        parent = 1700
    */

    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
        window.addEventListener("resize", setupInstances);

        return () => {
            window.removeEventListener("resize", setupInstances);
        };
    }, [looperInstances, setupInstances]);

    return (
        <div className="looper" ref={outerRef} orientation={orientation}>
            <div
                className="looper__innerList"
                ref={innerRef}
                data-animate="true"
                orientation={orientation}
            >
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection:
                                direction === "right" || direction === "down"
                                    ? "reverse"
                                    : "normal",
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteLooper;
