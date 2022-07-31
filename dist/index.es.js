import e, { useState as t, useEffect as r } from "react";
function n() {
  return (
    (n =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    n.apply(this, arguments)
  );
}
function o(e) {
  const t = e.getBoundingClientRect(),
    r = t.left + window.pageXOffset,
    n = t.top + window.pageYOffset,
    o = t.width || el.offsetWidth,
    a = t.height || el.offsetHeight;
  return {
    left: r,
    right: r + o,
    top: n,
    bottom: n + a,
    mid: n + a / 2,
    center: r + o / 2,
    width: o,
    height: a,
  };
}
const a = (a) => {
    [
      a.startingElement.ref,
      a.startingElement.x,
      a.startingElement.y,
      a.endingElement.ref,
      a.endingElement.x,
      a.endingElement.y,
    ].map((e) => {
      if (void 0 === e)
        throw new Error(
          "All required props should be passed to StraightLine component!"
        );
    });
    const {
        startingElement: l,
        endingElement: i,
        color: s = "black",
        thickness: d = 4,
        className: m = "",
        style: g = {},
        ...c
      } = a,
      { ref: f, x: h, y: p } = l,
      { ref: u, x: E, y: $ } = i,
      [b, w] = t(null),
      [y, M] = t(null);
    let k, T, v, O, x, q, N, C;
    return (
      r(() => {
        try {
          w(o(f.current)), M(o(u.current));
        } catch {
          console.error(`${f} is not valid DOM element`);
        }
      }, []),
      null !== b &&
        null !== y &&
        ((k = b[h]),
        (T = b[p]),
        (v = y[E]),
        (O = y[$]),
        (x = Math.sqrt((v - k) * (v - k) + (O - T) * (O - T))),
        (q = (k + v) / 2 - x / 2),
        (N = (T + O) / 2 - d / 2),
        (C = Math.atan2(T - O, k - v) * (180 / Math.PI))),
      e.createElement(
        "div",
        n(
          {
            style: b &&
              y && {
                padding: 0,
                margin: 0,
                height: d,
                backgroundColor: s,
                lineHeight: 1,
                position: "absolute",
                left: q,
                top: N,
                width: x,
                MozTransform: `rotate(${C}deg)`,
                WebkitTransform: `rotate(${C}deg)`,
                OTransform: `rotate(${C}deg)`,
                msTransform: `rotate(${C}deg)`,
                transform: `rotate(${C}deg)`,
                ...g,
              },
            className: `${m}`,
          },
          c
        )
      )
    );
  },
  l = (n) => {
    [
      n.startingElement.ref,
      n.startingElement.x,
      n.startingElement.y,
      n.endingElement.ref,
      n.endingElement.x,
      n.endingElement.y,
    ].map((e) => {
      if (void 0 === e)
        throw new Error(
          "All required props should be passed to LineL component!"
        );
    });
    const {
        startingElement: a,
        endingElement: l,
        color: i = "black",
        thickness: s = 4,
        shape: d = "normal",
        className: m = "",
        style: g = {},
        ...c
      } = n,
      { ref: f, x: h, y: p } = a,
      { ref: u, x: E, y: $ } = l,
      [b, w] = t(null),
      [y, M] = t(null);
    let k, T, v, O, x, q, N, C, H, L, P, W, z, I;
    if (
      (r(() => {
        try {
          w(o(f.current)), M(o(u.current));
        } catch {
          console.error(`${f} is not valid DOM element`);
        }
      }, []),
      null !== b && null !== y)
    ) {
      switch (((k = b[h]), (v = b[p]), (T = y[E]), (O = y[$]), d)) {
        case "normal":
          (x = k), (q = O);
          break;
        case "upsidedownL":
          (x = T), (q = v);
          break;
        default:
          throw new Error("shape is not correct");
      }
      (N = Math.sqrt((x - k) * (x - k) + (q - v) * (q - v))),
        (H = (k + x) / 2 - N / 2),
        (P = (v + q) / 2 - s / 2),
        (z = Math.atan2(v - q, k - x) * (180 / Math.PI)),
        (C = Math.sqrt((T - x) * (T - x) + (O - q) * (O - q))),
        (L = (x + T) / 2 - C / 2),
        (W = (q + O) / 2 - s / 2),
        (I = Math.atan2(q - O, x - T) * (180 / Math.PI));
    }
    return e.createElement(
      "div",
      c,
      e.createElement("div", {
        style: b &&
          y && {
            padding: 0,
            margin: 0,
            height: s,
            backgroundColor: i,
            lineHeight: 1,
            position: "absolute",
            left: H,
            top: P,
            width: N,
            MozTransform: `rotate(${z}deg)`,
            WebkitTransform: `rotate(${z}deg)`,
            OTransform: `rotate(${z}deg)`,
            msTransform: `rotate(${z}deg)`,
            transform: `rotate(${z}deg)`,
            ...g,
          },
        className: `${m}`,
      }),
      e.createElement("div", {
        style: b &&
          y && {
            padding: 0,
            margin: 0,
            height: s,
            backgroundColor: i,
            lineHeight: 1,
            position: "absolute",
            left: L,
            top: W,
            width: C,
            MozTransform: `rotate(${I}deg)`,
            WebkitTransform: `rotate(${I}deg)`,
            OTransform: `rotate(${I}deg)`,
            msTransform: `rotate(${I}deg)`,
            transform: `rotate(${I}deg)`,
            ...g,
          },
        className: `${m}`,
      })
    );
  };
export { l as LineL, a as StraightLine };
