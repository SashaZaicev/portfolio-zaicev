import React from 'react';
import styles from './Projects.module.css'
import BlockTitle from "./BlockTitle";
import todolistBgImg from './assets/img/todolist.jpg'
import socialnetworkBgImg from './assets/img/social-network.jpg'
import calculatorBgImg from './assets/img/calculator.jpg'
import Project from "./Project";
import Fade from 'react-reveal/Fade';

function Projects() {
    const todolistImg = {
        backgroundImage: `url(${todolistBgImg})`
    };
    const socialnetworkImg = {
        backgroundImage: `url(${socialnetworkBgImg})`
    };
    const calculatorImg = {
        backgroundImage: `url(${calculatorBgImg})`
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
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                                 href_first={'https://sashazaicev.github.io/to-do-list-zaicev/'}
                                 href_second={'https://github.com/SashaZaicev/to-do-list-zaicev'}
                        />

                        <Project title={"Socialnetwork"}
                                 style={socialnetworkImg}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                                 href_first={'https://sashazaicev.github.io/social_network_zaicev/'}
                                 href_second={'https://github.com/SashaZaicev/social_network_zaicev'}

                        />

                        {/*<Project title={"Calculator"}*/}
                        {/*         style={calculatorImg}*/}
                        {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}*/}
                        {/*         href_first={'https://vk.com/id53738228'}*/}
                        {/*         href_second={'https://github.com/SashaZaicev/social_network_zaicev'}*/}
                        {/*/>*/}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
