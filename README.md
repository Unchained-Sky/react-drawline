# react-drawline

You can connect your react components with drawing lines between them

And the best part is, it can be either a diagonal line or in the shape of L!

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Installation

Install react-drawline with npm

```bash
  npm install @unchainedsky/react-drawline
```

or with yarn

```bash
  yarn add @unchainedsky/react-drawline
```

## Usage/Examples

```javascript
import {useRef} from "react"
import { StraightLine, LineL } from "@unchainedsky/react-drawline";
// inside the component...
const box1Ref = useRef(null)
const box2Ref = useRef(null)

// return part...
<StraightLine
  startingElement={{
    ref: box1Ref,
    x: "right",
    y: "mid",
  }}
  endingElement={{
    ref: box2Ref,
    x: "center",
    y: "top",
  }}
  style={{backgroundColor: "red"}}
  className="beautiful-class-name"
/>

<LineL
  startingElement={{
    ref: box1Ref,
    x: "center",
    y: "bottom",
  }}
  endingElement={{
    ref: box2Ref,
    x: "left",
    y: "mid",
  }}
  shape="upsidedownL"
  color="green"
  thickness={5}
/>

// components/elements to be draw line to connect
<div ref={box1Ref}></div>
<div ref={box2Ref}></div>
```

## API Reference

### StraightLine

This React component should take following props:

- startingElement: object (required)
    | Key | Value |
    | ------------- |:-------------:|
    | ref (required) | object |
    | x (required) | "left" or "center" or "right" |
    | y (required) | "top" or "mid" or "bottom" |

- endingElement: object (required)
    | Key | Value |
    | ------------- |:-------------:|
    | ref (required) | object |
    | x (required) | "left" or "center" or "right" |
    | y (required) | "top" or "mid" or "bottom" |

### LineL

This React component should take following props:

- startingElement: object (required)
    | Key | Value |
    | ------------- |:-------------:|
    | ref (required) | object |
    | x (required) | "left" or "center" or "right" |
    | y (required) | "top" or "mid" or "bottom" |

- endingElement: object (required)
    | Key | Value |
    | ------------- |:-------------:|
    | ref (required) | object |
    | x (required) | "left" or "center" or "right" |
    | y (required) | "top" or "mid" or "bottom" |

- shape: string ("upsidedownL", optional, defaults to "normal")

#### Other optional props for StraightLine and LineL

- color: string (color in any format, optional, defaults to black)

- thickness: integer (thickness for the line, optional, defaults to 4)

- style: object (optional)

- className: string (optional)

- Any valid div attributes (optional)

## FAQ

### Can I use it in frameworks such as Next.js?

Yes you can! This package is compatible with server-side rendering react frameworks such as Next.js

## Features

- Customize the color, thickness and many more if you like
- Specify a shape
- Determine specific starting and ending points for elements
- Pass any valid div attribute if necessary

## Screenshots

![Diagonal Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.15.58_sf58v6.png)
![L Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.20.53_olkduh.png)

## Roadmap

- Add animation effects

- Add timeout support for lines to be appear

- Add on scroll event listener support

- Add Intersection Observer

- Adopt the line according the resizing of the browser

## Contributing

Contributions are always welcome!

## Feedback

If you have any feedback, please reach out to us at <burakkgunduz21@gmail.com>

## Authors

- [@burakgunduz](https://www.github.com/burakkgunduzz)

## License

[MIT](https://choosealicense.com/licenses/mit/)
