import React, {useState, useEffect, Fragment} from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';

export default function MobileMenu(props) {
    const {control, content} = props;

    //  Menu state
    const [MenuState, setMenuState] = useState(null);

    //  on mount
    useEffect(() => {
        let menustate = convert_menu(content);
        setMenuState(menustate);
    }, []);

    //  Toggle submenu
    const menu_toggle = (index, showing) => {
        let newmenu = [...MenuState];
        newmenu[index].showing = !showing;
        setMenuState(newmenu);
    }

    //  Convert menu
    const convert_menu = (content) => {
        return content.map((mn, i) => {
            const {submenu} = mn;
            if(typeof submenu !== 'undefined'){
                mn['showing'] = false;
                return mn;
            }
            return mn;
        })
    }

    //  Render
    return (
        <div className={styles.mobilemenu}>
            <div className={styles.innerbody}>
                <div className={styles.controller}>
                    <button onClick={()=>control()}>
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <div className={styles.menucon}>
                    <div className={styles.logocon}>
                        <div className={styles.logo}>
                            <img src="https://res.cloudinary.com/dgqsldchb/image/upload/v1614997736/zaia/home/lglogo_y5d2ca.png" width={55} title={'Zaia'}/>
                        </div>
                    </div>
                    <div className={styles.menuholder}>
                        {
                            (MenuState !== null) && MenuState.map((ms,i)=>{

                                let menu_tab = (typeof ms.submenu !== 'undefined')
                                    ?   <SubMenuTab {...ms} toggle={menu_toggle} index={i}/>
                                    :   <MainMenuTab {...ms}/>

                                return (<Fragment key={i}>{menu_tab}</Fragment>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Sub menu tab
function SubMenuTab(props) {
    let {title, showing, submenu, toggle, index} = props;

    //  drawer icon
    let icon = (showing) 
        ?   'keyboard_arrow_up'
        :   'keyboard_arrow_down';

    //  Submenu holder
    submenu = (showing == false)
        ?   null
        :   <div className={styles.submenuholder}>
                {
                    submenu.map((sb,i)=> {
                        return (<div className={styles.submenutab} key={i}><Link href={sb.url}><a>{sb.title}</a></Link></div>)
                    })
                }
            </div>

    //  Render menu tab
    return (
        <div className={styles.submenu_tab}>
            <button onClick={()=>toggle(index, showing)} className={styles.submenucontrol}>
                <div className={styles.title}>{title}</div>
                <i className="material-icons">{icon}</i>
            </button>
            {submenu}
        </div>
    )
}

//  Main menu tab
function MainMenuTab(props) {
    return (<div className={styles.menu_tab}><Link href={props.url}><a>{props.title}</a></Link></div>)
}


