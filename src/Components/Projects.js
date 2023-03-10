import { useState } from "react";
import { Journeyal } from "./Journeyal";
import { Ecards } from "./Ecards";
import { Trivia } from "./Trivia";
import { Pokedex } from "./Pokedex";
import { Itunes } from "./Itunes";
import { Albums } from "./Albums";


export const Projects = () => {
    const [projectState, setProjectState] = useState('Journeyal')


    return (
        <div style={{display: 'flex', alignItems: 'center',flexDirection: 'column', flexWrap: 'wrap', width: "80vw"}}>
            <div className="buttonPanel">
                <div style={{backgroundColor: projectState === 'Journeyal' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Journeyal')} className="button">Journeyal</div>
                <div style={{backgroundColor: projectState === 'Ecards' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Ecards')} className="button">E-Cards</div>
                <div style={{backgroundColor: projectState === 'Trivia' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Trivia')} className="button">Trivia</div>
                <div style={{backgroundColor: projectState === 'Pokedex' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Pokedex')} className="button">Pokédex</div>
                <div style={{backgroundColor: projectState === 'Itunes' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Itunes')} className="button">Itunes Search</div>
                <div style={{backgroundColor: projectState === 'Albums' && 'rgb(20, 20, 20)', fontSize: "2vw"}} onClick={() => setProjectState('Albums')} className="button">Album Directory</div>
            </div>
            <div className='projectContainer'>
                        {projectState === 'Journeyal' ? <Journeyal /> :
                            projectState === 'Ecards' ? <Ecards /> :
                                projectState === 'Trivia' ? <Trivia /> :
                                    projectState === 'Pokedex' ? <Pokedex /> :
                                        projectState === 'Itunes' ? <Itunes /> :
                                            projectState === 'Albums' ? <Albums /> : null}
            </div>
        </div>
    );
}