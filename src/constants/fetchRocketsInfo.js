import axios from "axios"

const getRockeDataById = async (rocketid) => {
  const url = `https:api.spacexdata.com/v4/rockets/${rocketid}`
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getRockeDataById
