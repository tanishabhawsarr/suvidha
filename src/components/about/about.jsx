import React from 'react'
import './about.css'
import about_img from '../../assets/Suvidhaabout.jpg'
import play_icon from '../../assets/play-icon.png'

const about = () => {
  return (
    <div className='about'>
    <div className="about-left">
    <img src={about_img} alt='' className='about-img' />
    <img src={play_icon} alt='' className='play-icon' ></img>
    </div>
    <div className='about-right'>
        <h3>Learn About Us</h3>
        <h2>Suvidha Foundation (Suvidha Mahila Mandal)</h2>
        <p>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
        <p>
        To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.

        To Run Food Donation And Awareness Campaign In Rural Region.
        </p>
        <p>
        To build Next Generation Entrepreneur, by providing them a Skill-Based Education.

        To Provide Internship, Training And Workshops and Quality Education All Over The World..
        </p>
    </div>
    </div>
    
  )
}

export default about;