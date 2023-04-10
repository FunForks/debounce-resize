/**
 * Square.jsx
 */


import { useState, useRef, useEffect } from "react"
import { Circle } from "./Circle"


export const Square = (props) => {
  const [ open, setOpen ] = useState(true)
  const [ square, setSquare ] = useState()

  const squareRef = useRef()

  const { left, top } = props
  const size = props.size + "vmin"
  // maxDiameter and frame ignored here


  const click = () => {
    setOpen(!open)
  }


  useEffect(() => {
    setSquare(squareRef.current)
  })


  return (
    <div
      className="square"
      style = {{
        backgroundColor: "#900",
        position: "relative",
        width: size,
        height: size,
        left,
        top
      }}
      onClick={click}
      ref={squareRef}
    >
      {square && open && <Circle
        { ...props }
        square={square}
      />}
    </div>
  )
}