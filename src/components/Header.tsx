import { Sun } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-1">
      <h1 className="text-[26px] font-bold">devfinder</h1>
      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2.5px]">
        light
        <Sun size={20} />
      </button>
    </header>
  )
}
