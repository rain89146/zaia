import React, { Fragment } from 'react'
import ImageCard from '../../Comps/ImageComps/ImageCard';
import Tools from '../../GlobalTools/Tools';
import styles from './TeamPage.module.scss'

export default function PersonalResume(props) {

    //
    let {image, subtitle, contents} = props;

    //
    const tools = new Tools();

    //
    return (
        <div className={styles.PersonalResCon}>
            <div className={styles.pr_subtitlecon}>
                <div className={styles.pr_subplaceholder}></div>
                <div className={styles.pr_subtitle}>{subtitle}</div>
            </div>
            <div className={styles.pr_contentcon}>
                <div className={styles.pr_imagecon}>
                    <div className={styles.pr_image}>
                        <ImageCard {...image}/>
                    </div>
                </div>
                <div className={styles.pr_contentholder}>
                    <div className={styles.pr_holder}>
                        {
                            contents.map((cnt,i) => {
                                cnt = tools.parse_html(cnt);
                                return <Fragment key={i}>{cnt}</Fragment>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
