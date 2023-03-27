import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProgress } from './store/LoadingSlice'

import ProgressBar from '../components/ProgressBar'

import logo from '../assets/logo.png'

import './Loader.css'

const transition = {duration: .6, ease: [0.43, 0.13, 0.23, 0.96]}
// const imageArray = [hero1, hero2]

function Loader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    const unlisten = navigate.listen(() => {
      dispatch(setProgress(0))
    })

    return () => {
      unlisten();
    };

  }, [navigate, dispatch])

  useEffect(() => {
    let intervalId;

    if (isLoading) {
      intervalId = setInterval(() => {
        dispatch(setProgress(progress => progress + 1));
      }, 50);
    } else {
      dispatch(setProgress(100));
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading, dispatch]);

  return (
    <div className="loading-bar" style={{ display: isLoading ? 'block' : 'none' }}>
      <ProgressBar />
    </div>

  )
}

export default Loader