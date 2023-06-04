import { Sun } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-w-[730px] py-7">
      <header className="flex items-center justify-between py-1">
        <h1 className="text-[26px] font-bold">devfinder</h1>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2.5px]">
          light
          <Sun size={20} />
        </button>
      </header>
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  )
}
