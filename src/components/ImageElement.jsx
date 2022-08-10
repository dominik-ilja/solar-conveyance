import React from "react"
import "../style/ImageElement.css"

export default function ImageElement(props) {
  const randombetwen16 = Math.floor(Math.random() * props.image.length)
  return (
    <div className="imageContainer">
      <img src={props.image[randombetwen16]} className="image--tag"></img>
    </div>
  )
}
