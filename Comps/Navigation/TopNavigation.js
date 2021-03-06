import React, {useState} from 'react'
import styles from './TopNavigation.module.scss'
import Link from 'next/link'
import Modal from '../ModalComps/Modal'
import MobileMenu from './MobileMenu';

export default function TopNavigation() {

    const [ModalShowing, setModalShowing] = useState(false);

    //  Navigation
    let nav_context = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Services',
            submenu: [
                {
                    title: 'Remodeling',
                    url: '/services/remodeling'
                },
                {
                    title: 'Construction',
                    url: '/services/construction'
                },
                {
                    title: 'Design',
                    url: '/services/design'
                }
            ]
        },
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Projects',
            url: '/projects'
        },
        {
            title: 'Our team ',
            url: '/team'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
    ];

    //  Site logo
    let logobkg = {backgroundImage: `url('https://res.cloudinary.com/dgqsldchb/image/upload/v1614997761/zaia/logos/logo_gro8on.png')`}

    //  Modal control
    const ModalControl = () => setModalShowing(!ModalShowing);

    return (
        <>
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.menus}>
                    <div className={styles.menucon}>
                        <ul>
                            {
                                nav_context.map((nav,i) => {
                                    let {submenu} = nav;

                                    let menu_item = (typeof submenu !== 'undefined')
                                        ?   <SubMenuTab {...nav}/>
                                        :   <MainMenuTab {...nav}/>

                                    return (
                                        <li key={i}>{menu_item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.logocon}>
                    <div className={styles.iconcon}><div className={styles.icon} style={logobkg}></div></div>
                </div>
            </div>
        </div>
        <div className={styles.mobilemenu}>
            <div className={styles.menucon}>
                <button className={styles.menubtn} onClick={()=>ModalControl()}>
                    <div className={styles.burger}>
                        <div className={styles.bam}></div>
                        <div className={styles.bam}></div>
                        <div className={styles.bam}></div>
                    </div>
                </button>
                <div className={styles.logo}>
                    <div className={styles.icon} style={logobkg}></div>
                </div>
            </div>
        </div>
        <Modal is_open={ModalShowing}>
            <MobileMenu 
                control={ModalControl}
                content={nav_context}
            />
        </Modal>
    </>
    )
}

//  Sub menu tab
function SubMenuTab(props) {
    let {title, submenu} = props;
    return (
        <>
        <div className={styles.menutab}><h5 title={title}>{title}</h5></div>
        <div className={styles.submenu}>
            <div className={styles.submenucon}>
                <ul>
                {
                    submenu.map((sb, i) => {
                        let {title, url} = sb;
                        return (
                            <li key={i}>
                                <Link href={url}><a title={title}>{title}</a></Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        </>
    )
}

//  Main menu tab
function MainMenuTab(props) {
    let {title, url} = props;
    return(
        <>
        <div className={styles.menutab}><Link href={url}><a title={title}>{title}</a></Link></div>
        </>
    )
}
