// `pages/_app.js`
import '../styles/global.scss';
import '../styles/utils.module.scss';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}