
export const Menu = ({ setButtonState }) => {


    return (
        <div className="menuBar">
            <img className="headshot" src='assets/IMG_3266.jpg' />

            <div className="icons">
                <a href="https://github.com/TBN00">
                    <img style={{ width: "3vw", height: "3vw", padding: ".5vw", marginRight: "1vw" }} src="assets/github-mark-white.png" />
                </a>
                <a href="https://www.linkedin.com/in/taylor-nelson00/">
                    <img style={{ width: "3vw", height: "3vw", padding: ".5vw" }} src="assets/In-White-96.png" />
                </a>
            </div>

            <div onClick={() => setButtonState('About')} className="menuButtons">
                <h3>About</h3>
            </div>
            <div onClick={() => setButtonState('Skills')} className="menuButtons">
                <h3>Skills</h3>
            </div>
            <div onClick={() => setButtonState('Projects')} className="menuButtons">
                <h3>Projects</h3>
            </div>
            <div className="menuButtons">
                <h3>Download my Resume</h3> 
            </div>
        </div>
    );
}
