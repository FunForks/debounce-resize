/**
 * Circle.jsx
 */

import { useState, useEffect } from 'react'
import { debounce } from '../tools/script'

let renders = 0

export const Circle = ({
  size,        // (vmin)
  maxDiameter, // (px)
  frame,
  square
}) => {
// left, top not used here


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
      style={{
        position: "relative",
        pointerEvents: "none",
        width: size+"vmin",
        height: size+"vmin",
        top: offsetY+"px",
        left: offsetX+"px"
      }}
    >
      <div
        style = {{
          backgroundColor: "#0906",
          position: "relative",
          top: flange+"px",
          left: flange+"px",
          width: diameter+"px",
          height: diameter+"px",
          borderRadius: diameter+"px",
          pointerEvents: "none"
        }}
      />
      <div
        style = {{
          backgroundColor: "#090",
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: size+"vmin",
          top: 0,
          left: 0
        }}
      />
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