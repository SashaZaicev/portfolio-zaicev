import React, {useState} from 'react';
import './App.css';
import Skills from "./Skills";
import Main from "./Main";
import Header from "./components/Header/HeaderNew";
import Slogan from "./Slogan";
import Project from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Particles from 'react-particles-js';

const particlesOptDark = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        // "color": {
        //     "value": "#ff0303"
        // },
        // "line_linked":{
        //     "color": "#ff0303"
        // }
    },
};
const particlesOptLight = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff0303"
        },
        "line_linked": {
            "color": "#ff0303"
        }
    },
};

function App() {
    const [changesTheme, setChangesTheme] = useState(true)

    return (
        <div className="App">
            <Particles className="particles"
                       params={changesTheme ? particlesOptDark : particlesOptLight}/>
            <Header
                changesTheme={changesTheme}
                setChangesTheme={setChangesTheme}
            />
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
