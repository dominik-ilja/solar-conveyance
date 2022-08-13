import axios from 'axios';

export default async function fetchLaunchPadById(id) {
  try {
    const DEFAULT_PAD_ID = "5e9e4502f509092b78566f87";
    id = id || DEFAULT_PAD_ID;

    const url = `https://api.spacexdata.com/v4/launchpads/${id}`;
    // https://api.spacexdata.com/v4/launchpads/5e9e4502f509092b78566f87
    const res = await axios.get(url);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
