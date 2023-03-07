import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';
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
