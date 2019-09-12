import React from 'react';
import styles from './Contacts.module.css'
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade bottom>
            <div className={styles.container}>
                <BlockTitle title={"Contacts"}/>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} placeholder="Name" type="text"/>
                    <input className={styles.formArea} placeholder="e-mail" type="email"/>
                    <textarea className={styles.messageArea} placeholder="Message" name="" id="" cols="30"
                              rows="10"/>
                    <button className={styles.btnSubmit} type="submit">SEND</button>
                </form>
            </div>
            </Fade>
        </div>
    );
}

export default Contacts;
