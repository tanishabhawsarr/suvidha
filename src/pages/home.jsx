import React from 'react'

import Hero from '../components/hero/hero'
import Programs from '../components/programs/programs';
import Title from '../components/title/title'
import About from '../components/about/about'
import Testimonial from '../components/testimonials/testimonial'
import Causes from '../components/causes/causes'
import Team from '../components/team/team'
import Collage from '../components/college/college'
import Testimonial1 from '../components/testimonial1/testimonial1'
import Internship from '../components/internship/internship'
import Section from '../components/section/section'
import Footer from '../components/footer/footer'
import '../index.css'

const Home = () => {
  return (
    <div>
    
      <Hero />
      <div className='container'>
      <About />
      </div>
       
       <Internship />

      <div className='container'>
      <Title subTtile="What We Do?" title="Causes for a Sustainable Future" />
      <Causes />
      <Title subTtile="Suvidha Events" title="Our Charity Events: Celebrating Our Impact Together"/>
      <Programs />
      </div>

      <Section/>

      <div className='container'>
      <Title subTtile="Testimonial" title="What people are talking about our charity activities" />
      <Testimonial1 />
      <Title subTtile="Meet Our Team" title="Guys behind our charity activities" />
      <Team />
      <Title title="Empowering Change Together: Our Collaborative Initiatives" />
      <Collage />
      <Title subTtile="Testimonial" title="What people are talking about our charity activities" />
      <Testimonial/>
      <Footer />
      </div>
        
    </div>
  )
}

export default Home;