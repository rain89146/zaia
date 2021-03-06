import React from 'react'
import Link from 'next/link'
import ImageCard from './ImageCard';
import styles from './ImageCardProjectTemplate.module.scss'
export default function ImageCardProjectTemplate (props) {
    let {image, text, url} = props;
    return (
        <div className={styles.con}>
            <div className={styles.holder}>
                <Link href={url}><a>{text}</a></Link>
                <div className={styles.text}>{text}</div>
                <div className={styles.dropback}></div>
                <div className={styles.imagecon}>
                    <ImageCard {...image} />
                </div>
            </div>
        </div>
    )
}