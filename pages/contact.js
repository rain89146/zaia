import React from 'react'
import MainLayout from '../Layout/MainLayout'
import AddressSection from '../PageComps/Contact_Page/AddressSection'
import {SectionWrapper} from '../Layout/SectionWrapper';
import ContactFormSectoon from '../PageComps/Contact_Page/ContactFormSectoon';
export default function contact() {
    return (
        <MainLayout title={'ZAIA'}>
            <ContactFormSectoon />
            <SectionWrapper top={9}>
                <AddressSection />
            </SectionWrapper>
        </MainLayout>
    )
}
