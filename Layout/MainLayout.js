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
    const [CookieSetting, setCookieSetting] = useState(null);

    //  When mount
    useEffect(() => {

        //  Zaia cookie
        const zaia_data = Cookies.get('zaia');
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

        //  Zaia cookie setting
        const zaia_cookie_pref = Cookies.get('zaia_cookie_setting');
        let pref_obj = ( !!zaia_cookie_pref ) 
            ?   JSON.parse(zaia_cookie_pref)
            :   {
                    id: obj.id,
                    ness: true,
                    pref: true,
                    perf: true,
                    mark: false
                };
        setCookieSetting(pref_obj);
        (!!zaia_cookie_pref === false) && Cookies.set('zaia_cookie_setting', JSON.stringify(pref_obj));
    }, []);

    //  modal control
    const closeModal = () => {
        setCookieShow(false);
        Cookies.set('zaia', JSON.stringify({
            ...ZaiaObj, 
            modal_viewed: true
        }));
    }

    //  Accept cookie
    const acceptCookie = () => {
        setCookieShow(false);
        Cookies.set('zaia', JSON.stringify({
            ...ZaiaObj,
            modal_viewed: true,
            cookie_accepted: true
        }));
    }

    //  update Cookie Setting
    const updateCookieSetting = (key, value) => {

        Cookies.set('zaia_cookie_setting', JSON.stringify({
            ...CookieSetting, [key]:value
        }))

        setCookieSetting(prev => {
            return {...prev, [key]:value}
        })
    }

    //  Render
    return (
        <Fragment>
            <Header {...props}/>
            <TopNavigation />
            <div className={styles.body}>{props.children}</div>    
            <BottomNavigation />
            {
                (CookieShow) && <CookieModal {...ZaiaObj} close={closeModal} accept={acceptCookie} showing={CookieShow} pref={CookieSetting} setpref={updateCookieSetting}/>
            }
        </Fragment>
    )
}
