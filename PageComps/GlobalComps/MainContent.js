import React, { Fragment } from 'react'
import Tools from '../../GlobalTools/Tools';
import styles from './MainContent.module.scss';
export default function MainContent(props) {
    //
    let {title, content} = props;

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
                            cnt = tools.parse_html(cnt);
                            return <Fragment key={i}>{cnt}</Fragment>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
