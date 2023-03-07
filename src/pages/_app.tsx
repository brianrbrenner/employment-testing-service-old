import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';
import { api } from '../utils/api';
import { Header } from '../../components/layout/header';
import { Layout } from '../../components/layout/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      {' '}
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default api.withTRPC(App);
