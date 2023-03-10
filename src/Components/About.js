import { useState } from "react";

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
            <div style={{ width: '80%', zIndex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40vw'}}>
                    {pictures.map((pic, index) => (
                    <img
                    alt="about"
                        id={index}
                        key={index}
                        className={index === counter ? "image active" : "image"}
                        src={pic}
                        style={{
                            zIndex: `-${index + 1}`
                        }}
                    />
                ))}
                </div>
                <div style={{userSelect: 'none', width: '40vw' }}>
                    <h1>Hi, I'm Taylor...</h1>
                    <br />
                    <h2 style={{fontSize: "1.5vw"}}>
                        I consider myself a big ol’ nerd whose hobbies include playing board games,
                        staying physically active, and cosplaying at the local ComicCon. I’ve worked as a grocery bagger,
                        a supervisor at a University bookstore, and most recently as a warehouse specialist. I’ve acquired
                        many skills through these jobs such as customer service, inventory management, and strong communication
                        and collaboration. However, these jobs lacked something I truly wanted: the ability to be creative
                        and use my skills to help produce something tangible that others could use. In 2022, I finally decided
                        to act on my dream and I enrolled in a software development bootcamp. I’ve loved every moment since.
                    </h2>
                </div>
            </div>
        </div>
    );
}
