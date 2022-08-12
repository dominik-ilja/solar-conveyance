import axios from "axios";

const getRockeDataById = async (rocketid) => {
  try {
    const url = `https:api.spacexdata.com/v4/rockets/${rocketid}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getRockeDataById;
