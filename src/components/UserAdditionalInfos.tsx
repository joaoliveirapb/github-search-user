import { ReactNode } from 'react'

type UserAdditionalInfosProps = {
  icon: ReactNode
  info: string
}

export default function UserAdditionalInfos({
  icon,
  info,
}: UserAdditionalInfosProps) {
  return (
    <p
      className={`flex items-center gap-3 text-sm ${
        info === null || info === ''
          ? 'text-zinc-400'
          : 'text-blue-600 dark:text-white'
      }`}
    >
      {icon}
      {info === null || info === '' ? 'Not Available' : info}
    </p>
  )
}
