import React from 'react';
import styles from './Contacts.module.css'
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

function Contacts() {
    function sendEmail(e) {
        console.log(e)
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_1i4a8m8', 'template_f61p9zj', e.target, 'user_UvAgBrcpDMGIoNpmxFnZ0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={"Contacts"}/>
                    <form className={styles.formWrapper} onSubmit={sendEmail} id="contactform" name="contact"
                          method="post">
                        <input type="hidden" name="contact_number"/>
                        <input className={styles.formArea} name="from_name" placeholder="Name" type="text" cols="30"/>
                        <input className={styles.formArea} name="user_email" placeholder="e-mail" type="email"/>
                        <textarea className={styles.messageArea} name="message" placeholder="Message" id="" cols="30"
                                  rows="10"/>
                        <button className={styles.btnSubmit} value="Send" type="submit">SEND</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
