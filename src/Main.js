import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.container}>

                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>My name <span>Alexander</span></span>
                    <h1>I am front-end-developer</h1>
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
