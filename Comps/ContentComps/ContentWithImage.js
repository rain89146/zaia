import React, { Fragment, useEffect, useState } from 'react'
import useParseHtml from '../../hooks/useParseHtml';
import ContactForm from '../../PageComps/ContactForm/ContactForm';
import ImageCard from '../ImageComps/ImageCard';
import Modal from '../ModalComps/Modal';
import styles from './ContentWithImage.module.scss';

export default function ContentWithImage(props) {
    //  
    const [ModalShow, setModalShow] = useState(false);
    
    let {contents} = props;
    
    return (
        <div className={styles.con}>
            {
                contents.map((cnt, i) => {
                    let {image, title, subtitle, images} = cnt;
                    let content = cnt.contents;

                    //  Main title
                    title = (typeof title !== 'undefined' && title !== '') 
                        ?   <div className={styles.maintitle}><h1>{title}</h1></div>
                        :   null;

                    //  Subtitle
                    subtitle = (typeof subtitle !== 'undefined' && subtitle !== '')
                        ?   <div className={styles.subtitle}><h5>{subtitle}</h5></div>
                        :   null;

                    //  Content list
                    content = (typeof content !== 'undefined') 
                        ?   <div className={styles.contentholder}>{
                                content.map((el,i) => {
                                    let item = useParseHtml(el);
                                    return (<Fragment key={i}>{item}</Fragment>)
                                })
                            }</div>
                        :   null;
                    
                    //  Right side image
                    image = <div className={styles.imageholder}><ImageCard {...image} /></div>;

                    //  Images
                    images = (typeof images !== 'undefined') 
                        ?   <div className={styles.mobilimages}>
                                <div className={styles.mb_imgcon}>
                                    {
                                        images.map((img,i)=> {
                                            return <div className={styles.mb_img} key={i}><ContentImageCard {...img}/></div>   
                                        })
                                    }
                                </div>
                            </div>
                        :   null;

                    //  Modal control
                    const ModalControl = () => setModalShow(!ModalShow);

                    //  contact us button
                    let contact_us = <div className={styles.buttoncon}><button onClick={()=>ModalControl()}><div className={styles.text}>contact us</div></button><div className={styles.btnplaceholder}></div></div>
                    
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
                        <Modal is_open={ModalShow}>
                            <ContactForm control={ModalControl}/>
                        </Modal>
                        </>
                    )
                })
            }
        </div>
    )
}

//  Content image card
function ContentImageCard(props) {
    let {src, title} = props;

    const [ImageWidth, setImageWidth] = useState(0);
    const [ImageHeight, setImageHeight] = useState(0);

    //  When image load
    const ImageOnLoad = ({target:img}) => {

        let viewport_width = img.offsetWidth;
        let image_width = img.naturalWidth;
        let ratio = viewport_width / image_width;

        setImageHeight(img.naturalHeight * ratio);
        setImageWidth(viewport_width);
    }

    //  Set image style
    let image_style = (ImageWidth !== 0 ) 
        ?   {width: ImageWidth, height: ImageHeight, position: 'relative'}
        :   null;

    return (
        <div className={styles.ContentImageCard} style={image_style}>
            <div className={styles.con}>
                <img 
                    src = {src}
                    decoding="async"
                    title={title}
                    loading="lazy"
                    onLoad={ImageOnLoad}
                />
            </div>
            <div className={styles.backgroundmock}></div>
        </div>
    )
}