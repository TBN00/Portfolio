import { useState } from 'react';
import './App.css';
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Menu } from './Components/Menu'


function App() {
  const [buttonState, setButtonState] = useState('')

  console.log(buttonState)

  return (
    <div className="App" style={{backgroundImage: "url(assets/beanstalk-dark.webp)"}}>
      {buttonState.length === 0 &&
        <div>
          <h1>Hi, my name is Taylor</h1>
          <h2>I'm a front end developer</h2>
        </div>}
      <div>
        {buttonState === 'About' ? <About /> :
          buttonState === 'Skills' ? <Skills /> :
            buttonState === 'Projects' ? <Projects /> : null}
      </div>


      <Menu setButtonState={setButtonState} />


    </div >
  );
}

export default App;
