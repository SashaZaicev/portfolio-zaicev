import React from 'react';
import styles from './Slogan.module.css'
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={"I am considering options for remote work"}/>
                    <a className={styles.btnShow} href="">Employ</a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
