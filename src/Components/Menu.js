
export const Menu = ({setButtonState}) => {


    return (
        <div className="menuBar">
                <img className="headshot" src='assets/IMG_8003.jpg'/>
                <div onClick={() => setButtonState('About')} className="menuButtons">
                    <h3>About</h3>
                </div>
                <div onClick={() => setButtonState('Skills')} className="menuButtons">
                    <h3>Skills</h3>
                </div>
                <div onClick={() => setButtonState('Projects')} className="menuButtons">
                    <h3>Projects</h3>
                </div>
        </div>
    );
}
