import React from 'react'
import { useState } from 'react'
import ImageUploadForm from '../../components/ImageUploadForm'
import './TournamentForms.css'

const CreateTournament = () => {
  
  const [tournamentName, setTournamentName] = useState("")
  const [game, setGame] = useState("")
  const [date, setDate] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [tournamentPic, setTournamentPic] = useState("")

  function sendTournament() {
    let created = false;
    
    const reqBody = {
      "name" : tournamentName,
      "game" : game,
      "price" : price,
      "date" : date,
      "description" : description,
      "tournamentPic" : tournamentPic
    }

    const formData = new FormData()

    for(const name in reqBody) {
      formData.append(name, reqBody[name])
    }

    fetch('http://localhost:8080/api/v1/tournaments/register', {
      method: 'POST',
      body: formData,
    }).then((response) => {
        if(response.status === 200) {
          console.log("Tournament created")
          created = true;
        } else {
          console.log("Tournament not created")
        }
    })
  }

  const handleImageUpload = (childState) => {
    setTournamentPic(childState);
  }

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
      <div>
          <label htmlFor="description">Description</label>
          <textarea className='description' id='description' value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div>
        <ImageUploadForm onChildStateChange={handleImageUpload}/>
      </div>
      <div className="login-button">
          <button id='submit' type='button' onClick={() => sendTournament()}>CREATE</button>
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