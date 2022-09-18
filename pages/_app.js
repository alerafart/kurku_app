// `pages/_app.js`
import '../styles/global.scss';
import '../styles/utils.module.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'


config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}