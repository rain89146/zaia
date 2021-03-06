import React from 'react'
import styles from './GridGallery.module.scss'
export default function GridGallery({images}) {
    return (
        <div className={styles.gallery}>
            {
                images.map((img,i) => {
                    let figure_style = styles[`gallery__item-${i+1}`];
                    return (
                        <figure className={figure_style} key={i}>
                            <img src={img.src} className={styles.gallery_image} alt={`img_${i}`}/>
                        </figure>
                    )
                })
            }
        </div>
    )
}
