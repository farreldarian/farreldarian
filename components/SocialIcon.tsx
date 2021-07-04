import useSocialAnalytics from '@lib/firebase/hooks/useSocialAnalytics'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode
  analyticsName: string
}
function SocialIcon({ icon, analyticsName, className, ...props }: Props) {
  useSocialAnalytics(analyticsName)

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
