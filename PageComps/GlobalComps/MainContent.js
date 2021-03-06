import React, { Fragment } from 'react'
import useParseHtml from '../../hooks/useParseHtml';
import styles from './MainContent.module.scss';
export default function MainContent(props) {
    let {title, content} = props;
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
                            cnt = useParseHtml(cnt);
                            return <Fragment key={i}>{cnt}</Fragment>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
