import React, {useState, useEffect} from 'react'
import Modal from '../../Comps/ModalComps/Modal';
import Link from 'next/link';
import styles from './CookieModal.module.scss';
export default function CookieModal(props) {
    let {showing} = props;

    //  Cookie setting view state
    const [CookieSettingOn, setCookieSettingOn] = useState(false);

    //  View switch controller
    const switchCookieSetting = () => setCookieSettingOn(!CookieSettingOn);

    //  Render
    return (
        <Modal is_open={showing} is_mini={true}>{
            (CookieSettingOn === false) 
                ?   <CookieModalComp {...props} changeView={switchCookieSetting}/>
                :   <CookieSettingModalComp {...props} changeView={switchCookieSetting}/>
        }</Modal>
    )
}

//  Cookie Modal
function CookieModalComp(props) {
    let {close, accept, changeView, pref} = props;
    return (
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.holdercon}>
                    <div className={styles.closebtn}>
                        <button onClick={()=>close()}><i className="material-icons">close</i></button>
                    </div>
                    <div className={styles.contentbody}>
                        <div className={styles.body}>
                            <div className={styles.contentcon}>
                                <div className={styles.title}>About Cookies On This Site</div>
                                <div className={styles.content}>
                                    We use cookies to personalize and enhance your experience on our site and improve the delivery of ads to you. Visit our <Link href="/cookiepolicy"><a>Cookie Policy</a></Link> to learn more. By clicking "accept", you agree to our use of cookies.
                                </div>
                            </div>
                            <div className={styles.buttonsgroup}>
                                <div className={styles.group}>
                                    <div className={styles.acceptbtn}><button onClick={()=>accept()}>Accept</button></div>
                                    <div className={styles.customlink}><button onClick={()=>changeView()}>Custiomize</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Cookie setting Modal
function CookieSettingModalComp(props) {
    let { changeView, pref, setpref } = props;

    let settings = [
        {
            slug: 'ness',
            title: 'Necessary cookies',
            desc: 'We use these cookies to help operate the site. Because these cookies are necessary, you can’t turn them off.',
            status: pref.ness
        },
        {
            slug: 'pref',
            title: 'Preferences',
            desc: 'We use these cookies to remember your preferences and improve your experience on our website.',
            status: pref.pref
        },
        {
            slug: 'perf',
            title: 'Performance & Analytics',
            desc: 'We use these cookies to collect information about how you use our site, monitor site performance, and improve our site performance and your experience.',
            status: pref.perf
        },
        {
            slug: 'mark',
            title: 'Marketing',
            desc: 'We use these cookies to deliver relevant advertising and measure the effectiveness of our advertising campaigns. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites.',
            status: pref.mark
        }
    ];

    return (
        <div className={styles.con}>
            <div className={styles.holder}>
                <div className={styles.holdercon}>
                    <div className={styles.cookiesettingcon}>
                        
                        <div className={styles.backbtn}>
                            <button onClick={()=>changeView()}>
                                <i className="material-icons">chevron_left</i>
                                Back
                            </button>
                        </div>
                        <div className={styles.contentholder}>
                            <div className={styles.titlecon}><h1>Cookie Settings</h1></div>
                            <div className={styles.prefholder}>{
                                settings.map((st,i)=>{
                                    const {title, desc, status, slug} = st;

                                    //  Toggle button class
                                    let toggle_btn_class = styles.togglebtn; 
                                        toggle_btn_class += (status) 
                                            ?   ` ${styles.on}`
                                            :   ` ${styles.off}`
                                
                                    return (
                                        <div className={styles.prefitem} key={i}>
                                            <div className={styles.container}>
                                                <div className={styles.prefcontent}>
                                                    <div className={styles.title}>{title}</div>
                                                    <div className={styles.desc}>{desc}</div>
                                                </div>
                                                <div className={styles.togglebtncon}>
                                                    <button className={toggle_btn_class} onClick={()=>setpref(slug, !status)}>
                                                        <div className={styles.ballleft}></div>
                                                        <div className={styles.ballright}></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    ) 
}