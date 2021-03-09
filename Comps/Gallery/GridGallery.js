import styles from './GridGallery.module.scss'
import {Image, Transformation, Placeholder} from 'cloudinary-react';
export default function GridGallery({images}) {
    return (
        <div className={styles.gallery}>
            {
                images.map((img,i) => {

                    //  Cloudinary config
                    const cloudinary_setting = {
                        cloudName: 'dgqsldchb',
                        publicId: `${img.publicId}.webp`,
                        crop: "fill",
                        loading: "lazy",
                        dpr: "auto",
                        responsive: true,
                        width: "auto",
                        responsiveUseBreakpoints: "true"
                    }

                    const figure_style = styles[`gallery__item-${i+1}`];

                    return (
                        <figure className={figure_style} key={i}>
                            <Image {...cloudinary_setting} className={styles.gallery_image} alt={`img_${i}`}>
                                <Transformation fetchFormat="auto" crop="scale" quality="auto" />
                                <Placeholder type="pixelate"></Placeholder>
                            </Image>
                        </figure>
                    )
                })
            }
        </div>
    )
}
