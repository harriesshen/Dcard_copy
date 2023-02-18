import '../styles/globals.css'
import { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
