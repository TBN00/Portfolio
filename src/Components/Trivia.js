import { useState } from "react";


export const Trivia = () => {
    const images = ['assets/Trivia/Trivia-Home.png', 'assets/Trivia/Trivia-Categories.png', 'assets/Trivia/Trivia-Questions.png', 'assets/Trivia/Trivia-QuestionsExtra.png', 'assets/Trivia/Trivia-Score.png']
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
                <h2>Trivia</h2>
                <br/>
                <p>A trivia quiz game using an API. This was originally made in React but I went back and reworked it into a React Native App.</p>
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
