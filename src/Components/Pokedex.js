import { useState } from "react";


export const Pokedex = () => {
    const images = ['assets/Pokedex/PokeHome.png', 'assets/Pokedex/PokeList.png', 'assets/Pokedex/PokeAbout.png', 'assets/Pokedex/PokeStats.png', 'assets/Pokedex/PokeEvo.png']
    let [counter, setCounter] = useState(0)


    const handleClickRight = () => {
        if (counter === images.length - 1) {
            setCounter(0)
        }
        else {
            setCounter(counter += 1)
        }
    }
    const handleClickLeft = () => {
        if (counter === 0) {
            setCounter(images.length - 1)
        }
        else {
            setCounter(counter -= 1)
        }
    }

    return (
        <div className="displayContainer">
            <div className="displayContainerImages">
                <img className='projectImages' alt="images" src={images[counter]} />
                <div className="directionButtonContainer">
                    <button className="directionButtons" onClick={() => handleClickLeft()}>
                        <p>⇦</p>
                    </button>
                    <button className="directionButtons" onClick={() => handleClickRight()}>
                        <p>⇨</p>
                    </button>
                </div>
            </div>
            <div className="displayContainerDescription">
                <h2>Pokédex</h2>
                <br/>
                <p>A pokédex using the free PokéApi. This was an engaging project where I learned a lot on gathering and displaying information from an API.</p>
                <br/>
                <div className="projectSkills">
                <li>React Native</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS</li>
                <li>Git</li>
                </div>
            </div>
        </div>
    );
}