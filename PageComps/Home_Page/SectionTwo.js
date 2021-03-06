import React from 'react'
import ImageCardTemplate from '../../Comps/ImageComps/ImageCardTemplate'
import FlexColoumn from '../../Layout/FlexColoumn'
export default function SectionTwo(props) {
    let {contents} = props
    return (
        <div>
            <FlexColoumn>
                {
                    contents.map((cnt,i) => <ImageCardTemplate key={i} {...cnt}/>)
                }
            </FlexColoumn>
        </div>
    )
}
