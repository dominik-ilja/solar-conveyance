import axios from "axios";

// Represents the navigation links used across the website

const links = [
  { text: "Home", to: "/" },
  { text: "Epic", to: "/epic" },
  { text: "Launches", to: "/launches" },
  // { text: "Weather", to: "/weather" },
];


// Various Fetch Functions

async function fetchLaunchDataById(id) {
  try {
    const url = `https://api.spacexdata.com/v5/launches/${id}`;
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function fetchLaunchPadDataById(id) {
  try {
    const DEFAULT_PAD_ID = "5e9e4502f509092b78566f87";
    id = id || DEFAULT_PAD_ID;

    const url = `https://api.spacexdata.com/v4/launchpads/${id}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function fetchRocketDataById(rocketid) {
  try {
    const url = `https://api.spacexdata.com/v4/rockets/${rocketid}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
async function fetchSpaceXData() {
  try {
    const url = "https://api.spacexdata.com/latest/launches";
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ! The date format must be => "yyyy-mm-dd"
async function fetchNasaEpicDataByDate(date) {
  try {
    const url = `https://epic.gsfc.nasa.gov/api/natural/date/${date}`;
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }

}

export {
  links,
  fetchLaunchDataById,
  fetchLaunchPadDataById,
  fetchRocketDataById,
  fetchSpaceXData,
  fetchNasaEpicDataByDate
};
