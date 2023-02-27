import { useState } from "react";


export const Trivia = () => {
    const images = ['assets/Trivia/Trivia-Home.png', 'assets/Trivia/Trivia-Categories.png', 'assets/Trivia/Trivia-Questions.png', 'assets/Trivia/Trivia-QuestionsExtra.png', 'assets/Trivia/Trivia-Score.png']
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
            <h2>Trivia</h2>
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
