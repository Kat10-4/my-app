import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating as R} from "./components/rating/Rating";

function App() {
    console.log("App rendering");
    return (
        <div>
            <R/>
            <Accordion/>
            <R/>
        </div>
    );
}


export default App;
