import React, { Fragment } from 'react'
import Tools from '../../GlobalTools/Tools';
import styles from './TeamPage.module.scss'

export default function PersonalProduction(props) {

    //
    let {subtitle, contents} = props;

    //  get tools bag
    const tools = new Tools();

    return (
        <div className={styles.PersonalProCon}>
            <div className={styles.pr_teamesubtitle}>{subtitle}</div>
            <div className={styles.prcontentcon}>{
                contents.map((cnt,i)=>{
                    cnt = tools.parse_html(cnt);
                    return <Fragment key={i}>{cnt}</Fragment>
                })
            }</div>
        </div>
    )
}
