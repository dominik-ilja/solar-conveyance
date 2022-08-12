import React, { useState, useEffect } from "react"
import getDataForNASAEpicByDate from "../constants/fetcuDataForNASAEpicByDate"

import styled from "styled-components"
// import { Splide, SplideSlide } from "@splidejs/react-splide"
// import "@splidejs/react-splide/css"
import { Link } from "react-router-dom"

export default function NasaEpicPage() {
  const [epicData, setEpicData] = useState([])
  const [date, setDate] = useState("2022-08-01")
  //initliase the data to the spicfic date 2022-08-01

  // async function  {
  //   const data = await getLanchDataById(date)
  //   setLaunchDetails(data)
  // }

  useEffect(() => {
    async function fetchDataForNASA() {
      try {
        const res = await getDataForNASAEpicByDate(date)
        setEpicData(res)
        console.log(epicData)
      } catch (error) {
        console.log(error)
      }
    }
    getDataForNASAEpicByDate(date)
  }, [date])

  const image = [
    "https://epic.gsfc.nasa.gov/archive/natural/2022/08/01/png/epic_1b_20220801020042.png",
    "https://epic.gsfc.nasa.gov/archive/natural/2022/08/01/png/epic_1b_20220801020042.png",
  ]

  return (
    <h1>no splide yet</h1>
    // <Wrapper>
    //   <h3>Nasa Eipic</h3>

    //   <Splide
    //     options={{
    //       perPage: 1,
    //       arrows: true,
    //       pagination: false,
    //       drag: "free",
    //       gap: "1rem",

    //       breakpoints: {
    //         640: {
    //           perPage: 1,
    //         },
    //       },
    //     }}
    //   >
    //     {image.map((pic) => {
    //       return (
    //         <SplideSlide key={pic}>
    //           <Card>
    //             {/* <Gradient> */}
    //             <p>image</p>
    //             <img src={pic} />
    //             {/* </Gradient> */}
    //           </Card>
    //         </SplideSlide>
    //       )
    //     })}
    //   </Splide>
    // </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
  /* background: black; */
`
const Card = styled.div`
  height: 100vh;
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

// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
// `
