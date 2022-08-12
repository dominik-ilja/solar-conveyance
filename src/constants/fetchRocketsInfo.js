import axios from "axios"

const getRockeDataById = async () => {
  const url = `https:api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec` //${rocketid}??
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getRockeDataById
