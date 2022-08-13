import React from "react"
import DatePicker from "react-date-picker"
import "../styles/PickDate.css"

export default function PickDate({ value, setPickDate }) {
  //convert date to string and format yyyy/mm/dd for image call

  return (
    <div className="datePicker--container">
      <DatePicker
        className={`bg-black`}
        onChange={setPickDate} value={value} />
    </div>
  )
}
