import React from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

export default function SlideImage({ imageList, handleOnClick }) {
  if (imageList === undefined) {
    return <h1>Loading data</h1>
  }
  return (
    <Wrapper>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1rem",

          breakpoints: {
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {imageList.map((pic, index) => {
          return (
            <SplideSlide key={pic} onClick={() => handleOnClick(pic, index)}>
              <Card>
                <Gradient>
                  <p>{index + 1}</p>
                  <img src={pic} />
                </Gradient>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

//srtyle
const Wrapper = styled.div`
  margin: 2rem 0rem;
  background: #edf2f7;
`
const Card = styled.div`
  height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    /* position: absolute; */
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`
