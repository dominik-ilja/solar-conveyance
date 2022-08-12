import React from "react"
// import { PaperClipIcon } from "@heroicons/react/solid"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import LaunchsInfomationTable from "../components/LaunchsInfomationTable"
import getLanchDataById from "../constants/fetchLanchDataById"
import "../styles/LaunchesDetails.css"
//第一步use param 接受id  第二部 fetdata  landpad lauchpad rocket lunchon
//style 照着frame画图
//做一个独立的contdown components
export default function LaunchesDetails() {
  let params = useParams()

  console.log(params.id)
  const id = params.id
  const [launchDetails, setLaunchDetails] = useState({})

  const fetchLaunchDetails = async () => {
    try {
      const data = await getLanchDataById(id)
      setLaunchDetails(data)
      console.log(launchDetails)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLaunchDetails()
  }, [id])

  return (
    <div>
      <div className="containerForBody--LaunchesDetails">
        <div className="containerForRocketImages--LaunchesDetails"></div>

        <div className="containerForLaunchesInfomation--LaunchesDetails">
          <LaunchsInfomationTable launchDetails={launchDetails} />
        </div>
      </div>
    </div>
  )
}
