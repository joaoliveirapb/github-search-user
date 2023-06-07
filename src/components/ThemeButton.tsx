import { ReactNode } from 'react'

type ThemeButtonProps = {
  icon: ReactNode
  label: string
  toggleTheme: () => void
}

export default function ThemeButton({
  icon,
  label,
  toggleTheme,
}: ThemeButtonProps) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-[2.5px]"
    >
      {label}
      {icon}
    </button>
  )
}
