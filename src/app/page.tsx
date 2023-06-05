'use client'

import Image from 'next/image'
import { KeyboardEvent, useEffect, useState } from 'react'
import { Building, Link, MapPin, Search, Sun, Twitter } from 'lucide-react'
import { api } from '@/services/api'
import dayjs from 'dayjs'

interface User {
  avatar_url: string
  name: string
  login: string
  created_at: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string
  blog: string
  twitter_username: string
  company: string
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  async function getUserInfos(username: string) {
    try {
      const response = await api.get(`/${username}`)
      const data = response.data
      setUser(data)
    } catch (error) {
      console.log(error)
    } finally {
      setInputValue('')
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      getUserInfos(inputValue)
    }
  }

  useEffect(() => {
    getUserInfos('octocat')
  }, [])

  return (
    <div className="w-[750px] py-7">
      <header className="flex items-center justify-between py-1">
        <h1 className="text-[26px] font-bold">devfinder</h1>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2.5px]">
          light
          <Sun size={20} />
        </button>
      </header>
      <main className="mt-4 space-y-6">
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
        {user && (
          <section className="flex gap-7 p-12 bg-blue-700 rounded-2xl shadow-lg shadow-blue-500/20">
            <div>
              <Image
                src={user.avatar_url}
                width={120}
                height={120}
                alt={`Foto de perfil do ${user.name}`}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="max-w-[65%]">
                  <h1 className="text-2xl font-bold leading-9">{user.name}</h1>
                  <span className="text-blue-500">@{user.login}</span>
                </div>
                <span className="text-sm capitalize">
                  Joined {dayjs(user.created_at).format('DD MMM YYYY')}
                </span>
              </div>
              <p
                className={`mt-5 mb-8 text-sm ${
                  user.bio === null ? 'text-zinc-400' : 'text-white'
                }`}
              >
                {user.bio === null ? 'This profile has no bio' : user.bio}
              </p>
              <div className="flex justify-between py-4 px-8 bg-blue-950 rounded-lg text-center">
                <div>
                  <span className="text-sm leading-5">Repositories</span>
                  <p className="text-2xl font-bold leading-8">
                    {user.public_repos}
                  </p>
                </div>
                <div>
                  <span className="text-sm leading-5">Followers</span>
                  <p className="text-2xl font-bold leading-8">
                    {user.followers}
                  </p>
                </div>
                <div>
                  <span className="text-sm leading-5">Following</span>
                  <p className="text-2xl font-bold leading-8">
                    {user.following}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex flex-col gap-4">
                  <p
                    className={`flex items-center gap-3 text-sm ${
                      user.location === null ? 'text-zinc-400' : ''
                    }`}
                  >
                    <MapPin size={22} />
                    {user.location === null ? 'Not Available' : user.location}
                  </p>
                  <p
                    className={`flex items-center gap-3 text-sm ${
                      user.blog === '' ? 'text-zinc-400' : ''
                    }`}
                  >
                    <Link size={22} />
                    {user.blog === '' ? 'Not Available' : user.blog}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className={`flex items-center gap-3 text-sm ${
                      user.twitter_username === null ? 'text-zinc-400' : ''
                    }`}
                  >
                    <Twitter size={22} />
                    {user?.twitter_username === null
                      ? 'Not Available'
                      : user.twitter_username}
                  </p>
                  <p
                    className={`flex items-center gap-3 text-sm ${
                      user.company === null ? 'text-zinc-400' : ''
                    }`}
                  >
                    <Building size={22} />
                    {user.company === null ? 'Not Available' : user.company}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
