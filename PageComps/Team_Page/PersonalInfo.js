import React, { Fragment, useState } from 'react'
import ImageCard from '../../Comps/ImageComps/ImageCard';
import Modal from '../../Comps/ModalComps/Modal';
import Tools from '../../GlobalTools/Tools';
import ContactForm from '../ContactForm/ContactForm';
import styles from './TeamPage.module.scss'

export default function PersonalInfo(props) {

    //  State
    const [ModalShowing, setModalShowing] = useState(false);

    //  
    const {title, subtitle, image, contents} = props;

    //  Modal control
    const ModalControl = () => setModalShowing(!ModalShowing);

    //  get tools bag
    const tools = new Tools();

    return (
        <>
        <div className={styles.PersonalInfoCon}>
            <div className={styles.p_titlecon}><h1>{title}</h1></div>
            <div className={styles.p_contentholder}>
                <div className={styles.p_contentcon}>
                    <div className={styles.p_subtitlecon}>
                        <div className={styles.p_subtitleplaceholder}></div>
                        <div className={styles.p_subtitle}>{subtitle}</div>
                    </div>
                    <div className={styles.p_content}>{
                        contents.map((cnt,i) => {
                            cnt = tools.parse_html(cnt)
                            return <Fragment key={i}>{cnt}</Fragment>
                        })
                    }</div>
                    <div className={styles.p_buttoncon}>
                        <button onClick={()=>ModalControl()}>contact us</button>
                    </div>
                </div>
                <div className={styles.p_imagecon}>
                    <div className={styles.image}>
                        <ImageCard {...image}/>
                    </div>
                </div>
            </div>
        </div>
        <Modal is_open={ModalShowing}>
            <ContactForm control={ModalControl}/>
        </Modal>
        </>
    )
}
