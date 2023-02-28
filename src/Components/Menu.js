
export const Menu = ({ setButtonState }) => {


    return (
        <div className="menuBar">
            <img className="headshot" src='assets/IMG_8003.jpg' />

            <div className="icons">
            <a href="https://github.com/TBN00">
                <img style={{width: "3vw", height: "3vw", padding: ".5vw"}} src="assets/github-mark.png"/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-nelson00/">
                <img style={{width: "3vw", height: "3vw", padding: ".5vw"}} src="assets/LI-In-Bug.png"/>
            </a>
            </div>

            <div onClick={() => setButtonState('About')} className="menuButtons">
                <h3>About</h3>
            </div>
            <div onClick={() => setButtonState('Skills')} className="menuButtons">
                <h3>Skills</h3>
            </div>
            <div style={{ borderBottomWidth: 1, borderBottomColor: "white", borderBottomStyle: "solid" }} onClick={() => setButtonState('Projects')} className="menuButtons">
                <h3>Projects</h3>
            </div>
        </div>
    );
}
