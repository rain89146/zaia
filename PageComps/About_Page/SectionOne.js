import React, {useState} from 'react'
import MainContent from '../GlobalComps/MainContent';
import Link from 'next/link';
import styles from './SectionOne.module.scss'
import Modal from '../../Comps/ModalComps/Modal';
import ContactForm from '../ContactForm/ContactForm';
export default function SectionOne(props) {

    //  
    const [ModalShow, setModalShow] = useState(false);

    //  Modal control
    const ModalControl = () => setModalShow(!ModalShow);
    
    return (
        <>
            <MainContent {...props}/>
            <div className={styles.con}>
                <div className={styles.placeholder}></div>
                <div className={styles.btngroup}>
                    <div className={styles.btn}>
                        <button onClick={()=>ModalControl()}>
                            <div>contact us</div>
                        </button>
                    </div>
                    <div className={styles.btn}>
                        <Link href="/projects">
                            <a>View our projects </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Modal is_open={ModalShow}>
                <ContactForm control={ModalControl}/>
            </Modal>
        </>
    )
}
