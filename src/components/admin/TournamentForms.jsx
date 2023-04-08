import React from 'react'
import './TournamentForms.css'

const CreateTournament = () => {
    return (
      <div className="tournament-form login-form">
        <div>
            <label htmlFor="tournament-name">Tournament Name</label>
            <input type="text" id='tournament-name' />
        </div>
        <div>
            <label htmlFor="game">Select Game</label>
            <select id="game">
              <option value="fifa">Fifa</option>
              <option value="fortnite">Fortnite</option>
            </select>
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <input type="date" id='date' />
        </div>
        <div>
            <label htmlFor="price">Price Per Ticket</label>
            <input type="password" id='price' />
        </div>
        <div className="login-button">
            <button id='submit' type='button' >CREATE</button>
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