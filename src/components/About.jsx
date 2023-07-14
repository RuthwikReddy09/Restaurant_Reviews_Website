import React from 'react'
import poster from "../assets/poster.png"
function About() {
  return (
    <div className='about'>
      <div className="aboutc">
        <img src={poster} alt="Error" class="aboutimage"/>
        <div className="data">
          <p>
            <b>Welcome</b> to our Restaurant Review Website!
            At <span style={{color:'rgb(255, 56, 92)'}}>StarDining</span>, we are passionate about food and dining experiences.
            Our platform is dedicated to helping food enthusiasts like you discover the best restaurants in town and make informed choices about where to dine. <br />
          </p>
          <br />
          <p>
          <b>Our mission</b> is to connect people with exceptional dining experiences. We believe that every meal should be a memorable one, and we're here to guide you towards the best culinary destinations. Our goal is to provide you with honest and reliable restaurant reviews, so you can make informed decisions and enjoy outstanding meals, no matter your preferences or dietary needs.
          </p>
          <br />
          Happy dining,<br />
          The StarDining Team

        </div>
      </div>
    </div>
  )
}

export default About

// {/* <a href="https://storyset.com/worker">Worker illustrations by Storyset</a> */ }