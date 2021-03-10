import React, { Fragment, useEffect, useState } from 'react'
import Tools from '../../GlobalTools/Tools';
import ContactForm from '../../PageComps/ContactForm/ContactForm';
import ImageCard from '../ImageComps/ImageCard';
import Modal from '../ModalComps/Modal';
import styles from './ContentWithImage.module.scss';
import {Image, Transformation, Placeholder} from 'cloudinary-react';

export default function ContentWithImage({contents}) {
    //  
    const [ModalShow, setModalShow] = useState(false);

    //  Modal control
    const ModalControl = () => setModalShow(!ModalShow);

    //  
    const tools = new Tools();
    
    return (
        <>
        <div className={styles.con}>
            {
                contents.map((cnt, i) => {

                    let {image, title, subtitle, images} = cnt;
                    let content = cnt.contents;

                    //  Main title
                    title = (!! title ) && <div className={styles.maintitle}><h1>{title}</h1></div>;

                    //  Subtitle
                    subtitle = (!!subtitle) && <div className={styles.subtitle}><h5>{subtitle}</h5></div>;

                    //  Content list
                    content = (!!content) && (
                        <div className={styles.contentholder}>{
                            content.map((el,i) => {
                                return (
                                    <Fragment key={i}>{
                                        tools.parse_html(el)
                                    }</Fragment>
                                )
                            })
                        }</div>
                    )
                    
                    //  Right side image
                    image = <div className={styles.imageholder}><ImageCard {...image} /></div>;

                    //  Images
                    images = (!!images) && (
                        <div className={styles.mobilimages}>
                            <div className={styles.mb_imgcon}>
                                {
                                    images.map((img,i)=> {
                                        return <div className={styles.mb_img} key={i}><ContentImageCard {...img}/></div>   
                                    })
                                }
                            </div>
                        </div>
                    )

                    //  contact us button
                    const contact_us = <div className={styles.buttoncon}><button onClick={()=>ModalControl()}><div className={styles.text}>contact us</div></button><div className={styles.btnplaceholder}></div></div>
                    
                    return (
                        <>
                        <div className={styles.content_item} key={i}>
                            <div className={styles.contentcon}>
                                {title}
                                {subtitle}
                                {content}
                                {contact_us}
                                {images}
                            </div>
                            <div className={styles.imagecon}>{image}</div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <Modal is_open={ModalShow}>
            <ContactForm control={ModalControl}/>
        </Modal>
        </>
    )
}

//  Content image card
function ContentImageCard({ title, publicId } ) {

    //  Cloudinary config
    const cloudinary_setting = (!!publicId) && {
        cloudName: 'dgqsldchb',
        publicId: `${publicId}.webp`,
        crop: "fill",
        alt: title,
        dpr: "auto",
        responsive: true,
        width: "auto",
        responsiveUseBreakpoints: "true"
    }

    return (
        <div className={styles.ContentImageCard}>
            <Image {...cloudinary_setting}>
                <Transformation fetchFormat="auto" crop="scale" quality="auto" />
                <Placeholder type="blur"></Placeholder>
            </Image>
        </div>
    )
}