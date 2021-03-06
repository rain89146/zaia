import React from 'react'
import ImageCard from './ImageCard'
import Link from 'next/link'
import styles from './ImageCardTemplate.module.scss'

export default function ImageCardTemplate(props) {
    let {text, url, image} = props;
    return (
        <div className={styles.imagecard}>
            <div className={styles.con}>
                <Link href={url}><a title={text}>{text}</a></Link>
                <div className={styles.content}>
                    <h1>{text}</h1>
                </div>
                <div className={styles.imageholder}>
                    <ImageCard {...image}/>
                </div>
            </div>
        </div>
    )
}
