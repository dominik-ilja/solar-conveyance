import axios from "axios";

export default async function fetchLaunchDataById(id) {
  try {
    const url = `https://api.spacexdata.com/v5/launches/${id}`;
    // const url = `https://api.spacexdata.com/v5/launches/`;
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
