import Head from 'next/head'
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import SocialIcon from '../components/SocialIcon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Farrel Darian</title>
        <meta name='description' content='Portfolio website of Farrel Darian' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative min-h-screen'>
        <div
          className='
            absolute inset-0
            bg-gradient-to-br from-blue-200 via-green-50 to-yellow-100
          '
        ></div>
        <div
          className='
            z-10
            flex flex-col
            justify-center items-center
            min-h-screen
            backdrop-blur
          '
        >
          <h1 className='font-bold text-2xl'>Site will be available soon...</h1>
          <div className='flex space-x-4 mt-4'>
            <SocialIcon
              icon={<FaGithub />}
              href='https://github.com/farreldarian'
            />
            <SocialIcon
              icon={<FaLinkedin />}
              href='https://www.linkedin.com/in/farreldarian/'
            />
            <SocialIcon
              icon={<FaInstagram />}
              href='https://www.instagram.com/farrelfd/'
            />
            <SocialIcon
              icon={<FaTwitter />}
              href='https://twitter.com/farreldarian'
            />
          </div>
        </div>
      </div>
    </>
  )
}
