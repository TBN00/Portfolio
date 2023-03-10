

export const Albums = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}} className="displayContainer">
            <div className="displayContainerImagesWeb">
                <img style={{ width: "60vh", height: "60vh"}} className='projectImages' alt="images" src='assets/Albums.png' />
            </div>
            <div style={{paddingLeft: '5vw'}} className="displayContainerDescription">
                <h2 style={{fontSize: "5vh"}}>Albums</h2>
                <br />
                <p className="bulletFont">Introduction to Django after learning Python. This project allows a user to add music albums to a saved library.
                </p>
                <br />
                <div className="projectSkills">
                    <li className="bulletFont">Django</li>
                    <li className="bulletFont">Python</li>
                    <li className="bulletFont">CSS</li>
                    <li className="bulletFont">Git</li>
                </div>
            </div>
        </div>
    );
}

