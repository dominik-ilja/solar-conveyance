import { useState, useEffect } from "react"
import Clock from "./Clock"
import "./Countdown.scss"

function CountDown({ countDownDate }) {
  const [setDays, setDaysState] = useState()
  const [setHours, setHoursState] = useState()
  const [setMinutes, setMinutesState] = useState()
  const [setSeconds, setSecondsState] = useState()

  // now we need to load the timer when the page loads
  useEffect(() => {
    // returns the interval id
    const startTimer = () => {
      const countDown = new Date(countDownDate)

      const interval = setInterval(() => {
        const nowDate = new Date().getTime()
        const difference = countDown - nowDate

        // Now we need to get the days, hours, minutes and seconds, by dividing the difference by 1000, 60, 60 and 24 respectively.
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))

        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        // Now we need a condition to check how long the inteval should run
        // we clear the interval if the difference is less than 0
        if (difference < 0) {
          clearInterval(interval)
        } else {
          // update the timer constantly
          setDaysState(days)
          setHoursState(hours)
          setMinutesState(minutes)
          setSecondsState(seconds)
        }
      })

      return interval
    }
    
    startTimer();
  }, [countDownDate])
  
  return (
    <div className="Container--CountDown">
      <Clock
        setDays={setDays}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  )
}

export default CountDown
