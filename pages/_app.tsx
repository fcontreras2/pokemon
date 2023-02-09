import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/apolloClient";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
