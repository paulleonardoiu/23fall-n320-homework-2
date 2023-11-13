import '@/styles/globals.css';
import Navbar from '@/components/Navbar.js';
import Footer from '@/components/Footer.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
