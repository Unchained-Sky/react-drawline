import React, { useState, useEffect } from "react";
import getOffset from "../../helpers/getOffset";
import { LineProps } from "../../types/Line";

export const StraightLine = (props: LineProps) => {
  [
    props.startingElement.ref,
    props.startingElement.x,
    props.startingElement.y,
    props.endingElement.ref,
    props.endingElement.x,
    props.endingElement.y,
  ].map((prop) => {
    if (prop === undefined) {
      throw new Error(
        "All required props should be passed to StraightLine component!"
      );
    }
  });

  const {
    startingElement,
    endingElement,
    color = "black",
    thickness = 4,
    className = "",
    style = {},
    ...rest
  } = props;

  const {
    ref: startingElementRef,
    x: horizontal1,
    y: vertical1,
  } = startingElement;
  const { ref: endingElementRef, x: horizontal2, y: vertical2 } = endingElement;

  const [off1, setOff1] = useState(null);
  const [off2, setOff2] = useState(null);

  // Instead of an effect we use a layout effect and an on window resize event
  React.useLayoutEffect(() => {
    function updatePosition() {
      try {
        setOff1(getOffset(startingElementRef.current));
        setOff2(getOffset(endingElementRef.current));
      } catch {
        console.error(`${startingElementRef} is not valid DOM element`);
      }
    }
    window.addEventListener("resize", updatePosition);
    updatePosition();
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  let x1, y1, x2, y2, length, cx, cy, angle;

  if (off1 !== null && off2 !== null) {
    // determine each elements' point
    x1 = off1[horizontal1];
    y1 = off1[vertical1];
    x2 = off2[horizontal2];
    y2 = off2[vertical2];
    // distance
    length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    // center
    cx = (x1 + x2) / 2 - length / 2;
    cy = (y1 + y2) / 2 - thickness / 2;
    // angle
    angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
  }

  return (
    <div
      style={
        off1 &&
        off2 && {
          padding: 0,
          margin: 0,
          height: thickness,
          backgroundColor: color,
          lineHeight: 1,
          position: "absolute",
          left: cx,
          top: cy,
          width: length,
          MozTransform: `rotate(${angle}deg)`,
          WebkitTransform: `rotate(${angle}deg)`,
          OTransform: `rotate(${angle}deg)`,
          msTransform: `rotate(${angle}deg)`,
          transform: `rotate(${angle}deg)`,
          ...style,
        }
      }
      className={`${className}`}
      {...rest}
    ></div>
  );
};
