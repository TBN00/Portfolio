import { useState } from "react";

export const Skills = () => {
    const [tabState, setTabeState] = useState("")

    return (
            <div className="projectContainer">
                <div style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{fontSize: '10vh'}}>Skills</h1>
                <div style={{width: "25vw", height: "40vh", display: "flex", flexDirection: 'column', flexWrap: 'wrap', marginTop: '3vh', alignItems: 'flex-start'}}>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>React Native</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>React</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>JavaScript</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>HTML</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>CSS</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>Python</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>Django</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>Agile Development</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>API</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>Git</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>GitHub</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>Trello</li>
                    <li style={{fontSize: '3vh', paddingBottom: '1vh'}}>JSON</li>
                </div>
            </div>
            </div>
    );
}