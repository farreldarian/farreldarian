import { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode
}
function SocialIcon({ icon, ...props }: Props) {
  return (
    <a
      className='
        p-2
        text-3xl
        cursor-pointer
        transition
        rounded-xl
        hover:bg-black/10
      '
      {...props}
    >
      {icon}
    </a>
  )
}

export default SocialIcon
