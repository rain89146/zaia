import React, { Fragment, useEffect, useState } from 'react'
import Data from '../Data/Privacy'
import MainLayout from '../Layout/MainLayout';
import {ContentWrapper} from '../Layout/SectionWrapper'
import styles from '../PageComps/Privacy_Page/Privacy.module.scss'
import Tools from '../GlobalTools/Tools';
export default function privacy() {
    const [PageContent, setPageContent] = useState(null);

    useEffect(() => {
        setPageContent(Data());
    }, [])

    return (
        <MainLayout title={'ZAIA Privacy'}>
            <ContentWrapper>{
                (PageContent !== null) && <PrivacyContent {...PageContent}/>
            }</ContentWrapper>
        </MainLayout>
    );
}

function PrivacyContent({title, pargraphs}) {
    
    // 
    const tools = new Tools();
    
    return(
        <div className={styles.con}>
            <div className={styles.header}><h1>{title}</h1></div>
            <div className={styles.sections}>{
                pargraphs.map((ps,i) => {
                    let {contents} = ps;
                    let subtitle = ps.title;

                    subtitle = (subtitle !== undefined)
                        ?   <div className={styles.subtitle}><h3>{subtitle}</h3></div>
                        :   null;

                    contents = contents.map((cnt, i) => {
                        return <Fragment key={i}>{tools.parse_html(cnt)}</Fragment>
                    });

                    return (
                        <div className={styles.section} key={i}>
                            {subtitle}
                            <div className={styles.content}>{contents}</div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}