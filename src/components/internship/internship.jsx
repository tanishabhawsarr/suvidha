import React from 'react'
import './internship.css'
import Intern from '../../assets/Suvidhaintern.jpg'

const internship = () => {
  return (
    <section className="internship">
        <img src={Intern} alt="Suvidha Foundation Internship" />
        <div className="internship-content">
            <h2>Apply For Internship and Mentorship Programs</h2>
            <p>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</p>
            <p>The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</p>
            <button>Apply Here</button>
        </div>
    </section>
  )
}

export default internship;