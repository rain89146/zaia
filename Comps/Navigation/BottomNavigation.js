import React, {useState, useEffect} from 'react'
import styles from './BottomNavigation.module.scss'
import Link from 'next/link'

export default function BottomNavigation() {

    let date = new Date();
    let year = date.getFullYear();
    
    //  Page content
    let page_content = {
        sitemap: [
            {
                title: 'Services',
                list: [
                    {
                        text: 'Remodeling',
                        url: '/services/remodeling'
                    },
                    {
                        text: 'Construction',
                        url: '/services/construction'
                    },
                    {
                        text: 'Design',
                        url: '/services/design'
                    }
                ]
            },
            {
                title: 'About',
                list: [
                    {
                        text: 'Company',
                        url: '/about'
                    },
                    {
                        text: 'Our team',
                        url: '/team'
                    }
                ]
            },
            {
                title: 'Projects',
                list: [
                    {
                        text: 'Modern Style',
                        url: '/company'
                    },
                    {
                        text: 'Interior Values',
                        url: '/team'
                    },
                    {
                        text: 'Traditional Style',
                        url: '/team'
                    }
                ]
            },
            {
                title: 'Contact',
                list: [
                    {
                        text: 'Contact Us',
                        url: '/contact'
                    }
                ]
            },
            {
                title: 'Social Media',
                list: [
                    {
                        text: 'Instagram',
                        url: '/company'
                    },
                    {
                        text: 'Facebook',
                        url: '/team'
                    }
                ]
            },
        ]
    }

    return (
        <div className={styles.bottomnav}>
            <div className={styles.navcon}>

                <div className={styles.sitemap}>{
                    page_content.sitemap.map((st,i) => {
                        let {title, list} = st;
                        return (
                            <div className={styles.sitecol} key={i}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.listcon}>
                                    <ul>
                                        {
                                            list.map((ls,i) => {
                                                let {text, url} = ls;
                                                return (
                                                    <li key={i}>
                                                        <Link href={url}>
                                                            <a title={text}>{text}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }</div>

                <div className={styles.sitemapmobile}>
                    <CollapseableDrawer content={page_content.sitemap}/>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footercon}>
                        <div className={styles.disclaimer}>
                            <div className={styles.year}>© {year} ZAIA ALL RIGHTS RESERVED</div>
                            <div className={styles.rights}>
                                <div className={styles.privacy}><Link href="/privacy"><a>Privacy</a></Link></div>
                                 / 
                                <div className={styles.cookie}><Link href="/cookie"><a>Cookie Preferences</a></Link></div>
                            </div>
                        </div>
                        <div className={styles.languageoption}>
                            <div className={styles.lan}>Language:</div>
                            <div className={styles.opt}><button className={styles.selected}>EN</button></div>
                            |
                            <div className={styles.opt}><button>CN</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//  
function CollapseableDrawer({content}) {

    // console.log(content);

    //  State
    const [SitemapMenu, setSitemapMenu] = useState(null);

    //  on mount
    useEffect(() => {
        let new_map = convert_menu(content);
        setSitemapMenu(new_map);
    }, [])

    //  convert menu
    const convert_menu = (sitemap) => {
        
        let coverted = sitemap.map(cnt => {
            cnt['showing'] = false;
            return cnt;
        })
        return coverted;
    } 

    //  toggle
    const toggle = (index, showing) => {
        let newmenu = [...SitemapMenu];
        newmenu[index].showing = !showing;
        setSitemapMenu(newmenu);
    }

    return (
        <div className={styles.sitemapmobilecon}>
            <div className={styles.sitemapmobileholder}>
                {
                    (SitemapMenu !== null) && SitemapMenu.map((sm, i) => {

                        let {title, list, showing} = sm;

                        //  drawer icon
                        let icon = (showing)
                            ?   'close'
                            :   'add'
                        
                        //  drawer holder
                        let drawer = (showing == false)
                            ?   null
                            :   <div className={styles.drawer}>
                                    {
                                        list.map((ls, i) => {
                                            let {text, url} = ls;
                                            return (
                                                <div className={styles.draweritem} key={i}>
                                                    <Link href={url}>
                                                        <a>{text}</a>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        
                        return (
                            <div className={styles.sitemapitem} key={i}>
                                <button onClick={()=>toggle(i, showing)}>
                                    <div className={styles.sitemaptitle}>{title}</div>
                                    <i className="material-icons">{icon}</i>
                                </button>
                                {drawer}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}