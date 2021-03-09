import { useEffect, useState }  from 'react'
import MainLayout               from '../Layout/MainLayout';
import {ContentWrapper}         from '../Layout/SectionWrapper'
import ContentConvert           from '../PageComps/Privacy_Page/ContentConvert'
import Data                     from '../Data/Privacy'
export default function privacy() {

    //  set page content
    const [PageContent, setPageContent] = useState(null);

    //  load page content
    useEffect(() => {
        setPageContent(Data());
    }, [])

    return (
        <MainLayout title={'ZAIA Privacy'}>
            <ContentWrapper>{
                (PageContent !== null) && <ContentConvert {...PageContent}/>
            }</ContentWrapper>
        </MainLayout>
    );
}