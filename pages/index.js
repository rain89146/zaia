import React, {useState, useEffect} from 'react'
import MainLayout from '../Layout/MainLayout'
import SectionTwo from '../PageComps/Home_Page/SectionTwo';
import SectionOne from '../PageComps/Home_Page/SectionOne';

//  Data
import Data from '../Data/Homepage'

export default function index() {

    //  States
    const [PageContent, setPageContent] = useState(null);
    
    //  On mount
    useEffect(() => {
        setPageContent(Data());
    }, [])

    //  Content
    let main = (PageContent !== null) 
        ?   <>
                <SectionOne {...PageContent.section_1}/>
                <SectionTwo {...PageContent.section_2}/>
            </>
        :   null

    //  Render
    return (<MainLayout title={'ZAIA'}>{main}</MainLayout>)
}
