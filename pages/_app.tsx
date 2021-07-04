import type { AppProps } from 'next/app'

import '@styles/global.css'
import { useAnalyticsView } from '@lib/firebase/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  useAnalyticsView()

  return <Component {...pageProps} />
}
export default MyApp
