import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating as R} from "./components/rating/Rating";

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <h2>article 1</h2>
            <R value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <h2>article 2</h2>
            <R value={0}/>
            <R value={1}/>
            <R value={2}/>
            <R value={3}/>
            <R value={4}/>
            <R value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
