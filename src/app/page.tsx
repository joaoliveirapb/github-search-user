import { Search, Sun } from 'lucide-react'

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
      <main className="mt-7">
        <section className="relative flex">
          <Search
            size={28}
            className="absolute text-blue-500 top-1/2 translate-y-[-50%] left-6"
          />
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="w-full py-5 pl-20 pr-28 bg-blue-700 rounded-2xl placeholder:text-white focus:outline-none"
          />
          <button className="absolute top-1/2 translate-y-[-50%] right-[10px] py-3 px-4 bg-blue-500 rounded-lg">
            Search
          </button>
        </section>
        <section></section>
      </main>
    </div>
  )
}
