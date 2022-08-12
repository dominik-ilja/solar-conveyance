import React from "react"
// import "../styles/ImageElement.css"

export default function ImageElement(props) {
  const randomImage = Math.floor(Math.random() * props.images.length)
  return (
      <img src={props.images[randomImage]} alt='space shuttle' className="h-full"></img>
  )
}
