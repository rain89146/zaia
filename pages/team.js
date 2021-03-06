import React, {useState, useEffect} from 'react'
import MainLayout from '../Layout/MainLayout'

import Data from '../Data/Team';
import LandscapeImageBanner from '../Comps/ImageComps/LandscapeImageBanner';
import {SectionWrapper} from '../Layout/SectionWrapper';
import PersonalInfo from '../PageComps/Team_Page/PersonalInfo';
import PersonalResume from '../PageComps/Team_Page/PersonalResume';
import PersonalProduction from '../PageComps/Team_Page/PersonalProduction';
import SectionSix from '../PageComps/About_Page/SectionSix';

export default function team() {

    //  States
    const [PageContent, setPageContent] = useState(null);

    //  On mount
    useEffect(() => {
        setPageContent(Data());
    }, [])

    //  main content
    let main = (PageContent !== null)
        ?   <>
                <LandscapeImageBanner {...PageContent.section_0.image} />
                <SectionWrapper top={6}>
                    <PersonalInfo {...PageContent.section_1}/>
                </SectionWrapper>
                <SectionWrapper top={6}>
                    <PersonalResume {...PageContent.section_2}/>
                </SectionWrapper>
                <SectionWrapper top={6}>
                    <PersonalProduction {...PageContent.section_3}/>
                </SectionWrapper>
                <SectionSix {...PageContent.section_4}/>
            </>
        :   null
    
    //  Render
    return (<MainLayout title={'ZAIA'}>{main}</MainLayout>)
}
