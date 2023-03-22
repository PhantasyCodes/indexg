import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrowRight from '../assets/icons/next.png'
import arrowLeft from '../assets/icons/prev.png'

// import './CategoriesCarousel.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='next-arrow' onClick={onClick}>
            <img src={arrowRight} alt="right" />
        </div>
    );
}
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='prev-arrow' onClick={onClick}>
            <img src={arrowLeft} alt="left" />
        </div>
    );
}

const CategoriesCarousel = () => {
  return (
    <div className='categories-carousel'>
        <Slider {...settings} >
            <div className='card'>
                <div className="card-category">
                    <h2>indexG shirts</h2>
                </div>
            </div>
            <div className='card'>
                <div className="card-category">
                    <h2>indexG hoodies</h2>
                </div>
            </div>
            <div className='card'>
                <div className="card-category">
                    <h2>indexG accessories</h2>
                </div>
            </div>
            <div className='card'>
                <div className="card-category">
                    <h2>indexG tickets</h2>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default CategoriesCarousel