
export const Menu = ({ setButtonState }) => {
        
    const onResumeClick = () => {
            fetch('Nelson, Taylor Resume.pdf').then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Nelson, Taylor Resume.pdf';
                    alink.click();
                })
            })
        }

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
                <h3 style={{fontFamily: "Square", fontSize: "3vw"}}>About</h3>
            </div>
            <div onClick={() => setButtonState('Skills')} className="menuButtons">
                <h3 style={{fontFamily: "Square", fontSize: "3vw"}}>Skills</h3>
            </div>
            <div onClick={() => setButtonState('Projects')} className="menuButtons">
                <h3 style={{fontFamily: "Square", fontSize: "3vw"}}>Projects</h3>
            </div>
            <div onClick={() => setButtonState('Contact')} className="menuButtons">
                <h3 style={{fontFamily: "Square", fontSize: "3vw"}}>Contact</h3>
            </div>
            <div onClick={onResumeClick} className="menuButtons">
                <h3 style={{fontFamily: "Square", fontSize: "3vw"}}>Resume</h3> 
            </div>
        </div>
    );
}
