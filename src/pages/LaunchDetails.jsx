import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Spinner } from "../components"
import CountDown from "../components/CountDown"
import {
  fetchLaunchDataById,
  fetchLaunchPadDataById,
  fetchRocketDataById,
} from "../constants"

export default function LaunchDetails(props) {
  const [launchDetails, setLaunchDetails] = useState(null)
  const [rocket, setRocket] = useState(null)
  const [launchPad, setLaunchPad] = useState(null)
  const { id } = useParams()
  const [countDownDate, setCountDownDate] = useState(null)

  useEffect(() => {
    async function fetchDetails() {
      const data = await fetchLaunchDataById(id)
      setLaunchDetails(data)
      setCountDownDate(data.date_local)
    }
    fetchDetails()
  }, [id, countDownDate])
  useEffect(() => {
    if (launchDetails) {
      async function fetchRocket() {
        const rocketData = await fetchRocketDataById(launchDetails.rocket);
        const launchpadData = await fetchLaunchPadDataById(launchDetails.launchpad);
        setRocket(rocketData);
        setLaunchPad(launchpadData);
      }
      fetchRocket();
    }
  }, [launchDetails])

  return (
    <Container className="flex flex-col-reverse gap-8 py-8 text-white lg:grid lg:grid-cols-[2fr_3fr]">
      {/* rocket image */}
      <div className="flex flex-col items-center gap-8 justify-centergap-4">
        {rocket ? (
          rocket.flickr_images.map((image, i) => (
            <img
              className="object-cover h-full"
              src={image}
              alt={rocket.name}
              key={rocket.name + i}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
      {/* rocket details */}
      <div className="px-2 md:px-8 ">
        <div className="mb-8"></div>
        <div className="mb-8">
          <CountDown countDownDate={countDownDate} />
          <h1 className="p-4 mb-6 text-4xl text-center bg-blue-600">
            Launch Information
          </h1>

          <dl className="grid grid-cols-1 text-center sm:grid-cols-2 sm:text-left justify-items-center sm:justify-items-stretch gap-y-6">
            <dt className="text-gray-500">Launch Name</dt>
            <dd>{launchDetails ? launchDetails.name : <Spinner />}</dd>
            <dt className="text-gray-500">Flight Number</dt>
            <dd>{launchDetails ? launchDetails.flight_number : <Spinner />}</dd>
            <dt className="text-gray-500">Launch Patch</dt>
            <dd>
              {launchDetails ? (
                <img
                  className="h-20"
                  src={launchDetails.links.patch.small}
                  alt=""
                />
              ) : (
                <Spinner />
              )}
            </dd>
          </dl>
        </div>
        <div className="mb-8">
          <h1 className="p-4 mb-6 text-4xl text-center bg-blue-600">
            Rocket Information
          </h1>
          <dl className="grid grid-cols-1 text-center sm:grid-cols-2 sm:text-left justify-items-center sm:justify-items-stretch gap-y-6">
            <dt className="text-gray-500">Rocket Name</dt>
            <dd>{rocket ? rocket.name : <Spinner />}</dd>
            <dt className="text-gray-500">Description</dt>
            <dd>{rocket ? rocket.description : <Spinner />}</dd>
            <dt className="text-gray-500">Diameter</dt>
            <dd>{rocket ? `${rocket.diameter.feet} ft` : <Spinner />}</dd>
            <dt className="text-gray-500">Height</dt>
            <dd>{rocket ? `${rocket.height.feet} ft` : <Spinner />}</dd>
            <dt className="text-gray-500">Mass</dt>
            <dd>{rocket ? `${rocket.mass.lb} lb` : <Spinner />}</dd>
            <dt className="text-gray-500">Mass</dt>
            <dd>{rocket ? `${rocket.mass.lb} lb` : <Spinner />}</dd>
            <dt className="text-gray-500">Cost to Launch</dt>
            <dd>{rocket ? rocket.cost_per_launch : <Spinner />}</dd>
            <dt className="text-gray-500">Country</dt>
            <dd>{rocket ? rocket.country : <Spinner />}</dd>
            <dt className="text-gray-500">Company</dt>
            <dd>{rocket ? rocket.company : <Spinner />}</dd>
            <dt className="text-gray-500">First Flight</dt>
            <dd>{rocket ? rocket.first_flight : <Spinner />}</dd>
            <dt className="text-gray-500">Wikipedia</dt>
            <dd>
              {rocket ? (
                <a
                  className="text-blue-600 hover:text-blue-400"
                  href={rocket.wikipedia}
                >
                  {rocket.wikipedia}
                </a>
              ) : (
                <Spinner />
              )}
            </dd>
          </dl>
        </div>
        <div className="mb-8">
          <h1 className="p-4 mb-6 text-4xl text-center bg-blue-600">
            Launch Pad Information
          </h1>
          <dl className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 gap-y-6">
            <dt className="text-gray-500">Name</dt>
            <dd>{launchPad ? launchPad.full_name : <Spinner />}</dd>
            <dt className="text-gray-500">About</dt>
            <dd>{launchPad ? launchPad.details : <Spinner />}</dd>
            <dt className="text-gray-500">Region</dt>
            <dd>{launchPad ? launchPad.region : <Spinner />}</dd>
            <dt className="text-gray-500">Status</dt>
            <dd>{launchPad ? launchPad.status : <Spinner />}</dd>
          </dl>
        </div>
      </div>
    </Container>
  )
}
