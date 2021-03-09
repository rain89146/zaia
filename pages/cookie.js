import React, { useEffect, useState } from 'react'
import MainLayout               from '../Layout/MainLayout'
import {ContentWrapper}         from '../Layout/SectionWrapper'
import Data                     from '../Data/CookiePolicy'
import ContentConvert           from '../PageComps/Privacy_Page/ContentConvert';
export default function cookie() {

    //  set page content
    const [PageContent, setPageContent] = useState(null);

    //  load page content
    useEffect(() => {
        setPageContent(Data());
    }, [])
    
    return (
        <MainLayout title={'Cookie Policy'}>
            <ContentWrapper>{
                (PageContent !== null) && <ContentConvert {...PageContent}/>
            }</ContentWrapper>
        </MainLayout>
    )
}
