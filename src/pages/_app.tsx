import type { AppProps } from "next/app";

// components
import { Layout } from "../components/common";

// styles
import "../styles/tailwind.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout layoutData={pageProps || {}}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
