import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu'
import TwoSectionComponent from '../components/tournament/TwoSectionComponent'

import './Tournament.css'

const Tournament = () => {

  const { tournamentId } = useParams()

  const [tournament, setTournament] = useState("")

  const [gameUrl, setGameUrl] = useState("")
  const [gameTitle, setGameTitle] = useState("")

  useEffect(() => {
    console.log(tournamentId)
    fetch("http://localhost:8080/api/v1/tournaments/" + tournamentId)
    .then(res => res.json())
    .then((data) => {
      setTournament(data)
    })
  }, [])

  useEffect(() => {
    if(tournament.game === "fortnite") {
      setGameUrl("/tournaments/images/fortnite.png")
      setGameTitle("/tournaments/images/fortnite-logo.png")
    }
    else if(tournament.game === "fifa") {
      setGameUrl("/tournaments/images/fifa-image.png")
      setGameTitle("/tournaments/images/fifa.png")
    }
  }, [tournament])

  const FortniteImages = () => {
    return (
      <div className="fortnite-images">
        <img className='tournament-game-title' src={gameTitle} alt="nice" />
        <img className='tournament-game-image' src={gameUrl} alt="nice" />
      </div>
    )
  }


  const FifaImages = () => {
    return (
      <div className="fifa-images">
        <img className='fifa-game-title' src={gameTitle} alt="nice" />
        <img className='fifa-game-image' src={gameUrl} alt="nice" />
      </div>
    )
  }

  return (
    <div className='tournament-page'>
      <HamburgerMenu toggle={() => {}} isOpen={false} />
      {tournament.game === "fortnite" ? <FortniteImages /> : <FifaImages />}
      <div className="tournament-content">
        <h1>{tournament.name}</h1>
        <p>{tournament.description}</p>
        <TwoSectionComponent />
        <div className="date">
          <h2>24th-25th FEBUARY</h2>
        </div>
      </div>
    </div>
  )
}

export default Tournament