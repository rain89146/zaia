import React, { Fragment } from 'react'
import Tools from '../../GlobalTools/Tools';
import styles from './Privacy.module.scss'
export default function ContentConvert({title, pargraphs}) {
    const tools = new Tools();    
    return(
        <div className={styles.con}>
            <div className={styles.header}><h1>{title}</h1></div>
            <div className={styles.sections}>{
                pargraphs.map((ps,i) => {

                    //
                    let {contents} = ps;
                    let subtitle = ps.title;
                    
                    //  Content list, parse all the tag into jsx
                    contents = contents.map((cnt, i) => {
                        return <Fragment key={i}>{tools.parse_html(cnt)}</Fragment>
                    });

                    return (
                        <div className={styles.section} key={i}>
                            {(!!subtitle) && <div className={styles.subtitle}><h3>{subtitle}</h3></div>}
                            <div className={styles.content}>{contents}</div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}
