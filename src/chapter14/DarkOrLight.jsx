import React from "react";
import {useCallback, useState} from "react";
import MainContext from "./MainContext";



export const ThemeContext = React.createContext(null);
ThemeContext.displayName = "ThemeConte4xt";

function DarkOrLight(props){
    const [theme, setTheme] = useState("light");


    const toggleTheme = useCallback(() => {
        if(theme == "light"){
            setTheme("dark");
        }else if(theme == "dark"){
            setTheme("light");
        }
    },[theme]);


    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContext/>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;