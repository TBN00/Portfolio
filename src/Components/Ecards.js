import { useState } from "react";


export const Ecards = () => {
    const images = ['assets/Ecards/CornyHome.png']
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
        <div style={{display: "flex", justifyContent: "space-between"}} className="displayContainer">
            <div className="displayContainerImages">
                <img style={{ width: "60vh", height: "60vh", marginTop: "5vh" }} className='projectImages' alt="images" src={images[counter]} />
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
                <h2 style={{fontSize: "5vh"}}>E-cards</h2>
                <br />
                <p className="bulletFont">This was my first project working with a back end team. It is a social e-cards site that allows users to create and share cards with their followers.
                    This project was instrumental in learning how to post and get responses from an API.
                </p>
                <br />
                <div className="projectSkills">
                    <li className="bulletFont">React</li>
                    <li className="bulletFont">JavaScript</li>
                    <li className="bulletFont">API</li>
                    <li className="bulletFont">CSS</li>
                    <li className="bulletFont">Git</li>
                    <li className="bulletFont">Agile</li>
                </div>
            </div>
        </div>
    );
}