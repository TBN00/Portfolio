import { useState } from "react";

export const Journeyal = () => {
    const [images, setImages] = useState(['assets/Journeyal-Login.png', 'assets/Journeyal-Home.png', 'assets/Journeyal-Calendar.png', 'assets/Journeyal-Day.png', 'assets/Journeyal-Search.png', 'assets/Journeyal-Add.png', 'assets/Journeyal-AddExtra.png'])
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h2>Journeyal</h2>
            <img className='projectImages' src='assets/Journeyal-Login.png'/>
        </div>
    );
}
