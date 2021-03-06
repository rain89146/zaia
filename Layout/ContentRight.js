import React from 'react'
import styles from './ContentLeftRight.module.scss'
export default function ContentRight(props) {
    let {content, image} = props;
        image = (typeof image !== 'undefined') 
            ?   <div className={styles.left}>{image}</div>
            :   <div className={styles.left}></div>
    return (
        <div className={styles.cntrcon}>
            {image}
            <div className={styles.right}>{content}</div>
        </div>
    )
}
