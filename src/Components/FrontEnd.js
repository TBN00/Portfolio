
export const FrontEnd = ({setTabeState}) => {
    return (
        <div onMouseEnter={() => setTabeState("FrontEnd")} onMouseLeave={() => setTabeState("")}
        style={{width: "41.3%", height: "60vh", backgroundColor: "rgb(80, 80, 80)",  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bulma</li>
            <li>OOP</li>
        </div>
    );
}

