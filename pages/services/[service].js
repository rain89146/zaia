//  Data
import Data from '../../Data/Services'

//  Components
import SubpageHero from '../../Comps/HeaderHero/SubpageHero';
import MainLayout from '../../Layout/MainLayout'
import RelatedContent from '../../PageComps/GlobalComps/RelatedContent'
import SectionOne from '../../PageComps/Services/SectionOne'
import {MarginWrapper} from '../../Layout/SectionWrapper'

export default function index(PageContent) {

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

//  Export the path
export const getStaticPaths = async () => {

    let data = Data();

    //  generate path
    const paths = [];
    for(let i in data){
        let obj = {
            params : {
                service: i.toString()
            }
        }
        paths.push(obj)
    }

    return {
        paths,
        fallback: false
    }
}

//  Export the static properties
export const getStaticProps = async (context) => {
    let id = context.params.service;
    let data = Data();
    return {
        props: data[id][id]
    }
}