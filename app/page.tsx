import { type AnchorHTMLAttributes } from 'react'

export default function IndexPage() {
  return (
    <main className='min-h-screen grid place-content-center'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <section className='text-2xl space-y-6'>
          <p>
            Farrel Darian, crafting interfaces that abstract complexity.
            Seamlessly blending art with cutting-edge technology, pushing the
            boundaries of what’s possible.
          </p>
          <p>
            Innovating as an experienced full-stack engineer, specializing in
            blockchain and web technology, educated in computer science and AI.
          </p>
          <p>Currently building Netra as CTO. Previously at GDP Labs.</p>
          <p>Based in Jakarta with global mindset.</p>
        </section>

        <section className='flex gap-6 text-lg'>
          <Link href='mailto:contact@farreldarian.com' external>
            Say hello
          </Link>
          <Link href='https://www.linkedin.com/in/farreldarian/' external>
            linked in
          </Link>
          <Link href='https://twitter.com/farreldarian' external>
            twitter
          </Link>
          <Link href='https://github.com/farreldarian' external>
            github
          </Link>
        </section>
      </div>
    </main>
  )
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean
}

function Link({ children, external, ...rest }: LinkProps) {
  return (
    <a
      className='border-b border-zinc-300 hover:border-zinc-950 transition-colors ease-out duration-100'
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...rest}
    >
      {children}
    </a>
  )
}
