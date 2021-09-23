import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to N&N chickens. Here at N&N Chickens we 
          believe that chickens are worth a big value that why we founded
          N&N to breed chickens, process them for hotels and restrants and
          sell their products to the people."
        />
        <meta
          property="og:description"
          content="Welcome to N&N chickens. Here at N&N Chickens we 
          believe that chickens are worth a big value that why we founded
          N&N to breed chickens, process them for hotels and restrants and
          sell their products to the people."
        />
        <meta
          name="twitter:description"
          content="Welcome to N&N chickens. Here at N&N Chickens we 
          believe that chickens are worth a big value that why we founded
          N&N to breed chickens, process them for hotels and restrants and
          sell their products to the people."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <link rel="icon" type="img/svg" href="/N&N.svg" />
        <meta property="og:title" content="N&N Chickens INC." />
        <meta property="og:image" content="/chicken.png" />
        <meta property="og:url" content="https://nandnchickens.vercel.app/" />
        <meta name="twitter:title" content="N&N Chickens INC." />
        <meta name="twitter:image" content="/chicken.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:author" content="@jmvchickens1972" />
      </Head>

      <div className="appLayout">
        <div className="appNavbar">
          <Navbar />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
