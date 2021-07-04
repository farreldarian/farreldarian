import clsx from 'clsx'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode
}
function SocialIcon({ icon, className, ...props }: Props) {
  return (
    <a
      className={clsx(
        'p-1.5',
        'text-3xl',
        'cursor-pointer',
        'rounded-md',
        'transition duration-150',
        className
      )}
      {...props}
    >
      {icon}
    </a>
  )
}

export default SocialIcon
