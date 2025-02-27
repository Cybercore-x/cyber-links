import "./Theme.css";
import { useState } from "react";

function Theme() {
    const [darktheme, setDarktheme] = useState(true);
    function darkMode() {
        setDarktheme(!darktheme);
        if (darktheme === false) {
            document.documentElement.style.backgroundColor = "#ffffff";
            document.body.style.backgroundColor = "#ffffff";
            document.querySelector(".container").style.backgroundColor =
                "#f5f5f5";
            document.querySelector(".child-container").style.backgroundColor =
                "#e0e0e0";
        } else {
            document.documentElement.style.removeProperty("background-color");
            document.body.style.removeProperty("background-color");
            document
                .querySelector(".container")
                .style.removeProperty("background-color");
            document
                .querySelector(".child-container")
                .style.removeProperty("background-color");
        }
    }
    return (
        <>
            <label className="switch">
                <input
                    onChange={darkMode}
                    id="input"
                    type="checkbox"
                    checked={darktheme}
                />
                <div className="slider round">
                    <div className="sun-moon">
                        <svg
                            id="moon-dot-1"
                            className="moon-dot"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="moon-dot-2"
                            className="moon-dot"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="moon-dot-3"
                            className="moon-dot"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="light-ray-1"
                            className="light-ray"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="light-ray-2"
                            className="light-ray"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="light-ray-3"
                            className="light-ray"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>

                        <svg
                            id="cloud-1"
                            className="cloud-dark"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="cloud-2"
                            className="cloud-dark"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="cloud-3"
                            className="cloud-dark"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="cloud-4"
                            className="cloud-light"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="cloud-5"
                            className="cloud-light"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                        <svg
                            id="cloud-6"
                            className="cloud-light"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div className="stars">
                        <svg id="star-1" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg id="star-2" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg id="star-3" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg id="star-4" className="star" viewBox="0 0 20 20">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                    </div>
                </div>
            </label>
        </>
    );
}

export default Theme;
