import React from 'react';
import styles from './Main.module.css';
import MyCV from './assets/CV Zaitsau.pdf'

function Main() {
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.container}>

                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>My name <span>Alexander</span></span>
                    <h1>I am front-end-developer</h1>
                    <div className={styles.downloadCV}><span>My CV: <div>View  <a href={MyCV} target='_blank'>
                        {`<<<`}HERE{`>>>`}</a></div><div>Download  <a href={MyCV} download>
                        {`<<<`}HERE{`>>>`}</a></div></span></div>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
