import React from 'react'
import FlexColoumn from '../../Layout/FlexColoumn'
import styles from './RelatedContent.module.scss'
import RelatedContentImageCardTemplate from '../../Comps/ImageComps/RelatedContentImageCardTemplate'
export default function RelatedContent(props) {
    let {title, contents} = props
    return (
        <div className={styles.con}>
            <div className={styles.title}><h1>{title}</h1></div>
            <FlexColoumn>{
                contents.map((cnt,i) => 
                    <div className={styles.card} key={i}><RelatedContentImageCardTemplate {...cnt} key={i}/></div>
                )
            }</FlexColoumn>
        </div>
    )
}
