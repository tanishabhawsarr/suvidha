import React from 'react'
import './section.css'
import sectionimg  from '../../assets/Suvidhaintern.jpg'

const section = () => {
  return (
    <section className="section">
    <img src={sectionimg} alt="Suvidha Foundation Internship" />
    <div className="section-content">
        <div className='section-item'>
            <h1>15+</h1>
            <h2>Countries</h2>
        </div>

        <div className='section-item'>
            <h1>3 L+</h1>
            <h2>Volunteers</h2>
        </div>

        <div className='section-item'>
            <h1>1 Cr+</h1>
            <h2>Internship Goal</h2>
        </div>

        <div className='section-item'>
            <h1>54 L+</h1>
            <h2>Trees Planted</h2>
        </div>
    </div>
</section>
  )
}

export default section