import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          {setPlayState(true)}
        }}/>
    </div>
    <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
        The University of Mumbai (known earlier as University of Bombay) is one of the oldest and premier Universities in India.
        </p>
        <p>
        It was established in 1857 consequent upon “Wood’s Education Dispatch”, and it is one amongst the first three Universities in India. As a sequel to the change in the name of the city from Bombay to Mumbai,
        </p>
        <p>
        The University was accorded 5 star status in 2001 & ‘A’ grade status in April 2012 by the National Assessment and Accreditation Council (NAAC).
        </p>
    </div>
    </div>
  )
}

export default About