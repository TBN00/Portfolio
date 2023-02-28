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

            <div className='projectContainer'>
                <div className="projects">
                    <div className="buttonContainer">
                        <div className="buttonPanel">
                            <button onClick={() => setProjectState('Journeyal')} className="button">Journeyal</button>
                            <button onClick={() => setProjectState('Ecards')} className="button">E-Cards</button>
                            <button onClick={() => setProjectState('Trivia')} className="button">Trivia</button>
                            <button onClick={() => setProjectState('Pokedex')} className="button">Pokédex</button>
                            <button onClick={() => setProjectState('Itunes')} className="button">Itunes Search</button>
                            <button onClick={() => setProjectState('Albums')} className="button">Album Directory</button>
                        </div>
                    </div>
                    <div className="displayProjects">
                        {projectState === 'Journeyal' ? <Journeyal /> :
                            projectState === 'Ecards' ? <Ecards /> :
                            projectState === 'Trivia' ? <Trivia /> :
                            projectState === 'Pokedex' ? <Pokedex /> :
                            projectState === 'Itunes' ? <Itunes /> :
                            projectState === 'Albums' ? <Albums /> : null}
                    </div>
                </div>
            </div>

    );
}