import React, { Fragment, useState } from 'react'
import ImageCard from '../ImageComps/ImageCard';
import styles from './ContentWithImageTitle.module.scss';
import Modal from '../../Comps/ModalComps/Modal'
import ContactForm from '../../PageComps/ContactForm/ContactForm';
import Tools from '../../GlobalTools/Tools';
export default function ContentWithImageTitle(props) {

    //  
    const [ModalShow, setModalShow] = useState(false);

    //
    let {contents, image, title} = props;

    //  
    const tools = new Tools();

    //  Contents
    contents = (typeof contents !== 'undefined')
        ?   <div className={styles.content}>
            {
                contents.map((cnt,i) => {
                    return <Fragment key={i}>{tools.parse_html(cnt)}</Fragment>
                })
            }
            </div>
        :   null;

    //  Modal control
    const ModalControl = () => setModalShow(!ModalShow);

    //  button con
    const buttoncon = <div className={styles.button}><button onClick={()=>ModalControl()}><div className={styles.text}>contact us</div></button></div>

    return (
        <>
        <div className={styles.con}>
            <div className={styles.title}><h1>{title}</h1></div>
            <div className={styles.contentcon}>
                <div className={styles.holder}>
                    <div className={styles.contentholder}>
                        <div className={styles.deco}></div>
                        {contents}
                        {buttoncon}
                    </div>
                    <div className={styles.placeholder}></div>
                </div>
                <div className={styles.imagecon}>
                    <div className={styles.imageholder}>
                        <ImageCard {...image}/>
                    </div>
                </div>
            </div>
        </div>
        <Modal is_open={ModalShow}>
            <ContactForm control={ModalControl}/>
        </Modal>
        </>
    )
}