import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )
}
