import axios from "axios"

const getLanchPadById = async (id) => {
  id = id || "5e9e4502f509092b78566f87"
  const url = `https://api.spacexdata.com/v4/launchpads/${id}`

  // https://api.spacexdata.com/v4/launchpads/5e9e4502f509092b78566f87
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getLanchPadById
