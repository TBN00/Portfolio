import { useState } from 'react';
import './App.css';
import {Journeyal} from "./Components/Journeyal"
import {Ecards} from "./Components/Ecards"
import {Trivia} from "./Components/Trivia"
import {Pokedex} from "./Components/Pokedex"
import {Itunes} from "./Components/Itunes"
import {Albums} from "./Components/Albums"


function App() {
  const [buttonState, setButtonState] = useState('Journeyal')


  return (
    <div className="App">
      <h1 className="headerName">Taylor Nelson</h1>
      <h3>Front End Developer</h3>

      <div className="about">
        <p>My name is Taylor I am a software developer specializing in front end development</p>
      </div>

      <div className='projectContainer'>
        <div className="projects">
          <div className="buttonContainer">
            <h2>Projects</h2>
            <div className="buttonPanel">
              <button onClick={() => setButtonState('Journeyal')} className="button">Journeyal</button>
              <button onClick={() => setButtonState('Ecards')}  className="button">E-Cards</button>
              <button onClick={() => setButtonState('Trivia')}  className="button">Trivia</button>
              <button onClick={() => setButtonState('Pokedex')}  className="button">Pokédex</button>
              <button onClick={() => setButtonState('Itunes')}  className="button">Itunes Search</button>
              <button onClick={() => setButtonState('Albums')}  className="button">Album Directory</button>
            </div>
          </div>
          <div className="displayProjects">
          {buttonState === 'Journeyal' ? <Journeyal/> : 
          buttonState === 'Ecards' ? <Ecards/> :
          buttonState === 'Trivia' ? <Trivia/> :
          buttonState === 'Pokedex' ? <Pokedex/> :
          buttonState === 'Itunes' ? <Itunes/> :
          buttonState === 'Albums' ? <Albums/> : null}
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
