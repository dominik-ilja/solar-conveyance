import axios from "axios"

const getDataForNASAEpicByDate = async (date) => {
  const url = `https://epic.gsfc.nasa.gov/api/natural/date/${date}` //${}

  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export default getDataForNASAEpicByDate
