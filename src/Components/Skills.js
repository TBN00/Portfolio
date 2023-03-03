import { useState } from "react";
import { BackEnd } from "./BackEnd";
import { FrontEnd } from "./FrontEnd";
import { Other } from "./Other";

export const Skills = () => {
    const [tabState, setTabeState] = useState("")

    return (
        <div>
            <div className="buttonPanel"  style={{marginBottom: "-1vh"}}>
                <div onMouseEnter={() => setTabeState("FrontEnd")}
                    onMouseLeave={() => setTabeState("")}
                    className="button"
                    style={{ backgroundColor: tabState === 'FrontEnd' && 'rgb(80, 80, 80)' }}>Front End</div>
                <div onMouseEnter={() => setTabeState("BackEnd")}
                    onMouseLeave={() => setTabeState("")}
                    className="button"
                    style={{ backgroundColor: tabState === 'BackEnd' && 'rgb(80, 80, 80)' }}>Back End</div>
                <div onMouseEnter={() => setTabeState("Other")}
                    onMouseLeave={() => setTabeState("")}
                    className="button"
                    style={{ backgroundColor: tabState === 'Other' && 'rgb(80, 80, 80)' }}>Other</div>
            </div>
            <div className="projectContainer">
                    {tabState === "FrontEnd" ? <FrontEnd setTabeState={setTabeState}/> :
                        tabState === "BackEnd" ? <BackEnd setTabeState={setTabeState}/> :
                            tabState === "Other" ? <Other setTabeState={setTabeState}/> : null}
            </div>
        </div>
    );
}