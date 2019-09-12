import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>

            <a className='styles.link' href="">Главная</a>
            <a className='styles.link' href="">Скилы</a>
            <a className='styles.link' href="">Проекты</a>
            <a className='styles.link' href="#contacts">Контакты</a>

        </div>
    );
}

export default NavMenu;
