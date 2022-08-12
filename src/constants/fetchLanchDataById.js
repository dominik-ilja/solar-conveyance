import axios from "axios"

const getLanchDataById = async (id) => {
  const url = `https://api.spacexdata.com/v5/launches/${id}`
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getLanchDataById
