import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import fetchRockeDataById from "../constants/fetchRocketsInfo"
import ImageElement from "./ImageElement"
import Spinner from "./Spinner"

export default function LaunchCard ({ launchData, ...props }) {
  const [rocket, setRocket] = useState(null)
  const launchDate = {
    year: launchData.date_local.split("-")[0],
    month: launchData.date_local.split("-")[1],
    day: launchData.date_local.split("-")[2].split("T")[0],
    time: launchData.date_local.split("-")[2].split("T")[1],
  }
  const launch = `${launchDate.day}/${launchDate.month}/${launchDate.year}`
  const details = [
    {name: 'Flight Number:', data: launchData.flight_number},
    {name: 'Launch Date:', data: launch},
    {name: 'Local Time:', data: launchDate.time},
  ].map(detail => (
    <>
      <span className="text-left">{ detail.name }</span>
      <span className=" h-[2px] bg-gray-600"></span>
      <span className="text-right">{ detail.data }</span>
    </>
  ))

  useEffect(() => {
    //get rocket image info from api by rocket ID
    async function fetchDataForRocket() {
      try {
        const data = await fetchRockeDataById(launchData.rocket)
        setRocket(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForRocket()
  }, [launchData.rocket])

  return (
    <div className="flex flex-col text-white bg-gray-900">
      
      <div className="flex-1">
        {
          rocket ? 
            <ImageElement images={rocket.flickr_images} /> :
            <Spinner className='mt-4' />
        }
      </div>

      <div className="px-4 py-8">
        <div className="mb-4 text-center">
          <div className="text-2xl">{launchData.name}</div>
          {
            rocket ?
              <div className="text-gray-600">{rocket.name}</div> :
              <Spinner className='mt-4' />
          }
        </div>
        <ul className="grid items-center grid-cols-[auto_1fr_auto] gap-y-1 gap-x-4 text-center">
          {details}
        </ul>
      </div>
  
      {
        rocket ?
          <Link
            to={`/launches/${launchData.id}`}
            onClick={props.onClick}
            className="w-full py-4 text-center text-white transition-colors bg-blue-600 hover:bg-blue-400 focus:bg-blue-400">
            View Details
          </Link> :
          <Spinner />
      }

    </div>
  )
}
