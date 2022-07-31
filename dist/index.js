"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = t(e);
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
function a(e) {
  const t = e.getBoundingClientRect(),
    r = t.left + window.pageXOffset,
    n = t.top + window.pageYOffset,
    a = t.width || el.offsetWidth,
    o = t.height || el.offsetHeight;
  return {
    left: r,
    right: r + a,
    top: n,
    bottom: n + o,
    mid: n + o / 2,
    center: r + a / 2,
    width: a,
    height: o,
  };
}
(exports.LineL = (t) => {
  [
    t.startingElement.ref,
    t.startingElement.x,
    t.startingElement.y,
    t.endingElement.ref,
    t.endingElement.x,
    t.endingElement.y,
  ].map((e) => {
    if (void 0 === e)
      throw new Error(
        "All required props should be passed to LineL component!"
      );
  });
  const {
      startingElement: n,
      endingElement: o,
      color: l = "black",
      thickness: s = 4,
      shape: i = "normal",
      className: d = "",
      style: f = {},
      ...g
    } = t,
    { ref: m, x: c, y: u } = n,
    { ref: h, x: p, y: E } = o,
    [b, y] = e.useState(null),
    [$, w] = e.useState(null);
  let M, v, k, T, x, O, L, q, S, N, P, j, C, H;
  if (
    (e.useEffect(() => {
      try {
        y(a(m.current)), w(a(h.current));
      } catch {
        console.error(`${m} is not valid DOM element`);
      }
    }, []),
    null !== b && null !== $)
  ) {
    switch (((M = b[c]), (k = b[u]), (v = $[p]), (T = $[E]), i)) {
      case "normal":
        (x = M), (O = T);
        break;
      case "upsidedownL":
        (x = v), (O = k);
        break;
      default:
        throw new Error("shape is not correct");
    }
    (L = Math.sqrt((x - M) * (x - M) + (O - k) * (O - k))),
      (S = (M + x) / 2 - L / 2),
      (P = (k + O) / 2 - s / 2),
      (C = Math.atan2(k - O, M - x) * (180 / Math.PI)),
      (q = Math.sqrt((v - x) * (v - x) + (T - O) * (T - O))),
      (N = (x + v) / 2 - q / 2),
      (j = (O + T) / 2 - s / 2),
      (H = Math.atan2(O - T, x - v) * (180 / Math.PI));
  }
  return r.default.createElement(
    "div",
    g,
    r.default.createElement("div", {
      style: b &&
        $ && {
          padding: 0,
          margin: 0,
          height: s,
          backgroundColor: l,
          lineHeight: 1,
          position: "absolute",
          left: S,
          top: P,
          width: L,
          MozTransform: `rotate(${C}deg)`,
          WebkitTransform: `rotate(${C}deg)`,
          OTransform: `rotate(${C}deg)`,
          msTransform: `rotate(${C}deg)`,
          transform: `rotate(${C}deg)`,
          ...f,
        },
      className: `${d}`,
    }),
    r.default.createElement("div", {
      style: b &&
        $ && {
          padding: 0,
          margin: 0,
          height: s,
          backgroundColor: l,
          lineHeight: 1,
          position: "absolute",
          left: N,
          top: j,
          width: q,
          MozTransform: `rotate(${H}deg)`,
          WebkitTransform: `rotate(${H}deg)`,
          OTransform: `rotate(${H}deg)`,
          msTransform: `rotate(${H}deg)`,
          transform: `rotate(${H}deg)`,
          ...f,
        },
      className: `${d}`,
    })
  );
}),
  (exports.StraightLine = (t) => {
    [
      t.startingElement.ref,
      t.startingElement.x,
      t.startingElement.y,
      t.endingElement.ref,
      t.endingElement.x,
      t.endingElement.y,
    ].map((e) => {
      if (void 0 === e)
        throw new Error(
          "All required props should be passed to StraightLine component!"
        );
    });
    const {
        startingElement: o,
        endingElement: l,
        color: s = "black",
        thickness: i = 4,
        className: d = "",
        style: f = {},
        ...g
      } = t,
      { ref: m, x: c, y: u } = o,
      { ref: h, x: p, y: E } = l,
      [b, y] = e.useState(null),
      [$, w] = e.useState(null);
    let M, v, k, T, x, O, L, q;
    return (
      e.useEffect(() => {
        try {
          y(a(m.current)), w(a(h.current));
        } catch {
          console.error(`${m} is not valid DOM element`);
        }
      }, []),
      null !== b &&
        null !== $ &&
        ((M = b[c]),
        (v = b[u]),
        (k = $[p]),
        (T = $[E]),
        (x = Math.sqrt((k - M) * (k - M) + (T - v) * (T - v))),
        (O = (M + k) / 2 - x / 2),
        (L = (v + T) / 2 - i / 2),
        (q = Math.atan2(v - T, M - k) * (180 / Math.PI))),
      r.default.createElement(
        "div",
        n(
          {
            style: b &&
              $ && {
                padding: 0,
                margin: 0,
                height: i,
                backgroundColor: s,
                lineHeight: 1,
                position: "absolute",
                left: O,
                top: L,
                width: x,
                MozTransform: `rotate(${q}deg)`,
                WebkitTransform: `rotate(${q}deg)`,
                OTransform: `rotate(${q}deg)`,
                msTransform: `rotate(${q}deg)`,
                transform: `rotate(${q}deg)`,
                ...f,
              },
            className: `${d}`,
          },
          g
        )
      )
    );
  });
