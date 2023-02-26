import React, {useContext} from "react";
import {ThemeContext} from "./DarkOrLight";

function MainContext(props){
    const {theme,toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{width:"100px",
            height:"100px",
            padding:"1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color : theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경경</button>
        </div>
    )
}

export default MainContext;