import React from 'react'
import styles from './FlexColoumn.module.scss'
export default function FlexColoumn(props) {
    return (
        <div className={styles.FlexColoumn}>{props.children}</div>
    )
}
