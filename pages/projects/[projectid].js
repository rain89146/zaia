//  Data
import Data from '../../Data/ProjectList'

//  Components
import MainLayout from '../../Layout/MainLayout';
import RelatedContent from '../../PageComps/GlobalComps/RelatedContent';
import LandscapeImageBanner from '../../Comps/ImageComps/LandscapeImageBanner';
import ContentWithImageTitle from '../../Comps/ContentComps/ContentWithImageTitle';
import ContentGridGallery from '../../Comps/Gallery/ContentGridGallery';
import {MarginWrapper} from '../../Layout/SectionWrapper';

export default function index(PageContent) {
    
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

//  Server side rendering
export const getStaticPaths = async () => {
    // Return a list of possible value for id
    let data = Data();

    //  Generate path
    const paths = [];
    for(let i in data) {
        let obj = {
            params: {
                projectid: i.toString()
            }
        }
        paths.push(obj);
    }

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    let id = context.params.projectid; 
    let data = Data();
    return{
        props: data[id],
    }
}