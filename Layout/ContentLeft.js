import React from 'react'
import styles from './ContentLeftRight.module.scss'
export default function ContentLeft(props) {
    let {content, image} = props;
        image = (!!image) 
            ?   <div className={styles.right}>{image}</div>
            :   <div className={styles.right}></div>
    return (
        <div className={styles.cntlcon}>
            {image}
            <div className={styles.left}>{content}</div>
        </div>
    )
}
