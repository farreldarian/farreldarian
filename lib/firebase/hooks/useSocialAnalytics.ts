import { getAnalytics, logEvent } from 'firebase/analytics'
import { useEffect } from 'react'
import firebaseApp from '../firebase'

function useSocialAnalytics(socialName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    const analytics = getAnalytics(firebaseApp)

    logEvent(analytics, 'social_click', { social_name: socialName })
  }, [socialName])
}

export default useSocialAnalytics
