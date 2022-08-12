import axios from "axios"

const getSpacexData = async () => {
  const url = "https://api.spacexdata.com/latest/launches"
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getSpacexData
