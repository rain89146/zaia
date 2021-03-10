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
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {(!!description) && <meta name="description" content={description}/>}
            {(!!keywords) && <meta name="keywords" content={keywords}/>}
            <meta name="author" content="Zaia"/>
        </Head>
    )
}
