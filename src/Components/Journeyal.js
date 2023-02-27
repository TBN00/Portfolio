import { useState } from "react";


export const Journeyal = () => {
    const images = ['assets/Journeyal/Journeyal-Login.png', 'assets/Journeyal/Journeyal-Home.png', 'assets/Journeyal/Journeyal-Calendar.png', 'assets/Journeyal/Journeyal-Day.png', 'assets/Journeyal/Journeyal-Search.png', 'assets/Journeyal/Journeyal-Add.png', 'assets/Journeyal/Journeyal-AddExtra.png']
    let [counter, setCounter] = useState(0)


    const handleClickRight = () => {
        if(counter === images.length-1){
            setCounter(0)
        }
        else {
            setCounter(counter+=1)
        }
    }
    const handleClickLeft = () => {
        if(counter === 0){
            setCounter(images.length-1)
        }
        else {
            setCounter(counter-=1)
        }
    }

    return (
        <div>
            <h2>Journeyal</h2>
            <img className='projectImages' alt="images" src={images[counter]}/>
            <div className="directionButtonContainer">
                <button className="directionButtons" onClick={() => handleClickLeft()}>
                    <p>←</p>
                </button>
                <button className="directionButtons" onClick={() => handleClickRight()}>
                    <p>→</p>
                </button>
            </div>
        </div>
    );
}
