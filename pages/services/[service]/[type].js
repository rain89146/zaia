import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//  Data
import Data from '../../../Data/Services'

//  
import MainLayout from '../../../Layout/MainLayout';
import SubpageHero from '../../../Comps/HeaderHero/SubpageHero';
import RelatedContent from '../../../PageComps/GlobalComps/RelatedContent';
import ContentWithImage from '../../../Comps/ContentComps/ContentWithImage';
import {MarginWrapper} from '../../../Layout/SectionWrapper'

export default function index(PageContent) {
    
    return (
        <MainLayout title={'ZAIA'}>{
            (!!PageContent) &&
            <>
                <SubpageHero {...PageContent.section_0}/>
                <ContentWithImage {...PageContent.section_1}/>
                <MarginWrapper top={9}>
                    <RelatedContent {...PageContent.section_2}/>
                </MarginWrapper>
            </>
        }</MainLayout>
    )
}

export const getStaticPaths = async () => {

    let data = Data();
    const paths = [];
    for(let i in data){
        for(let j in data[i]){
            let obj = {
                params: {
                    service: i,
                    type: j
                }
            }
            paths.push(obj);
        }
    }
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    let {service, type} = context.params;
    let data = Data();
    return {
        props: data[service][type]
    }
}