import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//  Data
import Data from '../../../../Data/Services'

//  
import MainLayout from '../../../../Layout/MainLayout';
import SubpageHero from '../../../../Comps/HeaderHero/SubpageHero';
import RelatedContent from '../../../../PageComps/GlobalComps/RelatedContent';
import ContentWithImage from '../../../../Comps/ContentComps/ContentWithImage';
import {MarginWrapper} from '../../../../Layout/SectionWrapper'
export default function index() {

    const router = useRouter();
    const { service, type } = router.query;

    //  States
    const [PageContent, setPageContent] = useState(null);

    //  Router update
    useEffect(() => {
        if(typeof service !== 'undefined' && typeof type !== 'undefined'){
            let data = Data();
            let content = data[service][type];
            setPageContent(content);
        }
    }, [router]);
    
    //  Main content
    let main = (PageContent !== null && typeof PageContent !== 'undefined')
        ?   <>
                <SubpageHero {...PageContent.section_0}/>
                <ContentWithImage {...PageContent.section_1}/>
                
                <MarginWrapper top={9}>
                    <RelatedContent {...PageContent.section_2}/>
                </MarginWrapper>
            </>
        :   null

    return (
        <MainLayout title={'ZAIA'}>{main}</MainLayout>
    )
}
