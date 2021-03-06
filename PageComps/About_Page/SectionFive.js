import React from 'react'
import ImageCard from '../../Comps/ImageComps/ImageCard';
import FlexColoumnWrap from '../../Layout/FlexColoumnWrap';
import styles from './SectionFive.module.scss'
export default function SectionFive(props) {
    return (
        <div className={styles.con}>
            <FlexColoumnWrap>
                {
                    props.logos.map((lg,i) => {
                        return (
                            <div className={styles.logo} key={i}>
                                <ImageCard {...lg} />
                            </div>
                        )
                    })
                }
            </FlexColoumnWrap>
        </div>
    )
}
