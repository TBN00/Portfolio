import { useState } from "react";


export const Journeyal = () => {
    const images = ['assets/Journeyal/Journeyal-Login.png', 'assets/Journeyal/Journeyal-Home.png', 'assets/Journeyal/Journeyal-Calendar.png', 'assets/Journeyal/Journeyal-Day.png', 'assets/Journeyal/Journeyal-Search.png', 'assets/Journeyal/Journeyal-Add.png', 'assets/Journeyal/Journeyal-AddExtra.png']
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
                <h2>Journeyal</h2>
                <br />
                <p>Final Project for my software development bootcamp. Journeyal is a journal/calendar app for recording memories. Working in a team of four, we communicated using Trello and worked using Agile methodology. I learned React Native for this and quickly grew to love it. We also utilized API requests to post and get user information.</p>
                <br />
                <div className="projectSkills">
                    <li>React Native</li>
                    <li>API</li>
                    <li>CSS</li>
                    <li>Agile</li>
                    <li>Trello</li>
                    <li>Git</li>
                </div>
            </div>
        </div>
    );
}
