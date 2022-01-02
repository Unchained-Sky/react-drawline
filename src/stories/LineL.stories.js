import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";

import { LineL } from "../components/LineL/LineL";

const stories = storiesOf("LineL", module);

stories.add("From Right-mid to Top-center", () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  return (
    <>
      <LineL
        startingElement={{ ref: box1Ref, x: "right", y: "mid" }}
        endingElement={{ ref: box2Ref, x: "center", y: "top" }}
        shape="upsidedownL"
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
