import styles from './Modal.module.scss';
export default function Modal(props) {
    let {is_open, is_mini} = props;

    //  View class
    let view_class = (is_open) 
        ?   `${styles.diaglogSelf} ${styles.show}`
        :   `${styles.diaglogSelf} ${styles.hide}`;

    //  Returns nothing when is close
    if(is_open === false){ return null }

    //  modal style
    return ( is_mini === undefined) ? <RegularModal {...props} viewclass={view_class}/> : <MiniModal {...props} viewclass={view_class}/>
}

//  Regular full size modal
function RegularModal(props) {
    return (
        <>
        <div className={props.viewclass}>
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

//  Cookie small modal
function MiniModal(props) {
    return (
        <>
        <div className={props.viewclass}>
            <div className={styles.m_diaglogBack}>
                <div className={styles.m_dialogBody}>
                    <div className={styles.m_dialogCon}>
                        <section>{ props.children }</section>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}