import Head from 'next/head';
import styles from '../styles/main.scss';
function MyApp({ Component, pageProps }) {
  return (
      <>
	  <Head>
              <link rel="stylesheet" href="https://use.typekit.net/lej3fwk.css" />
	      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FTHGLGM87J"></script>
	      <script
		  async
	      dangerouslySetInnerHTML={{
		 __html: ` window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'G-FTHGLGM87J');`
	      }}
	      />
	  </Head>
	  <Component {...pageProps} />
      </>
  );
}

export default MyApp;
