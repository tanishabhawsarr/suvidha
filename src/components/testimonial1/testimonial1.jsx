import React from 'react'
import './testimonial1.css'
import test1 from '../../assets/testi1.jpg';
import test2 from '../../assets/testi2.jpg';
import test3 from '../../assets/testi3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from 'react';



const testimonial1 = () => {

  const [slidesToShow, setSlidesToShow] = React.useState(3);

  // Media query listener to adjust slidesToShow
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:slidesToShow,
        slidesToScroll:slidesToShow,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#000f38", borderRadius: "50%", padding: "30px",display:"flex",alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
          >
            <i className="fas fa-chevron-right" />
          </div>
        );
      }
    
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#000f38", borderRadius: "50%", padding: "30px",display:"flex",alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
          >
            <i className="fas fa-chevron-left" />
          </div>
        );
    }

  return (
    <div className='testimonial1'>
      <Slider {...settings}>
      <div className='slideimg'>
          <img src={test1} alt="Testimonial 1" />
        </div>
        <div  className='slideimg'>
          <img src={test2} alt="Testimonial 2" />
        </div>
        <div className='slideimg'>
          <img src={test3} alt="Testimonial 3" />
        </div>
        <div className='slideimg'>
          <img src={test1} alt="Testimonial 1" />
        </div>
        <div className='slideimg'>
          <img src={test2} alt="Testimonial 2" />
        </div>
        <div className='slideimg'>
          <img src={test3} alt="Testimonial 3" />
        </div>
      </Slider>

      <button>View All</button>
    </div>
  )
}

export default testimonial1;