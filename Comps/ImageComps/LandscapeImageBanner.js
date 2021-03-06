import React from 'react'
import ImageCard from './ImageCard'
import styles from './LandscapeImageBanner.module.scss'
export default function LandscapeImageBanner(props) {
    return (<div className={styles.con}><ImageCard {...props}/></div>)
}
