import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import '@styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
