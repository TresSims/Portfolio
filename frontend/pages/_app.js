import Head from 'next/head';
import styles from '../styles/main.scss';
function MyApp({ Component, pageProps }) {
    let analyticsTag = "";
    try{
	analyticsTag = process.env('NEXT_PUBLIC_ANALYTICS_ID');
    }catch{
	console.log("no analytics tag defined!");
    }
    return (
	<>
	<Head>
        <link rel="stylesheet" href="https://use.typekit.net/lej3fwk.css" />
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsTag}`}></script>
	<script
	async
	dangerouslySetInnerHTML={{
	    __html: ` window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', '${analyticsTag}');`
	}}
	      />
	  </Head>
	  <Component {...pageProps} />
      </>
  );
}

export default MyApp;
