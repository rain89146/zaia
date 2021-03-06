import Link from 'next/link'
import styles from './ContactPage.module.scss'
export default function AddressSection() {
    let address = encodeURI('18558 Gale Ave # 338, Rowland Heights, CA 91748');
    let address_url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    return (
        <div className={styles.addresssection}>
            <div className={styles.holder}>
                <div className={styles.titlecon}><h1>Contact information</h1></div>
                <div className={styles.contentcon}>
                    <div className={styles.content}><Link href="mailto:info@industrybusinesscouncil.org"><a>info@industrybusinesscouncil.org</a></Link></div>
                    <div className={styles.content}><Link href="tel:(323)397-7725"><a>(323) 397-7725</a></Link></div>
                    <div className={styles.content}><Link href={address_url}>18558 Gale Ave # 338 City of Industry CA 91748</Link></div>
                </div>
            </div>
        </div>
    )
}
