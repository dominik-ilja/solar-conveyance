import React, { useState, useEffect } from "react"
import { fetchNasaEpicDataByDate } from "../constants"
import { Spinner, PickDate, ImageSlider, Container } from "../components";
import { formatYYYYMMDD } from "../helpers/formatDates";

const defaultDate = new Date();
defaultDate.setDate(1);
defaultDate.setMonth(defaultDate.getMonth() - 1);

export default function NasaEpic() {
  const [index, setIndex] = useState(0)
  const [date, setDate] = useState(defaultDate)
  const [epicData, setEpicData] = useState([])
  const [imageList, setImageList] = useState([])


  useEffect(() => {
    async function fetchDataForNASA() {
      try {
        const res = await fetchNasaEpicDataByDate(formatYYYYMMDD(date))
        const images = res.map(({image}) => {
          const base = 'https://epic.gsfc.nasa.gov/archive/natural/';
          const endpoint =`${formatYYYYMMDD(date, '/')}/png/${image}.png`
          return base + endpoint;
        })
        setEpicData(res)
        setImageList(images)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForNASA(date)
  }, [date])

  function handleImageClick(index) {
    setIndex(index)
  }


  if (epicData.length === 0 || imageList.length === 0) {
    return <Spinner className="mt-8" />
  }
  else {
    return (
      <Container className="mt-16">
        {/*  */}
        <div className="grid items-center md:grid-cols-[2fr_3fr] gap-16 text-white mb-16">
          <div className="">
            <h1 className="px-2 py-4 mb-8 text-3xl text-center bg-blue-600">Image Information</h1>
            <dl className="grid justify-between grid-cols-1 gap-4 px-2">
              <div>
                <dt className="text-gray-400">Image Name</dt>
                <dd>{epicData[index].image}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Processing Version</dt>
                <dd>{epicData[index].version}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Description</dt>
                <dd>{epicData[index].caption}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Showing</dt>
                <dd>{index + 1} of {imageList.length}</dd>
              </div>
            </dl>
            {/* <p>Change Date</p>
            <PickDate value={date} /> */}
          </div>
          <div>
            <img className="rounded-full" src={imageList[index]} alt="nasa epic" />
          </div>
        </div>

        {/*  */}
        <div>
          <ImageSlider images={imageList} handleOnClick={handleImageClick} />
        </div>
      </Container>
    )

  }

}
