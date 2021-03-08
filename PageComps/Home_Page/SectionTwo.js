import React from 'react'
import ImageCardTemplate from '../../Comps/ImageComps/ImageCardTemplate'
import FlexColoumn from '../../Layout/FlexColoumn'
export default function SectionTwo(props) {
    return (
        <>
            <FlexColoumn>
            {
                props.contents.map((cnt,i) => <ImageCardTemplate key={i} {...cnt}/>)
            }
            </FlexColoumn>
        </>
    )
}
