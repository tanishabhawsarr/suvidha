import React from 'react'
import './hero.css'

const hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Bringing smiles to Millions</h1>
            <div className='disflex'>
            <button>Donate Now</button>
            <button>Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default hero;