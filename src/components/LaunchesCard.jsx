import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Image } from "semantic-ui-react"
import getRockeDataById from "../constants/fetchRocketsInfo"
import "../style/LaunchesCard.css"
import ImageElement from "./ImageElement"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LaunchCard = ({ launchData }) => {
  const launchDate = {
    year: launchData.date_local.split("-")[0],
    month: launchData.date_local.split("-")[1],
    day: launchData.date_local.split("-")[2].split("T")[0],
    time: launchData.date_local.split("-")[2].split("T")[1],
  }
  // const image = launchData.links.patch.small
  const rocketID = launchData.rocket
  //get rocket image info from api by rocket ID
  const [image, setImage] = useState("")
  useEffect(() => {
    async function fetchDataForRocket() {
      try {
        const getRocketData = await getRockeDataById(rocketID)

        const picture = getRocketData.flickr_images

        setImage(picture)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForRocket()
  }, [])

  return (
    <LaunchCardContainer>
      <div className="Image-ContainerInCards">
        <ImageElement image={image}></ImageElement>
      </div>
      <div>
        <LaunchCardHeader>
          <h1>{launchData.name}</h1>
        </LaunchCardHeader>
        <FontAwesomeIcon icon="fa-regular fa-shuttle-space" />
        <LaunchCardBody>
          <p>
            Flight Number:
            {launchData.flight_number}
          </p>
          <FontAwesomeIcon icon="fa-regular fa-rocket-launch" />
          <p>
            <span>Launch Date: </span>
            {launchDate.day}/{launchDate.month}/{launchDate.year}
          </p>
          <p>Local Time: {launchDate.time} </p>
        </LaunchCardBody>
      </div>
    </LaunchCardContainer>
  )
}
export default LaunchCard

const LaunchCardContainer = styled.div`
  color: #fff;
  text-align: left;
  margin: 0 10px;
  margin-bottom: 20px;
  background-color: #000;
  background: #262626;
  box-shadow: 20px 20px 40px #202020, -20px -20px 40px #2c2c2c;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  min-width: 45%;
  flex: 1;
`

const LaunchCardHeader = styled.div`
  // background-color: #000;

  padding: 1px 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
`

const LaunchCardBody = styled.div`
  padding: 10px;
`
