import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import './ProgressBar.css';

const ProgressBar = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round);
    
    useEffect(() => {
        const animation = animate(count, 100, { duration: 5 });    
        return animation.stop;
      }, []);

    const navigate = useNavigate();

    const handlePageTransition = () => {
        console.log('page transition')
        navigate('/home')
    }

  return (
    <div className="progress-bar">
        <motion.h2 
        exit={{y:'105vh', transition: {duration: 1,}}}
        >{rounded}</motion.h2>
        <motion.div className='progress' 
            initial={{width:0}} 
            animate={{width:'95vw', transition: {duration: 5,}}} 
            exit={{y:'105vh', transition: {duration: 1,}}}
            onAnimationComplete={handlePageTransition} />

    </div>
  );
};

export default ProgressBar;