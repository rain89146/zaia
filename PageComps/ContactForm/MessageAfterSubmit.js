import styles from './ContactForm.module.scss'

//  Message after sumbition
export default function MessageAfterSubmit(props) {
    let {status, success, failed} = props;
    switch (status) {
        case true:
            return (
                <div className={styles.messagecon}>
                    <div className={styles.titlecon}><h1>Thank you</h1></div>
                    <div className={styles.message}>Thank you, submittion successfully</div>
                    <button className={styles.successbtn} onClick={()=>success()}>Close</button>    
                </div>
            )
        case false:
            return (
                <div className={styles.messagecon}>
                    <div className={styles.titlecon}><h1>We are sorry</h1></div>
                    <div className={styles.message}>We're sorry, submiition failed</div>
                    <button className={styles.failedbtn} onClick={()=>failed()}>try again</button>
                </div>
            )
        default:
            return  null;
    }
}