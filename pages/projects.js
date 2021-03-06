import React, {useState, useEffect} from 'react'
import MainLayout from '../Layout/MainLayout'
import SectionOne from '../PageComps/Projects/SectionOne'
import Data from '../Data/Projects';
export default function projects() {

    //  States
    const [PageContent, setPageContent] = useState(null);

    //  On mount
    useEffect(() => {
        setPageContent(Data());
    }, [])

    //  Main content
    let main = (PageContent !== null) 
        ?   <SectionOne {...PageContent.project_list}/>
        :   null;

    //  Render
    return (<MainLayout title={'ZAIA'}>{main}</MainLayout>)
}
