// pages/_app.js
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入 Font Awesome 样式
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;