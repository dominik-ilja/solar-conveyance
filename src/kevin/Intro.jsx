import React, { useState, useEffect } from "react";
import './Intro.css'
import './IntroiPhone.css'
import './IntroiPad.css'
import { motion, AnimatePresence } from "framer-motion"

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Intro() {
  const [photoData, setPhotoData] = useState(null)
  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [MarsWeather, setMarsWeather] = useState()
  const [MarsWeather2, setMarsWeather2] = useState()
  const [MarsWeather3, setMarsWeather3] = useState()
  const [MarsWeather4, setMarsWeather4] = useState()
  const [MarsWeather5, setMarsWeather5] = useState()

  useEffect (() =>  {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=MerI1ecsVfE2kAW59vJK5qJZKlZfOxnUW64HiUaQ`);

      const data = await res.json()
      setPhotoData(data)
      // console.log(data)
    }

    fetchWeather();

    async function fetchWeather() {

        // let i = Math.floor(Math.random() * 200)
        // console.log(i)
        
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CqdfRbQygWu1GUmcdQYbnprOgIMWeqmZIXr8pduN`);

        const data = await res.json()
        // let i = Math.floor(Math.random() * 200)
        // console.log(i)
        setMarsWeather(data.photos[Math.floor(Math.random() * 200 + 150)])
        setMarsWeather2(data.photos[Math.floor(Math.random() * 600)])
        setMarsWeather3(data.photos[Math.floor(Math.random() * 200)])
        setMarsWeather4(data.photos[Math.floor(Math.random() * 800)])
        setMarsWeather5(data.photos[Math.floor(Math.random() * 200)])
        // console.log(data.photos[i])
    }

  }, [show]);

  if(!photoData) return <div />
  

    return (
      <div className="page2">
        <div className="introDivider">
          <div className="mars2Divider">
            <AnimatePresence>
            <motion.div className="mars2" onClick={() => { setShow(!show)}}></motion.div>
            {show &&
            <motion.div layout
            key='box'
            animate={{scale: 1, opacity: 1}}
            initial={{scale: 0, opacity: .1}}
            exit={{scale: 0, opacity: .5}}
            >
              <img className = 'marsPhoto' src = {MarsWeather.img_src} />
              <img className = 'marsPhoto2' src = {MarsWeather2.img_src} />
              <img className = 'marsPhoto3' src = {MarsWeather3.img_src} />
              <img className = 'marsPhoto4' src = {MarsWeather4.img_src} />
              <img className = 'marsPhoto5' src = {MarsWeather5.img_src} />
              <div className="frontOfMarsPhoto"></div>
              <div className="frontOfMarsPhoto2"></div>
              <div className="frontOfMarsPhoto3"></div>
              <div className="frontOfMarsPhoto4"></div>
              <div className="frontOfMarsPhoto5"></div>
              <div className="nightLight2"></div>
              <div className="nightLight4"></div>
              </motion.div>
            }
            </AnimatePresence>
          </div>
          <div className="imageOfTheDayBox">
            
          <motion.div layout onClick={() => setIsOpen(!isOpen)} className="card">
            <div className="titleAndPhoto">
          {!isOpen && (
            <motion.div
            className="titlePhotoOfTheDay"
            key='box'
            initial={{y: "50%", opacity: 0, scale: .5}}
            animate={{y: "0", opacity: 1, scale: 1}}
            exit={{y: "50%", opacity: 0, scale: .0}}
            >Imagery of the Day</motion.div>
          )}
            <motion.div >{photoData.media_type === "image" ? (
                  <img className="imageOfTheDay" src={photoData.url} alt={photoData.title}/> ) :
                  <iframe
                  className="imageOfTheDay"
                  title= "space-video"
                  src= {photoData.url}
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen 
                  />
                }
            </motion.div>
            </div>
            {isOpen && (
            <motion.div
            key='box'
            initial={{y: "50%", opacity: 0, scale: .5}}
            animate={{y: "0", opacity: 1, scale: 1}}
            exit={{y: "50%", opacity: 0, scale: .5}}
            >
              <div className="titleAndDescription">
                <p className="title">{photoData.title}</p>
                <p className="description">{photoData.explanation}</p>
              </div>
            </motion.div>
          )}
          </motion.div>
          </div>
        </div>
      </div>
    );
  };
  