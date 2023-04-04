import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import './Tournament.css'

const Tournament = () => {

  const { tournamentId } = useParams()

  const [tournament, setTournament] = useState("")

  useEffect(() => {
    console.log(tournamentId)
    fetch("http://localhost:8080/api/v1/tournaments/" + tournamentId)
    .then(res => res.json())
    .then((data) => {
      setTournament(data)
    })
  }, [])

  return (
    <div className='tournament-page'>
      <h1>{tournament.name}</h1>
    </div>
  )
}

export default Tournament