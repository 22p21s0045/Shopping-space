import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import React from 'react';
import 'animate.css';
import {store} from '../redux/Store'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <Provider store ={store}>
  <QueryClientProvider  client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  </Provider>
  )
}

export default MyApp
