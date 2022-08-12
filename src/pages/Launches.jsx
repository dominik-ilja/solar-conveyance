import React, { useState, useEffect } from "react"
import { Container, LaunchCard } from '../components'
import { fetchSpaceXData } from "../constants"
import '../styles/bg.scss'

export default function UpcomingLaunches() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    //get the upcoming spacex launch dataa
    async function fetchData() {
      try {
        const data = await fetchSpaceXData()
        const futureLaunches = data.filter(launch => new Date(launch.date_local) > new Date())
        setLaunches(futureLaunches)
      } catch (error) {
        console.log(error)
        setLaunches([])
      }
    }
    fetchData()
  }, [])

  function handleClick() {
    window.scrollTo(0,0)
  }

  return (
    <div className="page-bg">
      <Container className="py-8">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <h1 className="text-5xl text-white">Upcoming SpaceX Launches</h1>
          <h2 className="text-3xl text-gray-400">There are {launches.length} upcoming launches 🚀</h2>
        </div>
        {
          launches.length > 0 &&
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {launches.map(launch => <LaunchCard onClick={handleClick} launchData={launch} key={launch.flight_number} />)}
          </div>
        }
      </Container>
    </div>
  )
}
