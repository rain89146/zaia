import React from 'react'
import SvgIcon from '../Svgs/Home_Page/FourOhFour'
import styles from '../PageComps/FourOhFour/FourOhFour.module.scss'
import Link from 'next/link'
import MainLayout from '../Layout/MainLayout'
import {ContentWrapper} from '../Layout/SectionWrapper'
export default function FourOhFour() {
    return (
        <MainLayout title={'ZAIA'}>
            <ContentWrapper>
                <div className={styles.con}>
                    <div className={styles.right}><SvgIcon /></div>
                    <div className={styles.left}>
                        <div className={styles.title}><h1>404</h1></div>
                        <div className={styles.remark}>page not found</div>
                        <div className={styles.desc}>We are sorry, but the page you requested was not found.</div>
                        <div className={styles.btnholder}>
                            <Link href="/"><a>{'back to home'}</a></Link>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    )
}
