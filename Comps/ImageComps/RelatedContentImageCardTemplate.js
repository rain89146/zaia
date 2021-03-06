import React from 'react'
import Link from 'next/link'
import styles from './RelatedContentImageCardTemplate.module.scss'
import ImageCard from './ImageCard';
export default function RelatedContentImageCardTemplate(props) {
    let {image, text, url} = props;
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
