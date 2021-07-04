import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

import SocialIcon from '@components/SocialIcon'
import styles from '@styles/Home.module.css'
import Page from '@components/Page'

function Home() {
  return (
    <Page>
      <div className='relative min-h-screen text-[#061B29]'>
        <div
          className='
            absolute inset-0
            flex
            justify-end
            items-end
            bg-gray-100
          '
        >
          <div className={styles.grad}></div>
        </div>

        <main
          className='
            z-10
            relative
            flex flex-col
            justify-between items-center
            py-16 px-8 sm:p-16
            min-h-screen
            backdrop-blur
          '
        >
          <p></p>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-6xl'>Hi, I’m Farrel Darian </h1>
            <p className='text-xl mt-8'>
              Full-Time Laboratory Assistant at Binus, Blockchain Developer /
              Researcher, and Full-Stack Web Developer. Specializing in
              Artificial Intelligence (degree), but has a passion for future Web
              3.0 technologies.
            </p>

            <div className='block sm:flex items-center mt-8 space-y-4'>
              <a
                href='mailto:contact@farreldarian.com'
                className='
                  group
                  flex items-center
                  mr-4 pb-1
                  transition duration-150
                  border border-transparent
                  hover:border-b-white/100
                  rounded-sm
                '
              >
                contact@farreldarian.com
                <BsArrowUpRight className='transition duration-150 opacity-0 group-hover:opacity-100 ml-4' />
              </a>

              <div className='flex space-x-4 ml-auto'>
                <SocialIcon
                  icon={<FaGithub />}
                  analyticsName='github'
                  href='https://github.com/farreldarian'
                  className='hover:text-black hover:bg-white/10'
                />
                <SocialIcon
                  icon={<FaLinkedin />}
                  analyticsName='linkedin'
                  href='https://www.linkedin.com/in/farreldarian/'
                  className='hover:text-[#225AA4] hover:bg-[#bed1ec44]'
                />
                <SocialIcon
                  icon={<FaInstagram />}
                  analyticsName='instagram'
                  href='https://www.instagram.com/farrelfd/'
                  className='hover:text-[#C23F81] hover:bg-[#ecd1df44]'
                />
                <SocialIcon
                  icon={<FaTwitter />}
                  analyticsName='twitter'
                  href='https://twitter.com/farreldarian'
                  className='hover:text-[#48A1EB] hover:bg-[#cae3f744]'
                />
              </div>
            </div>
          </div>

          <p className='text-xs text-gray-300 italic'>* temporary site</p>
        </main>
      </div>
    </Page>
  )
}

export default Home
