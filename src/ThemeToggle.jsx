import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAppContext } from "./context/globalContext";

import React from "react";

export const ThemeToggle = () => {
   const {isDarkTheme, toggleDarkTheme} = useAppContext()
    return(
        <section className="toggle-container">
            <button onClick={toggleDarkTheme} className="dark-toggle">
                {isDarkTheme? <BsFillMoonFill className="toggle-icon"/> : <BsFillSunFill className="toggle-icon"/>}
            </button>
        </section>
    )
}