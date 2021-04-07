import React from 'react';
import styles from './Skill.module.css';
import htmlIcon from '../src/assets/img/html-icon.svg';
import reactIcon from "./assets/img/react-icon.svg";
import jsIcon from "./assets/img/js-icon.svg";
import typescript from "./assets/img/ts2.svg";

let react = reactIcon;
let js = jsIcon;
let html = htmlIcon;
let ts = typescript

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                icon: html,
                title: "HTML & CSS",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi " +
                    "consequatur dicta "
            },
            {
                icon: js,
                title: "JS",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi " +
                        "consequatur dicta distinctio"
            },
            {
                icon: react,
                title: "REACT",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur " +
                        "dicta distinctio "
            },,
            {
                icon: ts,
                title: "TYPE SCRIPT",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur " +
                        "dicta distinctio "
            },
        ];
    }

    render() {
        // debugger

        return (
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <img src={this.props.icon} alt=""/>
                </div>

                <span className={styles.skillTitle}>{this.props.title}</span>
                <span className={styles.description}>{this.props.description} </span>

            </div>
        )
    }


}

export default Skill;
