import getRockeDataById from "../constants/fetchRocketsInfo"
import React, { useState, useEffect } from "react"
import "../styles/LaunchsInfomationTable.css"
import getLanchPadById from "../constants/fetchLanchPadById"

export default function LaunchsInfomationTable({ launchDetails }) {
  // console.log(launchDetails.links.patch)
  const rocketID = launchDetails.rocket
  console.log("rocketID" + rocketID)

  // const launchpadID = launchDetails.launchpad
  // console.log("LaunchpadID:" + launchpadID)
  // const launchDate = {
  //   year: launchDetails.date_local.split("-")[0],
  //   month: launchDetails.date_local.split("-")[1],
  //   day: launchDetails.date_local.split("-")[2].split("T")[0],
  //   time: launchDetails.date_local.split("-")[2].split("T")[1],
  // }
  const [launchpadID, setLaunchpadID] = useState(launchDetails.launchpad)

  const [launchpadInfo, setLaunchpadInfo] = useState()

  const [rocketInfo, setRocketInfo] = useState()

  useEffect(() => {
    async function fetchDataForRocket() {
      try {
        const resRoket = await getRockeDataById(rocketID)
        setRocketInfo(resRoket)

        console.log(rocketInfo)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForRocket()
  }, [])

  useEffect(() => {
    async function fetchDataForLaunch() {
      try {
        const resLaunchpad = await getLanchPadById(launchpadID)
        setLaunchpadInfo(resLaunchpad)
        console.log(launchpadInfo)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForLaunch()
  }, [launchpadID])

  if (launchpadInfo === undefined || rocketInfo === undefined) {
    console.log(rocketInfo)
    return <h1>loading</h1>
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 divided-rows-for-groups--Table">
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-group-separator ">
          Launch Informations
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Launch details and Rocket details.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Launch Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchDetails.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Flight Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchDetails.flight_number}
            </dd>
          </div>
          {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Launch Time</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchDate.day}/{launchDate.month}/{launchDate.year}
              {launchDate.time}
            </dd>
          </div> */}

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Launch Patch</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <img src="https://imgur.com/BrW201S.png" atl="Launch Patch"></img>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 divided-rows-for-groups--Table ">
            <h3 className="text-group-separator">Rocket Informations</h3>
          </div>
          {/* {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.company}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Country</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.country}
            </dd>
          </div> */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Rocket Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.description}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Diameter</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.diameter.feet} Feet
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Height</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.height.feet} Feet
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Engine Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.engines.type}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Engine Numbers
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.engines.number}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Weight</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.mass.kg} kg
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.company}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Success Rate</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.success_rate_pct} %
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.type}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Wikipedia</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {rocketInfo.wikipedia}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 divided-rows-for-groups--Table ">
            <h3 className="text-group-separator">Launch Location</h3>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchpadInfo.full_name}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Location Details
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchpadInfo.details}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Region</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {launchpadInfo.region}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Coordinates</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Latitude: {launchpadInfo.latitude} Longitude:
              {launchpadInfo.longitude}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
