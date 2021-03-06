import React from 'react'
import BannerImageCardTemplate from '../../Comps/ImageComps/BannerImageCardTemplate';

export default function SectionOne(props) {
    let {contents} = props;
    return (
        <div>
            {
                contents.map((cnt,i) => <BannerImageCardTemplate {...cnt} key={i}/>)
            }
        </div>
    )
}
