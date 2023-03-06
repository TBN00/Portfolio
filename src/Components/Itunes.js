import { useState } from "react";


export const Itunes = () => {
    const images = ['assets/Itunes/Itunes-Home.png', 'assets/Itunes/Itunes-Artist.png', 'assets/Itunes/Itunes-Song.png', 'assets/Itunes/Itunes-Album.png']
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
                <img style={{width: "60vh", height: "60vh", marginTop: "5vh"}} className='projectImages' alt="images" src={images[counter]} />
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
                <h2>Itunes</h2>
                <br/>
                <p>First project using an API. It searches the free Itunes API based off keyword searches.</p>
                <br/>
                <div className="projectSkills">
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Git</li>
                </div>
            </div>
        </div>
    );
}