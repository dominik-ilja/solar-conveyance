import axios from "axios";

const getSpacexData = async () => {
  try {
    const url = "https://api.spacexdata.com/latest/launches";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSpacexData;
