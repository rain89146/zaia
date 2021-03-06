import React, { Fragment } from 'react'
import useParseHtml from '../../hooks/useParseHtml';
import styles from './TeamPage.module.scss'

export default function PersonalProduction(props) {
    console.log(props);
    let {subtitle,contents} = props;
    return (
        <div className={styles.PersonalProCon}>
            <div className={styles.pr_teamesubtitle}>{subtitle}</div>
            <div className={styles.prcontentcon}>{
                contents.map((cnt,i)=>{
                    cnt = useParseHtml(cnt);
                    return <Fragment key={i}>{cnt}</Fragment>
                })
            }</div>
        </div>
    )
}
