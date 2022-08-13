import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Spinner from "./Spinner";

export default function ImageSlider({ images, handleOnClick }) {
  if (images === undefined) {
    return <Spinner />;
  }
  else {
    const options = {
      arrows: true,
      pagination: false,
      speed: 1000,
      drag: 'free',
      gap: '1rem',
      width: '100%',
      autoWidth: true,
      permove: 5,
      rewind: true,
      rewindSpeed: 1000,
      padding: '2rem'
    }
    return (
      <Splide options={options}>
        {
          images.map((image, index) => {
            return (
              <SplideSlide>
                <img className="rounded-full cursor-pointer max-h-20" onClick={() => handleOnClick(index)} src={image} alt="" />
              </SplideSlide>
            )
          })
        }
      </Splide>
    );
  }
}

