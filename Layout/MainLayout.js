import React, { Fragment } from 'react'
import Head from 'next/head';
import styles from './MainLayout.module.scss';
import TopNavigation from '../Comps/Navigation/TopNavigation';
import BottomNavigation from '../Comps/Navigation/BottomNavigation';

export default function MainLayout(props) {
    let {title} = props;

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
        </Fragment>
    )
}
