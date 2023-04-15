import '@styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { Assistant } from 'next/font/google'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const assistant = Assistant({ variable: '--font-sans' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${assistant.variable} font-sans text-zinc-950 bg-zinc-50`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  )
}
