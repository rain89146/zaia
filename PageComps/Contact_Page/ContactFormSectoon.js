import React from 'react'
import ImageCard from '../../Comps/ImageComps/ImageCard'
import styles from './ContactPage.module.scss'
import {ContentWrapper} from '../../Layout/SectionWrapper'
import ContactUsForm from '../ContactForm/ContactUsForm'
export default function ContactFormSectoon() {

    return (
        <div className={styles.contactformsection}>
            <ContentWrapper>
                <div className={styles.contactformcon}>
                    <div className={styles.formcon}>
                        <div className={styles.titlecon}><h1>Contact</h1></div>
                        <div>
                            <ContactUsForm />
                        </div>
                    </div>
                    <div className={styles.placeholder}></div>
                </div>
            </ContentWrapper>
            <div className={styles.imagecon}>
                <ImageCard 
                    src="https://res.cloudinary.com/dgqsldchb/image/upload/v1615008011/zaia/contact/contact_flau57.jpg"
                    publicId="v1615313828/zaia/all/contact/contact_vpq6uf"    
                />
            </div>
        </div>
    )
}
