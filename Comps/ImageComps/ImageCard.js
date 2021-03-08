import React from 'react'
// import Image from 'next/image';
import styles from './ImageCard.module.scss'

export default function ImageCard(props) {

    //
    let {src, height, title, width} = props;

    //  Assign height
    height = (!!height) 
        ?   `${height}px`
        :   '100%';

    //  Assign witdh
    width = (!!width)
        ?   `${width}px`
        :   '100%';

    //  generate style
    const image_style = {width, height, position: 'relative'}

    return (
        <div className={styles.imagecon} style={image_style}>
            <div className={styles.con}>
                <img
                    src={src}
                    decoding="async"
                    title={title}
                    loading="lazy"
                />
            </div>
            <div className={styles.backgroundmock}></div>
            {/* <Image
                src = {src}
                title= {title}
                quality= {60}
                loading= 'lazy'
                layout='fill'
            /> */}
        </div>
    )
}
