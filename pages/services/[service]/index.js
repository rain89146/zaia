import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//  Data
import Data from '../../../Data/Services'

//  Components
import SubpageHero from '../../../Comps/HeaderHero/SubpageHero';
import MainLayout from '../../../Layout/MainLayout'
import RelatedContent from '../../../PageComps/GlobalComps/RelatedContent'
import SectionOne from '../../../PageComps/Services/SectionOne'
import {MarginWrapper} from '../../../Layout/SectionWrapper'

export default function index() {

    const router = useRouter();
    const { service } = router.query;

    //  States
    const [PageContent, setPageContent] = useState(null);

    //  Router update
    useEffect(() => {
        if(!!service) {
            let data = Data();
            let content = data[service][service];
            setPageContent(content);
        }
    }, [router]);

    //  Render
    return (
        <MainLayout title={'ZAIA'}>{
            ( !!PageContent ) &&
            <>
                <SubpageHero {...PageContent.section_0} />
                <SectionOne {...PageContent.section_1} />
                <MarginWrapper top={9}>
                    <RelatedContent {...PageContent.section_2}/>
                </MarginWrapper>
            </>
        }</MainLayout>
    )
}
