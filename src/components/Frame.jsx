/**
 * Frame.jsx
 *
 * Creates a Frame <div> with an arbitrary position and size,
 * and places a Square at an arbitrary position inside it.
 *
 * The Square is not added until the Frame has been rendered
 * for the first time. This forces the Frame to render a second
 * time.
 */


import { useState, useRef, useEffect } from "react"
import { Square } from "./Square"

let renders = 0

export const Frame = () => {
  const [ square, setSquare ] = useState()
  const frameRef = useRef()

  // <<< HARD-CODED
  const frameSize   = 80 // (vmin)
  const maxDiameter = 500 // px
  const size        = 5
  // HARD-CODED >>>


  const random = unit => {
    return (Math.random() * (frameSize - size)) + unit
  }


  const refreshSquare = () => {
    const frame = frameRef.current
    const left = random("vw")
    const top =  random("vh")

    const square = {
      left,
      top,
      size,
      maxDiameter,
      frame
    }

    setSquare(square)
  }


  useEffect(refreshSquare, [])


  return (
    <div
      style = {{
        backgroundColor: "#222",
        border:    "1px solid white",
        boxSizing: "border-box",
        width:     `${frameSize}vw`,
        height:    `${frameSize}vh`
      }}
      ref={frameRef}
      className="frame"
    >
      {square && <Square
        {...square}
      />}
      <p>
        Frame renders: {++renders}
      </p>
    </div>
  )
}