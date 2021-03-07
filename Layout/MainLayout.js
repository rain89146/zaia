import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import styles from './MainLayout.module.scss';
import TopNavigation from '../Comps/Navigation/TopNavigation';
import BottomNavigation from '../Comps/Navigation/BottomNavigation';
import uuid from 'react-uuid';
import Cookies from 'js-cookie';
import CookieModal from '../PageComps/Cookie_Page/CookieModal';
export default function MainLayout(props) {
    let {title} = props;

    //
    const [ZaiaObj, setZaiaObj] = useState(null);
    const [CookieShow, setCookieShow] = useState(false);

    //  When mount
    useEffect(() => {
        let zaia_data = Cookies.get('zaia');
        let obj;
        if(typeof zaia_data === 'undefined'){
            obj = {
                id: uuid(),
                modal_viewed: false,
                cookie_accepted: false
            }
            let obj_str = JSON.stringify(obj);
            Cookies.set('zaia', obj_str);

            //  initial load
            setCookieShow(true);

        }else{

            obj = JSON.parse(zaia_data);
            if(obj.modal_viewed == false && obj.cookie_accepted == false){
                setCookieShow(true);
            }
        }
        setZaiaObj(obj);
    }, []);

    //  modal control
    const closeModal = () => {
        setCookieShow(prev=> {
            return {
                ...prev, 
                modal_viewed: true
            }
        })
    }

    //  Accept cookie
    const acceptCookie = () => {
        setCookieShow(prev=> {
            return {
                ...prev,
                modal_viewed: true,
                cookie_accepted: true
            }
        })
    }

    //  Cookie modal
    let cookie_modal = (CookieShow)
        ?   <CookieModal {...ZaiaObj} close={closeModal} accept={acceptCookie} status={CookieShow}/>
        :   null

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <TopNavigation />
            <div className={styles.body}>{props.children}</div>    
            <BottomNavigation />
            {/* {cookie_modal} */}
        </Fragment>
    )
}
