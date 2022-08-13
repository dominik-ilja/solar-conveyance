import React, { useState, useEffect } from "react"
import getDataForNASAEpicByDate from "../constants/fetcuDataForNASAEpicByDate"
import "../styles/NasaEpicPage.css"

import { Link } from "react-router-dom"
import PickDate from "../components/PickDate"
import SlideImage from "../components/SlideImage"

export default function NasaEpicPage() {
  const [epicData, setEpicData] = useState([])

  // pick a default date
  let defaultDate = new Date()
  //set dafault Date to last month bacuse api no reponse to recent date such as 2022-08-12
  defaultDate.setDate(1)
  defaultDate.setMonth(defaultDate.getMonth() - 1)

  const [pickDate, setPickDate] = useState(defaultDate)
  //initliase the data to the spicfic date 2022-08-01

  //convert date to string and format yyyy-mm-dd for nasa epic api call
  Date.prototype.yyyymmdd = function () {
    let mm = this.getMonth() + 1 // getMonth() is zero-based
    let dd = this.getDate()

    return [
      this.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join("-")
  }
  Date.prototype.yyyymmdd2 = function () {
    let mm = this.getMonth() + 1 // getMonth() is zero-based
    let dd = this.getDate()

    return [
      this.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join("/")
  }

  const [imageList, setImageList] = useState([])
  // async function  {
  //   const data = await getLanchDataById(date)
  //   setLaunchDetails(data)
  // }
  //fatch data for image once the user enter the date

  // console.log(pickDate.yyyymmdd2())

  //change image splider each time user pick the date
  useEffect(() => {
    async function fetchDataForNASA() {
      try {
        const res = await getDataForNASAEpicByDate(pickDate.yyyymmdd())
        setEpicData(res)

        //get image url data and put into Array
        const imageUrlList = res.map(
          (obj) =>
            `https://epic.gsfc.nasa.gov/archive/natural/${pickDate.yyyymmdd2()}/png/${
              obj.image
            }.png`
        )

        setImageList(imageUrlList)
        console.log(imageList)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataForNASA()
  }, [pickDate])

  // useEffect(() => {
  //   const imageUrlList = (epicData) => {
  //     return epicData.map((obj) => obj.image)
  //   }
  //   imageUrlList()
  //   setImageList(imageUrlList)
  // }, [epicData])
  //click to change slideshow image and infomation and set the big image to the click image
  //default is the first image
  //currentIndex is control current Image Infomation
  const [currentImage, setCurrentImage] = useState(imageList[0])
  const [currentIndex, setcurrentIndex] = useState(0)
  function handleOnClick(imgUrl, index) {
    console.log(imgUrl, index)
    setCurrentImage(imgUrl)
    setcurrentIndex(index)
  }

  //if there is no data or wating for axios reponse then set context to Loading page
  if (epicData.length === 0 || imageList.length === 0) {
    return <h1>Loading data</h1>
  }

  return (
    <>
      <div className="Container--Body">
        <div className="Container--ImageInfomation">
          <h1>Image Information</h1>
          <p>Image Name: {epicData[currentIndex].image}</p>
          <p>Processing Version:{epicData[currentIndex].version}</p>
          <p>Description:{epicData[currentIndex].caption}</p>
          <p>Image Date:{pickDate.yyyymmdd2()}</p>
          <h1>Slideshow </h1>
          <p>
            Showing: {currentIndex + 1} of {imageList.length}
          </p>
          <PickDate pickDate={pickDate} setPickDate={setPickDate} />
        </div>
        <div className="Container--BigImage">
          <img src={currentImage || imageList[0]} alt="nasa epic image" />
        </div>
      </div>
      <div ClassName="Container--slide">
        <SlideImage imageList={imageList} handleOnClick={handleOnClick} />
      </div>
    </>
  )
}
