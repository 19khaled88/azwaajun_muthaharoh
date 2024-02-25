
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
// import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // If page layout is available, use it. Else return the page
  const getLayout = Component.getLayout || ((page) => page);
  // return Layout = getLayout(<Component {...pageProps} />);
  const Layout = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider >
      {Layout}
    </SessionProvider>
  );
}
