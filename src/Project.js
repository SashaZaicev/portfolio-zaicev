import React from 'react';
import styles from './Project.module.css'

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} style={props.style}>
                <a className={styles.btnShow} href={props.href_first}>SITE</a>
                <a className={styles.btnShow} href={props.href_second}>CODE</a>
                <br/>
                {props.href_third && props.href_fourth ?
                    (<div><a className={styles.btnShow} href={props.href_third}>SITE TS</a>
                        <a className={styles.btnShow} href={props.href_fourth}>CODE TS</a></div>)
                    : ''}
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>

        </div>
    );
}

export default Project;
