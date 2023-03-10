import { useState } from 'react';
import './App.css';
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Menu } from './Components/Menu'
import { Contact } from './Components/Contact';


function App() {
  const [buttonState, setButtonState] = useState('')


  return (
    <div className="App" style={{backgroundImage: "url(assets/beanstalk-dark.webp)"}}>
      {buttonState.length === 0 &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", paddingRight: "3vw", paddingBottom: "15vh"}}>
          <h1 style={{fontSize: "5vw", borderTop: "1vh solid white", paddingTop: "2vh"}}>Hi, my name is Taylor Nelson</h1>
          <h2 style={{fontSize: "3vw", borderBottom: "1vh solid white", paddingBottom: "2vh"}}>I'm a front-end developer</h2>
        </div>}
      <div>
        {buttonState === 'About' ? <About /> :
          buttonState === 'Skills' ? <Skills /> :
            buttonState === 'Projects' ? <Projects /> :
            buttonState === 'Contact' ? <Contact /> : null}
      </div>


      <Menu setButtonState={setButtonState} />


    </div >
  );
}

export default App;
