import React, { useState, useEffect }  from 'react'
import { useRouter } from 'next/router'

//  Data
import Data from '../../../Data/Projects'

//  Components
import MainLayout from '../../../Layout/MainLayout';
import RelatedContent from '../../../PageComps/GlobalComps/RelatedContent';
import LandscapeImageBanner from '../../../Comps/ImageComps/LandscapeImageBanner';
import ContentWithImageTitle from '../../../Comps/ContentComps/ContentWithImageTitle';
import ContentGridGallery from '../../../Comps/Gallery/ContentGridGallery';
import {SectionWrapper, MarginWrapper} from '../../../Layout/SectionWrapper';

export default function index() {

    const router = useRouter();
    const { projectid } = router.query;

    //  States
    const [PageContent, setPageContent] = useState(null);

    //  Router update
    useEffect(() => {
        if(!!projectid){
            let data = Data();
            let content = data[projectid];
            setPageContent(content);
        }
    }, [router]);
    
    //  Render
    return (
        <MainLayout title={'ZAIA'}>{
            ( !!PageContent ) &&   
            <>
                <LandscapeImageBanner {...PageContent.section_0.image}/>
                <ContentWithImageTitle {...PageContent.section_1}/>
                <ContentGridGallery {...PageContent.section_2}/>
                <MarginWrapper top={9}>
                    <RelatedContent {...PageContent.section_3}/>
                </MarginWrapper>
            </>
        }</MainLayout>
    );
}
