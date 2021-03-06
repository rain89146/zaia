import React, {useState, useEffect} from 'react';
import MainLayout from '../Layout/MainLayout';
import data from '../Data/About';

import SectionZero from '../PageComps/About_Page/SectionZero';
import SectionOne from '../PageComps/About_Page/SectionOne';
import SectionTwo from '../PageComps/About_Page/SectionTwo';
import SectionThree from '../PageComps/About_Page/SectionThree';
import SectionFour from '../PageComps/About_Page/SectionFour';
import SectionFive from '../PageComps/About_Page/SectionFive';
import SectionSix from '../PageComps/About_Page/SectionSix';
import {SectionWrapper, MarginWrapper} from '../Layout/SectionWrapper';
import MainContent from '../PageComps/GlobalComps/MainContent';

export default function about() {

    //  set state
    const [PageContent, setPageContent] = useState(null);
    
    //  on mount
    useEffect(() => {
        setPageContent(data())
    }, [])

    //  main content
    let main = (PageContent !== null)
        ?   <>
                <SectionZero {...PageContent.section_0}/>
                <SectionWrapper top={6}>
                    <SectionOne {...PageContent.section_1}/>
                </SectionWrapper>
                <SectionWrapper top={9}>
                    <SectionTwo {...PageContent.section_2}/>
                </SectionWrapper>
                <MarginWrapper top={3}>
                    <SectionThree {...PageContent.section_3}/>
                </MarginWrapper>
                <SectionWrapper top={9}>
                    <MainContent {...PageContent.section_4}/>
                </SectionWrapper>
                <MarginWrapper top={3}>
                    <SectionFive {...PageContent.section_5}/>
                </MarginWrapper>
                <SectionSix {...PageContent.section_6}/>
            </>
        :   null

    return (<MainLayout title={'ZAIA'}>{main}</MainLayout>);
}
