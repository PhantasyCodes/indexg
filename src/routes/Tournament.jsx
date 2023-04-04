import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

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
      setGameTitle("tournaments/images/fortnite-logo.png")
    }
  }, [tournament])

  return (
    <div className='tournament-page'>
      <img className='tournament-game-title' src={gameTitle} alt="nice" />
      <img className='tournament-game-image' src={gameUrl} alt="nice" />
      <h1>{tournament.name}</h1>
    </div>
  )
}

export default Tournament