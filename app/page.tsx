import {
  HTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'
import ArrowUpRight from './ArrowUpRight'

export default function IndexPage() {
  return (
    <main className='min-h-screen grid place-content-center'>
      <div className='max-w-3xl mx-auto space-y-12'>
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

        <Section title='Talks' className='flex gap-6 overflow-x-auto'>
          <TalksCard
            event='AsiaBerlin'
            title='Building the future with Music & Healthcare - the Indonesia way'
            type='Panel'
            place='Berlin'
            year='2022'
            href='https://www.youtube.com/watch?t=19891&v=B4GdwBBQUQs&feature=youtu.be'
          />
          <TalksCard
            event='Beyond B'
            type='Seminar'
            title='Smart Contract Programming with Solidity'
            place='Virtual'
            year='2021'
            href='https://www.kaskus.co.id/thread/610ba83e5263da119c5945c3/gagal-paham-dengan-crypto-join-webinar-beyond-b--how-crypto-works-under-the-hood/'
          />
        </Section>
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

function Section({
  title,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { title: string; children: ReactNode }) {
  return (
    <section className='space-y-4'>
      <h2 className='font-medium'>{title}</h2>
      <div {...rest}>{children}</div>
    </section>
  )
}

function TalksCard(props: {
  href: string
  event: string
  type: string
  title: string
  place: string
  year: string
}) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      className='py-5 px-4 border border-zinc-300 rounded space-y-5 group'
    >
      <span className='flex justify-between text-zinc-400 text-sm group-hover:text-zinc-950 transition-colors'>
        <p>{props.event}</p>
        <ArrowUpRight
          width={18}
          height={18}
          className='group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform'
        />
      </span>
      <p>
        {props.type}: {props.title}
      </p>
      <p className='text-zinc-400 text-sm group-hover:text-zinc-950 transition-colors'>
        {props.place} · {props.year}
      </p>
    </a>
  )
}
