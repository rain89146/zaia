import React from 'react'
import LandScapeImageCardTemplate from '../../Comps/ImageComps/LandScapeImageCardTemplate'
import ScrolldownIcon from '../../Svgs/Home_Page/SvgIcon0';
import styles from './HomePage.module.scss'
export default function SectionOne(props) {

    //
    const {text, logo} = props;
    
    //
    const logobk = {backgroundImage: `url('${logo}')`};
    
    //
    return (
        <div>
            <LandScapeImageCardTemplate {...props}>
                <div className={styles.con}>
                    <div className={styles.holder}>
                        <div className={styles.logoholder}>
                            <div className={styles.logo} style={logobk}></div>
                        </div>
                        <div className={styles.text}><h1>{text}</h1></div>
                        <div className={styles.scrolldownicon}>
                            <ScrolldownIcon size={40}/>
                        </div>
                    </div>
                </div>
            </LandScapeImageCardTemplate>
        </div>
    )
}