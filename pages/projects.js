import React from 'react'
import MainLayout from '../Layout/MainLayout'
import SectionOne from '../PageComps/Projects/SectionOne'

export default function projects() {
    let page_content = {
        section_0: {
            contents: [
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008140/zaia/projects/project1_ahjh4x.jpg',
                        title: 'Arcadia'
                    },
                    text: 'Arcadia',
                    url: '/projects/project1'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008136/zaia/projects/project7_jpqhpq.jpg',
                        title: 'Wellesley Ave, Los Angeles'
                    },
                    text: 'Wellesley Ave, Los Angeles',
                    url: '/projects/project2'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008139/zaia/projects/project2_yvn66j.jpg',
                        title: 'Fairhaven Ave.'
                    },
                    text: 'Fairhaven Ave.',
                    url: '/projects/project3'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008135/zaia/projects/project3_j9pvrk.jpg',
                        title: 'La Palmas Rd. Pasadena'
                    },
                    text: 'La Palmas Rd. Pasadena',
                    url: '/projects/project4'
                },

                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008139/zaia/projects/project4_coujpt.jpg',
                        title: '3rd St. Santa Monica'
                    },
                    text: '3rd St. Santa Monica',
                    url: '/projects/project5'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008139/zaia/projects/project8_zc1fes.jpg',
                        title: 'Bathroom Remodel'
                    },
                    text: 'Bathroom Remodel',
                    url: '/projects/project6'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008140/zaia/projects/project5_rklkcm.jpg',
                        title: 'Hacienda Pl'
                    },
                    text: 'Hacienda Pl',
                    url: '/projects/project7'
                },
                {
                    image: {
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008138/zaia/projects/project6_fwg55e.jpg',
                        title: 'Archwood St'
                    },
                    text: 'Archwood St',
                    url: '/projects/project8'
                }
            ]
        }
    }
    return (
        <MainLayout title={'ZAIA'}>
            <SectionOne {...page_content.section_0}/>
        </MainLayout>
    )
}
