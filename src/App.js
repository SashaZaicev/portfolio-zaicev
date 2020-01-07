import React from 'react';
import './App.css';
import Skills from "./Skills";
import Main from "./Main";
import Header from "./components/Header/HeaderNew";
import Slogan from "./Slogan";
import Project from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Particles from 'react-particles-js';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
    },
};

function App() {
    return (
        <div className="App">
            <Particles className="particles"
                       params={particlesOpt}/>
            <Header/>
            <Main/>
            <Skills/>
            <Project/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
