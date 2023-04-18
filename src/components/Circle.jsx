/**
 * Circle.jsx
 *
 * Shows a circle whose position is adjusted to fit the Frame
 * element passed as a prop. If the dimensions of the Frame
 * allow, it will be centered on the Square element with a
 * diameter of maxDiameter. If not its position and diameter
 * will be adjusted to fit within the Frame.
 *
 * When the viewport is resized, the circle's size and position
 * will be adjusted to fit the new Frame dimensions.
 */

import { useState, useEffect } from 'react'
import { debounce } from '../tools/script'


let renders = 0


export const Circle = ({
  size,        // (vmin) only used for renders feedback
  maxDiameter, // (px)
  frame,       // DOM element
  square       // DOM element
}) => {
// left, top (position of square) not used here, as these data
// are calculated from the bounding client rect instead


  const [ sizes, setSizes ] = useState({
    diameter: 0,
    flange:   0,
    offsetX:  0,
    offsetY:  0
  })


  const resize = () => {
    const {
      top:    frameTop,
      left:   frameLeft,
      right:  frameRight,
      bottom: frameBottom,
      width:  frameWidth,
      height: frameHeight
    } = frame.getBoundingClientRect()
    const {
      top:    squareTop,
      left:   squareLeft,
      right:  squareRight,
      bottom: squareBottom,
      width:  squareWidth
    } = square.getBoundingClientRect()

    const diameter = Math.min(maxDiameter, frameWidth, frameHeight)
    const flange = (squareWidth - diameter) / 2


    let offsetX = frameLeft - (squareLeft + flange)
    if (offsetX < 0) {
      offsetX = Math.min(
        0,
        frameRight - (squareRight - flange)
      )
    }


    let offsetY = frameTop - (squareTop + flange)
    if (offsetY < 0) {
      offsetY = Math.min(
        0,
        frameBottom - (squareBottom - flange)
      )
    }

    setSizes({ diameter, flange, offsetX, offsetY })
  }


  const prepareResize = () => {
    const debounceResize = debounce(resize)
    window.addEventListener("resize", debounceResize)
    resize()

    return () => {
      window.removeEventListener("resize", debounceResize)
    }
  }


  useEffect(prepareResize, [])


  const {  diameter, flange, offsetX, offsetY } = sizes


  return (
    <div
      className="circle-center"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        top: offsetY+"px",
        left: offsetX+"px",
        backgroundColor: "#090",
        borderRadius: "100%",
        pointerEvents: "none"
      }}
    >
      <div
        className="circle"
        style = {{
          backgroundColor: "#0906",
          position: "relative",
          top: flange+"px",
          left: flange+"px",
          width: diameter+"px",
          height: diameter+"px",
          borderRadius: diameter+"px"
        }}
      />

      {/* Feedback */}
      <p
        style = {{
          "--width": "9em",
          position: "absolute",
          width: "var(--width)",
          textAlign: "center",
          top: 0,
          left: `calc(${size / 2}vmin - (var(--width)) / 2)`
        }}
      >Circle renders: {++renders}</p>
    </div>
  )
}