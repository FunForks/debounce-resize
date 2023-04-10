/**
 * Circle.jsx
 */



export const Circle = ({
  left,
  top,
  size,
  diameter
}) => {

  const offsetX = `calc((${size} - ${diameter}) / 2`
  const offsetY = `calc((${size} - ${diameter}) / 2`


  return (
    <div
      style={{
        position: "relative",
        pointerEvents: "none",
        width: size,
        height: size,
        backgroundColor: "#fff6",
      }}
    >
      <div
        style = {{
          backgroundColor: "#0906",
          position: "relative",
          width: diameter,
          height: diameter,
          top: offsetY,
          left: offsetX,
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