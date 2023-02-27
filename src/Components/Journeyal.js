import { useState } from "react";


export const Journeyal = () => {
    const images = ['assets/Journeyal-Login.png', 'assets/Journeyal-Home.png', 'assets/Journeyal-Calendar.png', 'assets/Journeyal-Day.png', 'assets/Journeyal-Search.png', 'assets/Journeyal-Add.png', 'assets/Journeyal-AddExtra.png']
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
            <img className='projectImages' src={images[counter]}/>
            <div className="directionButtonContainer">
                <button onClick={() => handleClickLeft()}>
                    <p>←</p>
                </button>
                <button onClick={() => handleClickRight()}>
                    <p>→</p>
                </button>
            </div>
        </div>
    );
}
