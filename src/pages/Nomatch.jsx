import React from "react"
import { Link } from "react-router-dom"
import "../styles/NoMatch.css"
import Background from '../kevin/Background'

export default function Nomatch() {
  return (
    <div class="stars">
      <div class="central-body">
        <div>
        <Background />
          <img
            class="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
            alt="404"
          />
        </div>
        <div>
          <Link to="/" class="btn-go-home">
            GO BACK HOME
          </Link>
        </div>
      </div>
      <div class="objects">
        <img
          class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
          alt="rocket"
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
            alt="earth"
          />
          <img
            class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
            alt="moon"
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt="astronaut"
          />
        </div>
      </div>
    </div>
  )
}
