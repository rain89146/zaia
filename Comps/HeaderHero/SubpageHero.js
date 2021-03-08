import React from 'react'
import ImageCard from '../ImageComps/ImageCard';
import styles from './SubpageHero.module.scss'
export default function SubpageHero(props) {
    const {image, text} = props;
    return (
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.contentcon}>
                    <div className={styles.contentholder}>
                        <div className={styles.content}>
                            <div className={styles.wrapper}>
                                <h1>{text}</h1>
                            </div>
                            <div className={styles.deco}>
                                <div className={styles.box}>
                                    <div className={styles.top}></div>
                                    <div className={styles.bottom}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.placeholder}></div>
                    </div>
                </div>
                <div className={styles.imagecon}>
                    <ImageCard {...image} />
                </div>
            </div>
        </div>
    )
}
