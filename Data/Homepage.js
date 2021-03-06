export default function Homepage() {
    return {
        section_1: {
            text: '专业，筑就非凡生活',
            logo: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1614997736/zaia/home/lglogo_y5d2ca.png',
            image: {
                src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008096/zaia/home/main_rnjl58.jpg',
                title: 'Zaia'
            }
        },
        section_2: {
            contents: [
                {
                    text: 'remodeling',
                    url: '/services/remodeling',
                    image:{
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008099/zaia/home/remodeling_hubti5.jpg',
                        title: 'remodeling'
                    }
                },
                {
                    text: 'construction',
                    url: '/services/construction',
                    image:{
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008098/zaia/home/construction_gf0alm.jpg',
                        title: 'construction'
                    }
                },
                {
                    text: 'design',
                    url: '/services/design',
                    image:{
                        src: 'https://res.cloudinary.com/dgqsldchb/image/upload/v1615008096/zaia/home/design_uknycq.jpg',
                        title: 'design'
                    }
                }
            ]
        }
    }
}
