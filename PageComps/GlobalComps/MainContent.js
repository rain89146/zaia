import React, { Fragment } from 'react'
import Tools from '../../GlobalTools/Tools';
import styles from './MainContent.module.scss';
export default function MainContent(props) {
    
    //
    const {title, content} = props;

    //
    const tools = new Tools();

    return (
        <div className={styles.con}>
            <div className={styles.titlecon}>
                <div className={styles.title}><h1>{title}</h1></div>
                <div className={styles.placeholder}></div>
            </div>
            <div className={styles.contentcon}>
                <div className={styles.placeholder}></div>
                <div className={styles.content}>
                    {
                        content.map((cnt,i) => {
                            return <Fragment key={i}>{tools.parse_html(cnt)}</Fragment>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
