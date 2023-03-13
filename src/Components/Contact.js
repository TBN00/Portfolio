import { useState } from "react";


export const Contact = () => {
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/9dfc6280-bd2b-11ed-a5bc-bf2fe544c0fb"
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true)
        }, 100)
    }

    if (submitted) {
        return (
                <div className="projectContainer">
                    <h1>Thank you! We'll be in touch soon</h1>
                </div>
        )
    }


    return (
        <div className="projectContainer">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank">
                <div>
                    <input
                        style={{ width: "40vw", height: "5vh", fontSize: "3vw", margin: "1vh", color: "black" }}
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        autoComplete="off"
                        required />
                </div>
                <div>
                    <input
                        style={{ width: "40vw", height: "5vh", fontSize: "3vw", margin: "1vh", color: "black" }}
                        type="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="off"
                        required />
                </div>
                <div>
                    <textarea
                        style={{ width: "40vw", height: "40vh", fontSize: "1.5vw", margin: "1vh", color: "black" }}
                        placeholder="Your message"
                        name="message"
                        required />
                </div>
                <div>
                    <button
                        style={{ height: "5vh", width: "10vw", background: "rgb(5, 5, 5)", fontSize: "1.5vw" }}
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
