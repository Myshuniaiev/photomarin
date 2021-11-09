import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='black' startPosition={0.3} stopDelayMs={200} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
