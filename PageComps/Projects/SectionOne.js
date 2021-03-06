import React from 'react'
import ImageCardProjectTemplate from '../../Comps/ImageComps/ImageCardProjectTemplate';
import FlexColoumn from '../../Layout/FlexColoumn';
export default function SectionOne(props) {
    let {contents} = props;
    return (
        <div>
            <FlexColoumn>{ contents.map((cnt, i) => <ImageCardProjectTemplate {...cnt} key={i}/> ) }</FlexColoumn>
        </div>
    )
}