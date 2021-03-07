import React, { Fragment, useState, useEffect } from 'react'
import styles from './MainLayout.module.scss';
import TopNavigation from '../Comps/Navigation/TopNavigation';
import BottomNavigation from '../Comps/Navigation/BottomNavigation';
import uuid from 'react-uuid';
import Cookies from 'js-cookie';
import CookieModal from '../PageComps/Cookie_Page/CookieModal';
import Header from '../PageComps/HeaderComps/Header';
export default function MainLayout(props) {

    //  States
    const [ZaiaObj, setZaiaObj] = useState(null);
    const [CookieShow, setCookieShow] = useState(false);

    //  When mount
    useEffect(() => {
        let zaia_data = Cookies.get('zaia');
        let obj = {};
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
        setCookieShow(false);
        let obj_str = JSON.stringify({
            ...ZaiaObj, 
            modal_viewed: true
        });
        Cookies.set('zaia', obj_str);
    }

    //  Accept cookie
    const acceptCookie = () => {
        setCookieShow(false);
        let obj_str = JSON.stringify({
            ...ZaiaObj,
            modal_viewed: true,
            cookie_accepted: true
        });
        Cookies.set('zaia', obj_str);
    }

    //  Render
    return (
        <Fragment>
            <Header {...props}/>
            <TopNavigation />
            <div className={styles.body}>{props.children}</div>    
            <BottomNavigation />
            {
                (CookieShow) && <CookieModal {...ZaiaObj} close={closeModal} accept={acceptCookie} showing={CookieShow}/>
            }
        </Fragment>
    )
}
