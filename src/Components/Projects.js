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
        <div>
            <div className="buttonPanel">
                <div style={{backgroundColor: projectState === 'Journeyal' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Journeyal')} className="button">Journeyal</div>
                <div style={{backgroundColor: projectState === 'Ecards' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Ecards')} className="button">E-Cards</div>
                <div style={{backgroundColor: projectState === 'Trivia' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Trivia')} className="button">Trivia</div>
                <div style={{backgroundColor: projectState === 'Pokedex' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Pokedex')} className="button">Pokédex</div>
                <div style={{backgroundColor: projectState === 'Itunes' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Itunes')} className="button">Itunes Search</div>
                <div style={{backgroundColor: projectState === 'Albums' && 'rgb(20, 20, 20)'}} onClick={() => setProjectState('Albums')} className="button">Album Directory</div>
            </div>
            <div className='projectContainer'>
                <div className="projects">
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
        </div>
    );
}