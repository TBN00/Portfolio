
export const Other = ({setTabeState}) => {
    return (
        <div  onMouseEnter={() => setTabeState("Other")} onMouseLeave={() => setTabeState("")}
        style={{width: "41.3%", height: "60vh", backgroundColor: "rgb(80, 80, 80)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <li>Git</li>
            <li>Agile</li>
            <li>Trello</li>
            <li>ForkLift Certified</li>
            <li>Inventory Management</li>
        </div>
    );
}

