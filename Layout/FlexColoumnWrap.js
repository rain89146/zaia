import React from 'react'
import styles from './FlexColoumnWrap.module.scss'
export default function FlexColoumnWrap(props) {
    return (
        <div className={styles.FlexColoumn}>{props.children}</div>
    )
}