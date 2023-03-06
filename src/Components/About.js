import { useState, useEffect, useRef } from "react";

export const About = () => {
    let [counter, setCounter] = useState(0)
    let pictures = ["/assets/About/KY9A0911.jpg", "/assets/About/IMG_1214.jpg", "/assets/About/IMG_1215.png", "/assets/About/IMG_7551.jpg", "/assets/About/IMG_7681.jpg"]
    let timerRef

    function timer() {
        if (counter === pictures.length - 1) {
            setCounter(0)
        }
        else {
            setCounter(counter += 1)
        }
    }

    clearInterval(timerRef)
    timerRef = setTimeout(timer, 4000)


    return (
        <div className="projectContainer">
            <div style={{ width: '80%', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {pictures.map((pic, index) => (
                    <img
                        id={index}
                        key={index}
                        className={index === counter ? "image active" : "image"}
                        src={pic}
                        style={{
                            zIndex: `-${index + 1}`
                        }}
                    />
                ))}
                <div style={{marginTop: "50vh"}}>
                    <h1>Hi, my name is Taylor Nelson</h1>
                    <br />
                    <h2>
                        With years of experience in supply chain logistics and management,
                        I decided to take a huge leap and go for my dream career. As a recent
                        graduate in the Momentum program, I've had an amazing time learning JavaScript,
                        Python, Django and React. I've developed a passion for front end development which
                        led me to branch into React Native. Collaborating with others to create a mobile
                        app has been some of the most fulfilling work I've ever done. I'm aspiring to
                        bring a broad background with strong technical skills to excel as a Front-End Developer.
                    </h2>
                </div>
            </div>
        </div>
    );
}
