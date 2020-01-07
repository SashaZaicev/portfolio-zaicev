import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>

            <a className='styles.link' href="#main">Главная</a>
            <a className='styles.link' href="#skills">Скилы</a>
            <a className='styles.link' href="#projects">Проекты</a>
            <a className='styles.link' href="#contacts">Контакты</a>

        </div>
    );
}

export default NavMenu;
