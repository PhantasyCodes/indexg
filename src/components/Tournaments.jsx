import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider from 'react-slick';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrowRight from '../assets/icons/next.png'
import arrowLeft from '../assets/icons/prev.png'

import './Tournaments.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <motion.div whileHover={{scale:1.1}} className='next-arrow' onClick={onClick}>
          <img src={arrowRight} alt="right" />
      </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
      <motion.div whileHover={{scale:1.1}} className='prev-arrow' onClick={onClick}>
          <img src={arrowLeft} alt="left" />
      </motion.div>
  );
}


function Tournaments() {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/tournaments/all-tournaments")
    .then(res => res.json())
    .then(data => setTournaments(data))
  }, [])

  const {ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    // console.log("use effect hook, inView = ", inView)
    // console.log("nice")
    if(inView) {
      animation.start({
        x:-200,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    }
    if(!inView){
      animation.start({x: '-19vw'})
    }

  }, [inView])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay: 2}}} className='tournaments'>
      <motion.div className="cool-title"
        ref={ref}
        
        animate={animation}>
        <h1>UPCOMING EVENTS</h1>
      </motion.div>
      <Slider {...settings} >
        {tournaments.map(tournament => (
          <div className='card'>
            <div className="tournament">
              <img className='tournament-logo' src={tournament.tournamentUrl} alt="" />
              <div className="tournament-details">
                <h1 className='tournament-name'>{tournament.name}</h1>
                <h2>24th-25th FEBUARY</h2>
                <div className="additional">
                  <h1>{tournament.name}</h1>
                  <div className="description-and-button">
                    <p>{tournament.description}</p>
                    <Link to={`/sign-up`}>
                      <motion.div whileHover={{backgroundColor: '#2A10B3'}} whileTap={{ scale: 0.9 }} className="shop-link2">
                          <h2>VIEW</h2>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
              <img className='tournament-game' src={tournament.gameUrl} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default Tournaments