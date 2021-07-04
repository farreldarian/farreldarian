import { getApps, initializeApp, getApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'darianfarrel.firebaseapp.com',
  projectId: 'darianfarrel',
  storageBucket: 'darianfarrel.appspot.com',
  messagingSenderId: '601829423278',
  appId: '1:601829423278:web:bfc29ecbeafca7a306d53f',
  measurementId: 'G-HR2T3MEZYB',
}

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export default firebaseApp
