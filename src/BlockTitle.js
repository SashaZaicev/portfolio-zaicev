import React from 'react';
import styles from './BlockTitle.module.css';

function BlockTitle (props) {
return (
    <div className={styles.blockTitle}>
        {props.title}
    </div>
)



}

export default BlockTitle;
