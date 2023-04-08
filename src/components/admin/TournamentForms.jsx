import React from 'react'
import { useState } from 'react'
import './TournamentForms.css'

const CreateTournament = () => {
  
  const [tournamentName, setTournamentName] = useState("")
  const [game, setGame] = useState("")
  const [date, setDate] = useState("")
  const [price, setPrice] = useState("")

  console.log(date)

  return (
    <div className="tournament-form login-form">
      <div>
          <label htmlFor="tournament-name">Tournament Name</label>
          <input type="text" id='tournament-name' value={tournamentName} onChange={(event) => setTournamentName(event.target.value)} />
      </div>
      <div>
          <label htmlFor="game">Select Game</label>
          <select id="game" value={game} onChange={(event) => setGame(event.target.value)}>
            <option value="fifa">Fifa</option>
            <option value="fortnite">Fortnite</option>
          </select>
      </div>
      <div>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
      <div>
          <label htmlFor="price">Price Per Ticket</label>
          <input type="price" id='price' value={price} onChange={(event) => setPrice(event.target.value)} />
      </div>
      <div className="login-button">
          <button id='submit' type='button'>CREATE</button>
      </div>
    </div>
  )
}

const TournamentForms = () => {
  return (
    <div className="tournament-form">
        <CreateTournament />
    </div>
  )
}

export default TournamentForms