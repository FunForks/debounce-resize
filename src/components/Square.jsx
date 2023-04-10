/**
 * Square.jsx
 */


import { useState } from "react"
import { Circle } from "./Circle"


export const Square = (props) => {
  const [ open, setOpen ] = useState(true)
  const size = "5vmin"

  const { left, top } = props
  

  const click = () => {
    setOpen(!open)
  }


  return (
    <div
      style = {{
        backgroundColor: "#900",
        position: "relative",
        width: size,
        height: size,
        left,
        top
      }}
      onClick={click}
    >
      {open && <Circle
        { ...props }
      />}
    </div>
  )
}