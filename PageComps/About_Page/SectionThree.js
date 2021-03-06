import React from 'react'
import GridGallery from '../../Comps/Gallery/GridGallery';
export default function SectionThree(props) {
    let {images} = props;
    return (<><GridGallery images={images}/></>)
}
