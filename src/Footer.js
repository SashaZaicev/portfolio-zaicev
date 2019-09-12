import React from 'react';
import styles from './Footer.module.css'
import telegramIcon from "./assets/img/telegram2.svg"
import vkIcon from './assets/img/vk.svg'
import facebookIcon from './assets/img/facebook.svg'
import LinkedInIcon from "./assets/img/linkedin.svg"
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    {/*<div className={styles.headerTitle}>*/}
                    <BlockTitle title={"Alexander"}/>
                    {/*    <div className={styles.line}></div>*/}
                    {/*</div>*/}
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}><a href="#"><img src={telegramIcon} alt=""/></a></div>
                        <div className={styles.socialIcon}><a href="#"><img src={facebookIcon} alt=""/></a></div>
                        <div className={styles.socialIcon}><a href="#"><img src={LinkedInIcon} alt=""/></a></div>
                        <div className={styles.socialIcon}><a href="#"><img src={vkIcon} alt=""/></a></div>
                        <div className={styles.socialIcon}><a href="#"><img src={facebookIcon} alt=""/></a></div>
                    </div>
                    <span className={styles.copyRight}>© 2019 All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
