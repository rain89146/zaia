import Head from 'next/head';
export default function Header(props) {

    //  SEOs are here
    const {title, description, keywords} = props;
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="manifest" href="/manifest.json" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            {(!!description) && <meta name="description" content={description}/>}
            {(!!keywords) && <meta name="keywords" content={keywords}/>}
            <meta name="author" content="Zaia"/>
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#242b2f" />
        </Head>
    )
}
