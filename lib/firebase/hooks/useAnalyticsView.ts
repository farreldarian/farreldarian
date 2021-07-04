import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import firebaseApp from '../firebase'

function useAnalyticsView() {
  const routers = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    const analytics = getAnalytics(firebaseApp)

    function handleChange(url: string) {
      logEvent(analytics, 'page_view', { page_path: url })
    }

    routers.events.on('routeChangeComplete', handleChange)

    return () => {
      routers.events.off('routeChangeComplete', handleChange)
    }
  }, [routers.events])
}

export default useAnalyticsView
