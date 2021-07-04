import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  title?: string
  description?: string
  children: ReactNode
}

function Page({
  title = 'Farrel Darian',
  description = 'Full-Time Laboratory Assistant at Binus, Blockchain Developer / Researcher, and Full-Stack Web Developer.',
  children,
}: Props) {
  return (
    <>
      <Head>
        {/* Title */}
        <title>{title}</title>
        <meta name='og:title' content={title} />

        {/* Description */}
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />

        {/* Image */}
        {/* <meta name='twitter:image' content={image} />
        <meta property='og:image' content={image} /> */}

        {/* URL */}
        <meta property='og:url' content='https://farreldarian.com' />
        <meta name='twitter:site' content='@farreldarian' />

        {/* General */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />

        {/* Favicon */}
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-16x16.png'
          sizes='16x16'
        />
        <meta name='theme-color' content='#365E7A' />
      </Head>

      {children}
    </>
  )
}

export default Page
