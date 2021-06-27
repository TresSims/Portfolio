import Head from 'next/head';
import styles from '../styles/main.scss';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lej3fwk.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
