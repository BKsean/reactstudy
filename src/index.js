import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
 import reportWebVitals from './reportWebVitals';
// import Accommodate from "./chapter07/Accommodate";
// import ConfirmButton from "./chapter08/ConfirmButton";
// import ConfirmButton_function from "./chapter08/ConfirmButton_function";
// import LandingPage from "./chapter09/RendingPage";
// import AttendanceBook from "./chapter10/AttendanceBook";
// import SignUp from "./chapter11/SignUp";
// import Calculator from "./chapter12/Calculator";
// import ProfileCard from "./chapter13/ProfileCard";
import App from './react.vlpt.us/App';
import DarkOrLight from "./chapter14/DarkOrLight";
import Blocks from "./chapter15/Blocks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Blocks/>
    // <DarkOrLight/>

    // <App/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
