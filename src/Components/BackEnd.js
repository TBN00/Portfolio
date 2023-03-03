
export const BackEnd = ({setTabeState}) => {
    return (
        <div  onMouseEnter={() => setTabeState("BackEnd")} onMouseLeave={() => setTabeState("")}
        style={{width: "41.3%", height: "60vh", backgroundColor: "rgb(80, 80, 80)",  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <li>Python</li>
            <li>Django</li>
            <li>OOP</li>
        </div>
    );
}

