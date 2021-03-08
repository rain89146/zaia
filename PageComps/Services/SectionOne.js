import React from 'react'
import BannerImageCardTemplate from '../../Comps/ImageComps/BannerImageCardTemplate';

export default function SectionOne({contents}) {
    return (contents.map((cnt,i) => <BannerImageCardTemplate {...cnt} key={i}/>))
}
