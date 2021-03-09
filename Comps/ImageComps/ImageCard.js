import React from 'react'
// import Image from 'next/image';
import styles from './ImageCard.module.scss';
import {Image, Transformation, Placeholder} from 'cloudinary-react';

export default function ImageCard(props) {

    //
    let {src, height, title, width, publicId} = props;

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

    //  Cloudinary config
    const cloudinary_setting = (!!publicId) && {
        cloudName: 'dgqsldchb',
        publicId: `${publicId}.webp`,
        crop: "fill",
        alt: title,
        loading: "lazy",
        dpr: "auto",
        responsive: true,
        width: "auto",
        responsiveUseBreakpoints: "true"
    }

    return (
        <div className={styles.imagecon} style={image_style}>
            <div className={styles.con}>
                {
                    (!!publicId) ?
                    <Image {...cloudinary_setting}>
                        <Transformation fetchFormat="auto" crop="scale" quality="auto" />
                        <Placeholder type="pixelate"></Placeholder>
                    </Image>
                    :
                    <img
                    src={src}
                    decoding="async"
                    title={title}
                    loading="lazy"
                    />
                }
            </div>
            <div className={styles.backgroundmock}></div>
        </div>
    )
}
