import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import ThemeButton from './ThemeButton'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function Header() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const htmlTagClasses = document.documentElement.classList

    theme === 'dark'
      ? htmlTagClasses.add('dark')
      : htmlTagClasses.remove('dark')
  }, [theme])

  return (
    <header className="flex items-center justify-between py-1">
      <h1 className="text-[26px] font-bold">devfinder</h1>
      {theme === 'light' ? (
        <ThemeButton
          icon={<Moon size={20} />}
          label="dark"
          toggleTheme={toggleTheme}
        />
      ) : (
        <ThemeButton
          icon={<Sun size={20} />}
          label="light"
          toggleTheme={toggleTheme}
        />
      )}
    </header>
  )
}
