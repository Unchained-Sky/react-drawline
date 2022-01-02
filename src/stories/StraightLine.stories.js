import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";

import { StraightLine } from "../components/StraightLine";

const stories = storiesOf("StraightLine", module);

stories.add("From Right-mid to Top-center", () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  return (
    <>
      <StraightLine
        startingElement={{ ref: box1Ref, x: "right", y: "mid" }}
        endingElement={{ ref: box2Ref, x: "center", y: "top" }}
      />
      <div
        ref={box1Ref}
        style={{ width: 200, height: 200, border: "2px solid blue" }}
      ></div>
      <div
        ref={box2Ref}
        style={{
          width: 200,
          height: 200,
          border: "2px solid red",
          marginLeft: "auto",
        }}
      ></div>
    </>
  );
});
