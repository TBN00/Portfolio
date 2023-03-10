import { useState } from "react";


export const Albums = () => {
    const images = ['assets/Ecards/CornyHome.png', 'assets/Ecards/CornyCreate.png']
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
            </div>
            <div style={{paddingLeft: '5vw'}} className="displayContainerDescription">
                <h2 style={{fontSize: "5vh"}}>Albums</h2>
                <br />
                <p className="bulletFont">Introduction to Django after learning Python. This project allows a user to add music albums to a saved library.
                </p>
                <br />
                <div className="projectSkills">
                    <li className="bulletFont">Django</li>
                    <li className="bulletFont">Python</li>
                    <li className="bulletFont">CSS</li>
                    <li className="bulletFont">Git</li>
                </div>
            </div>
        </div>
    );
}

