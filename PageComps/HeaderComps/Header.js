import Head from 'next/head';
export default function Header(props) {

    //  SEOs are here
    let {title} = props;
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
    )
}
