import React from 'react'
import ImageCard from './ImageCard';
import styles from './LandScapeImageCardTemplate.module.scss'
export default function LandScapeImageCardTemplate(props) {
    let {image, dropback} = props;

    dropback = (typeof dropback == 'undefined' || dropback == true)
        ?   <div className={styles.dropback}></div>
        :   null;

    return(
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.content}>{props.children}</div>
                {dropback}
                <div className={styles.imagecon}>
                    <ImageCard {...image}/>
                </div>
            </div>
        </div>
    )
}
