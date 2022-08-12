import axios from "axios"

const getLandPadById = async (id) => {
  const url = `https://api.spacexdata.com/v4/landpads/${id}`
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getLandPadById
