
export const Menu = ({ setButtonState }) => {


    return (
        <div className="menuBar">
            <img alt="headshot" className="headshot" src='assets/IMG_3266.jpg' />

            <div className="icons">
                <a href="https://github.com/TBN00">
                    <img alt="icon" style={{ width: "3vw", height: "3vw", padding: ".5vw", marginRight: "1vw" }} src="assets/github-mark-white.png" />
                </a>
                <a href="https://www.linkedin.com/in/taylor-nelson00/">
                    <img alt="icon" style={{ width: "3vw", height: "3vw", padding: ".5vw" }} src="assets/In-White-96.png" />
                </a>
            </div>

            <div onClick={() => setButtonState('About')} className="menuButtons">
                <h3 style={{fontFamily: "LondrinaOutline", fontSize: "5.5vh"}}>About</h3>
            </div>
            <div onClick={() => setButtonState('Skills')} className="menuButtons">
                <h3 style={{fontFamily: "LondrinaOutline", fontSize: "5.5vh"}}>Skills</h3>
            </div>
            <div onClick={() => setButtonState('Projects')} className="menuButtons">
                <h3 style={{fontFamily: "LondrinaOutline", fontSize: "5.5vh"}}>Projects</h3>
            </div>
            <div onClick={() => setButtonState('Contact')} className="menuButtons">
                <h3 style={{fontFamily: "LondrinaOutline", fontSize: "5.5vh"}}>Contact Me</h3>
            </div>
            <div className="menuButtons">
                <h3 style={{fontFamily: "LondrinaOutline", fontSize: "5.5vh"}}>Resume</h3> 
            </div>
        </div>
    );
}
