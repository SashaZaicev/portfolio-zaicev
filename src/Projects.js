import React from 'react';
import styles from './Projects.module.css'
import BlockTitle from "./BlockTitle";
import todolistBgImg from './assets/img/todolist.png'
import socialnetworkBgImg from './assets/img/social-network.jpg'
import phoneshopBgImg from './assets/img/phone-shop.png'
import Project from "./Project";
import Fade from 'react-reveal/Fade';

function Projects() {
    const todolistImg = {
        backgroundImage: `url(${todolistBgImg})`
    };
    const socialnetworkImg = {
        backgroundImage: `url(${socialnetworkBgImg})`
    };
    const phoneshopImg = {
        backgroundImage: `url(${phoneshopBgImg})`
    };
    return (
        <div className={styles.projects} id={'projects'}>
            <Fade bottom>
                <div className={styles.container}>
                    {/*<div className={styles.headerTitle}>*/}
                    <BlockTitle title={"My projects"}/>
                    {/*<div className={styles.line}></div>*/}
                    {/*</div>*/}
                    {/*<div className={styles.tableSkills}>*/}
                    <div className={styles.projectsWrapper}>
                        <Project title={"To do list"}
                                 style={todolistImg}
                                 description={'To do list for every day on the week'}
                                 href_first={'https://sashazaicev.github.io/to-do-list-zaicev/'}
                                 href_second={'https://github.com/SashaZaicev/to-do-list-zaicev'}
                        />

                        <Project title={"Socialnetwork"}
                                 style={socialnetworkImg}
                                 description={'Social network: research project,\n' +
                                 'sharpening skills'}
                                 href_first={'https://sashazaicev.github.io/social_network_zaicev/'}
                                 href_second={'https://github.com/SashaZaicev/social_network_zaicev'}

                        />

                        <Project title={"Phone-shop"}
                                 style={phoneshopImg}
                                 description={'Mobile phone shop with use paypal'}
                                 href_first={'https://react-phone-store-zaicev.netlify.com/'}
                                 href_second={'https://github.com/SashaZaicev/react-phone-store'}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
