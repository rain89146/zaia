import React from 'react'
import Modal from '../../Comps/ModalComps/Modal';
import Link from 'next/link';
import styles from './CookieModal.module.scss';
export default function CookieModal(props) {
    let {id, modal_viewed, cookie_accepted, close, accept, showing} = props;
    console.log(props);
    return (
        <Modal is_open={showing} is_mini={true}>
            <div className={styles.con}>
                <div className={styles.holder}>
                    <div className={styles.holdercon}>
                        <div className={styles.closebtn}>
                            <button onClick={()=>close()}><i className="material-icons">close</i></button>
                        </div>
                        <div className={styles.contentbody}>
                            <div className={styles.body}>
                                <div className={styles.contentcon}>
                                    <div className={styles.logocon}></div>
                                    <div className={styles.title}>About Cookies On This Site</div>
                                    <div className={styles.content}>
                                        We use cookies to personalize and enhance your experience on our site and improve the delivery of ads to you. Visit our <Link href="/cookiepolicy"><a>Cookie Policy</a></Link> to learn more. By clicking "accept", you agree to our use of cookies.
                                    </div>
                                </div>
                                <div className={styles.buttonsgroup}>
                                    <div className={styles.group}>
                                        <div className={styles.acceptbtn}><button onClick={()=>accept()}>Accept</button></div>
                                        <div className={styles.customlink}><Link href="/cookiecustomize"><a>Custiomise</a></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
