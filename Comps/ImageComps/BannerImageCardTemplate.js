import React from 'react'
import ContentLeft from '../../Layout/ContentLeft';
import ContentRight from '../../Layout/ContentRight';
import styles from './BannerImageCardTemplate.module.scss';
import ImageCard from './ImageCard';
import Link from 'next/link';

export default function BannerImageCardTemplate(props) {
    let {image, position} = props;

    let layout = (position === 'left')
        ?   <ContentLeft
                content={
                    <ContentTemplate {...props}/>
                }
            />
        :   <ContentRight
                content={
                    <ContentTemplate {...props}/>
                }
            />

    let backdrop = (position === 'left')
        ?   <div className={styles.leftbackdrop}></div>
        :   <div className={styles.rightbackdrop}></div>

    return (
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.wraper}>
                    <div className={styles.contentcon}>{layout}</div>
                    {backdrop}
                    <div className={styles.imagecon}>
                        <ImageCard {...image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentTemplate (props) {
    let {text, remark, url} = props;

    remark = (typeof remark !== 'undefined')
        ?   <div className={styles.remark}><p>{remark}</p></div>
        :   null

    return (
        <div className={styles.content}>
            <div className={styles.title}><h1>{text}</h1></div>
            {remark}
            <div className={styles.buttoncon}>
                <Link href={url}>
                    <a>learn more</a>
                </Link>
            </div>
        </div>
    )
}
