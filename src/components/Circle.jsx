/**
 * Circle.jsx
 */



export const Circle = ({
  // left, top, // not used
  size,        // (vmin)
  maxDiameter, // (px)
  frame,
  square
}) => {
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

  let diameter = Math.min(maxDiameter, frameWidth, frameHeight)
  let flange = (squareWidth - diameter) / 2


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


  size += "vmin"
  offsetX += "px"
  offsetY += "px"
  flange += "px"
  diameter += "px"


  return (
    <div
      style={{
        position: "relative",
        pointerEvents: "none",
        width: size,
        height: size,
        top: offsetY,
        left: offsetX
      }}
    >
      <div
        style = {{
          backgroundColor: "#0906",
          position: "relative",
          width: diameter,
          height: diameter,
          top: flange,
          left: flange,
          borderRadius: diameter,
          pointerEvents: "none"
        }}
      />
      <div
        style = {{
          backgroundColor: "#090",
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: size,
          top: 0,
          left: 0
      }}
      />
    </div>
  )
}