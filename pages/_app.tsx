import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../lib/apolloClient';
import type { AppProps } from 'next/app'
import { ModalProvider } from 'components/Modal/context/ModalProvider';

interface ModalProps {
  open: boolean,
  children?: JSX.Element | JSX.Element[]
}
function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  )
}

export default MyApp
