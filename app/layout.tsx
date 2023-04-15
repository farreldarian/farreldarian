import '@styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { Assistant } from 'next/font/google'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const assistant = Assistant({ variable: '--font-sans', subsets: ['latin'] })

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
        <footer className='border-t border-zinc-200 py-3 text-zinc-400'>
          <div className='max-w-3xl mx-auto flex justify-between w-full'>
            <p>Passion driven development</p>
            <p>© {getCurrentYear()}</p>
          </div>
        </footer>
      </body>
      <Analytics />
    </html>
  )
}

function getCurrentYear() {
  return new Date().getFullYear()
}
