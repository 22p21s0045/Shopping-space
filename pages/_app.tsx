import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import React from 'react';
import 'animate.css';
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
  <QueryClientProvider  client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  )
}

export default MyApp
