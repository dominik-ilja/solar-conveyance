import React, { useState, useEffect } from "react"

import styled from "styled-components"
import ListOfSpaceXLaunches from "../components/ListOfSpaceXLaunches"
import getSpacexData from "../constants/fetchSpacexDataLaunchData"

function UpcomingLaunches() {
  const [spacexData, setSpacexData] = useState([])
  //get the upcoming spacex launch dataa
  useEffect(() => {
    async function fetchData() {
      try {
        const spaceXData = await getSpacexData()
        setSpacexData(spaceXData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // find the upcoming launch the date shoule be later then date_local
  const upcomingLaunches = spacexData.filter(
    (launch) => new Date(launch.date_local) > new Date()
  )
  console.log(upcomingLaunches)
  //cacalate how many upcoming Launches
  const numberOfUpcomingLaunches = upcomingLaunches.length

  return (
    <div className="App">
      <StyledAppContainer>
        <h1>Upcoming SpaceX Launches</h1>
        <p>There are {numberOfUpcomingLaunches} upcoming launches 🚀</p>
        {spacexData.length > 0 && (
          <ListOfSpaceXLaunches upcomingLaunches={upcomingLaunches} />
        )}
      </StyledAppContainer>
    </div>
  )
}

export default UpcomingLaunches

const StyledAppContainer = styled.div`
  color: #000;
  background-color: lightgray;
  padding: 10px;
  width: 100%;
`
