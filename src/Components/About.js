import { useState, useEffect, useRef } from "react";

export const About = () => {
    let [counter, setCounter] = useState(0)
    let pictures = ["/assets/About/KY9A0911.jpg", "/assets/About/IMG_1215.png", "/assets/About/IMG_1214.jpg", "/assets/About/IMG_7551.jpg", "/assets/About/IMG_7681.jpg"]
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
            <div style={{ width: '80%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        I consider myself a big ole nerd who likes playing board games, staying physically active, 
                        or cosplaying at the local ComicCon. I've worked as a grocery bagger, a supervisor at a University Bookstore and most 
                        recently as a warehouse specialist. I've learned and aquired a lot of skills through these jobs like
                        customer service, inventory management, and strong communication. But these jobs lacked something I truly wanted, 
                        which was the ability to be creative. To use my skills to help create something others could use. In 2022 I finally 
                        decided it was time to find this opportunity so I enrolled in a software development bootcamp and I've loved every moment since.

                    </h2>
                </div>
            </div>
        </div>
    );
}
