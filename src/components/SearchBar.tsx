import { KeyboardEvent, useState } from 'react'
import { Search } from 'lucide-react'

type SearchProps = {
  getUserInfos: (username: string) => Promise<void>
}

export default function SearchBar({ getUserInfos }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>('')

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      getUserInfos(inputValue)
    }
  }

  return (
    <section className="relative flex">
      <Search
        size={28}
        className="absolute text-blue-500 top-1/2 translate-y-[-50%] left-6"
      />
      <input
        type="text"
        value={inputValue}
        placeholder="Search GitHub username..."
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full py-5 pl-20 pr-28 bg-blue-700 rounded-2xl placeholder:text-white focus:outline-none"
      />
      <button
        onClick={() => getUserInfos(inputValue)}
        className="absolute top-1/2 translate-y-[-50%] right-[10px] py-3 px-4 bg-blue-500 rounded-lg transition-colors hover:bg-blue-800"
      >
        Search
      </button>
    </section>
  )
}
