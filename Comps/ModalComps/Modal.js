import styles from './Modal.module.scss';
export default function Modal(props) {
    let {is_open, controlButton} = props;

    //  View class
    let view_class = (is_open) 
        ?   `${styles.diaglogSelf} ${styles.show}`
        :   `${styles.diaglogSelf} ${styles.hide}`;
    
    //  control button
        controlButton = (typeof controlButton !== 'undefined')
        ?   <div className={styles.controller}>{controlButton}</div>
        :   null;

    //  Returns nothing when is close
    if(is_open === false){ return null }

    return (
        <>
        <div className={view_class}>
            <div className={styles.diaglogBack}>
                <div className={styles.dialogBody}>
                    <div className={styles.dialogCon}>
                        <section>{ props.children }</section>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}