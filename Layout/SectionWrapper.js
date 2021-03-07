import React from 'react'
import styles from './SectionWrapper.module.scss';

function SectionWrapper(props) {
    return (
        <MarginWrapper {...props}>
            <div className={styles.section}>{props.children}</div>
        </MarginWrapper>
    )
}

function ContentWrapper(props) {
    return (
        <div className={styles.section}>{props.children}</div>
    )
}

function MarginWrapper(props) {
    let {top, bottom} = props;
    let margin_style = styles.margintop_1;
    switch (top) {
        case 3: margin_style = styles.margintop_3; break;
        case 6: margin_style = styles.margintop_6; break;
        case 9: margin_style = styles.margintop_9; break;
    }
    return <div className={margin_style}>{props.children}</div>
}

export { SectionWrapper, MarginWrapper, ContentWrapper};