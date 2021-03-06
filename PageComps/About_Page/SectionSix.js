import React from 'react'
import SectionTwo from '../Home_Page/SectionTwo'
import {SectionWrapper} from '../../Layout/SectionWrapper';
import styles from './AboutPageStyle.module.scss';
export default function SectionSix(props) {
    return (
        <>
            <SectionWrapper top={9}>
                <div className={styles.titlecon}><h1>OUR SERVICES</h1></div>
            </SectionWrapper>
            <SectionTwo {...props} />
        </>
    )
}
