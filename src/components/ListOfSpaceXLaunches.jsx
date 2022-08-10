import React, { useState, useEffect } from "react"
import "../style/ListOfSpaceXLaunches.css"
import styled from "styled-components"
import LaunchCard from "./LaunchesCard"

const ListOfSpaceXLaunches = ({ upcomingLaunches }) => {
  return (
    <div className="ListOfSpaceXLaunches--row">
      {upcomingLaunches.length > 0 &&
        upcomingLaunches.map((data) => (
          <LaunchCard launchData={data} key={data.flight_number} />
        ))}
    </div>
  )
}

export default ListOfSpaceXLaunches
