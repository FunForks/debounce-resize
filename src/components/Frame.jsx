/**
 * Frame.jsx
 */


import { Square } from "./Square"

let renders = 0

export const Frame = (props) => {
  console.log("Frame renders:", ++renders);

  const diameter = 80
  const size = 5
  
  const random = unit => {
    return (Math.random() * (diameter - size)) + unit
  }


  const randomPosition = {
    left:     random("vw"),
    top:      random("vh"),
    diameter: `${diameter}vmin`,
    size:     `${size}vmin`
  }


  return (
    <div
      style = {{
        backgroundColor: "#222",
        border: "1px solid white",
        width: `${diameter}vw`,
        height: `${diameter}vh`
      }}
    >
      <Square
        {...randomPosition}
      />
      <p>
        {`Frame renders: ${++renders}`}
      </p>
    </div>
  )
}