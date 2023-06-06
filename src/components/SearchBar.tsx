import { KeyboardEvent, useEffect, useState } from 'react'
import { Search } from 'lucide-react'

type SearchProps = {
  getUserInfos: (username: string) => Promise<void>
}

export default function SearchBar({ getUserInfos }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(true)

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && inputValue.length > 0) {
      getUserInfos(inputValue)
    }
  }

  useEffect(() => {
    if (inputValue.length > 0) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [inputValue])

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
        disabled={disabledButton}
        className="absolute top-1/2 translate-y-[-50%] right-[10px] py-3 px-4 bg-blue-500 rounded-lg transition-colors enabled:hover:bg-blue-800 disabled:opacity-70"
      >
        Search
      </button>
    </section>
  )
}
