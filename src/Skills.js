import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';
import htmlIcon from '../src/assets/img/html-icon.svg';
import reactIcon from "./assets/img/react-icon.svg";
import jsIcon from "./assets/img/js-icon.svg";
import typescript from "./assets/img/js-icon.svg";



function Skills(props) {
    // debugger
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    return (
        <div className={styles.skills} id={'skills'}>
            <Fade bottom>
                <div className={styles.container}>
                    {/*<div className={styles.headerTitle}>*/}
                    <BlockTitle title={"My skills"}/>
                    {/*    <div className={styles.line}></div>*/}
                    {/*</div>*/}
                    <div className={styles.skillsWrapper}>
                        <Skill
                            icon={html}
                            title={"HTML & CSS"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi " +
                            "consequatur dicta "}/>
                        <Skill
                            icon={js}
                            title={"JS"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi " +
                            "consequatur dicta distinctio"}/>
                        <Skill
                            icon={react}
                            title={"REACT"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur " +
                            "dicta distinctio "}/>
                        <Skill
                            icon={react}
                            title={"TYPESCRIPT"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur " +
                            "dicta distinctio "}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Skills;
