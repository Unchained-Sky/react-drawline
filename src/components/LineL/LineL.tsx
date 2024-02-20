import React, { useState, useEffect } from "react";
import getOffset from "../../helpers/getOffset";
import { LineProps } from "../../types/Line";

interface LineLProps extends LineProps {
  shape?: "normal" | "upsidedownL";
}

export const LineL = (props: LineLProps) => {
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
        "All required props should be passed to LineL component!"
      );
    }
  });

  const {
    startingElement,
    endingElement,
    color = "black",
    thickness = 4,
    shape = "normal",
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

  let x1, x2, y1, y2, p1, p2, length, length2, cx, cx2, cy, cy2, angle, angle2;

  if (off1 !== null && off2 !== null) {
    x1 = off1[horizontal1];
    y1 = off1[vertical1];
    x2 = off2[horizontal2];
    y2 = off2[vertical2];

    switch (shape) {
      case "normal":
        p1 = x1;
        p2 = y2;
        break;
      case "upsidedownL":
        p1 = x2;
        p2 = y1;
        break;
      default:
        throw new Error("shape is not correct");
    }

    // line settings for the first div
    length = Math.sqrt((p1 - x1) * (p1 - x1) + (p2 - y1) * (p2 - y1));
    cx = (x1 + p1) / 2 - length / 2;
    cy = (y1 + p2) / 2 - thickness / 2;
    angle = Math.atan2(y1 - p2, x1 - p1) * (180 / Math.PI);

    //line settings for the second div
    length2 = Math.sqrt((x2 - p1) * (x2 - p1) + (y2 - p2) * (y2 - p2));
    cx2 = (p1 + x2) / 2 - length2 / 2;
    cy2 = (p2 + y2) / 2 - thickness / 2;
    angle2 = Math.atan2(p2 - y2, p1 - x2) * (180 / Math.PI);
  }

  return (
    <div {...rest}>
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
      ></div>
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
            left: cx2,
            top: cy2,
            width: length2,
            MozTransform: `rotate(${angle2}deg)`,
            WebkitTransform: `rotate(${angle2}deg)`,
            OTransform: `rotate(${angle2}deg)`,
            msTransform: `rotate(${angle2}deg)`,
            transform: `rotate(${angle2}deg)`,
            ...style,
          }
        }
        className={`${className}`}
      ></div>
    </div>
  );
};
