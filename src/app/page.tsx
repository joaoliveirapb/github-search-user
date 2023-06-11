'use client'

import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { UserProps } from '@/types/user'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import UserDetails from '@/components/UserDetails'
import Error from '@/components/Error'
import SkeletonLoader from '@/components/SkeletonLoader'

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState<boolean>(false)

  async function getUserInfos(username: string) {
    try {
      setError(false)
      const response = await api.get(`/${username}`)
      const data = response.data
      setUser(data)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getUserInfos('octocat')
    }, 2000)
  }, [])

  return (
    <div className="w-[750px] py-7 max-sm:px-3 max-sm:w-full">
      <Header />
      <main className="mt-4 space-y-6">
        <SearchBar getUserInfos={getUserInfos} />
        {error && <Error />}
        {user ? <UserDetails {...user} /> : <SkeletonLoader />}
      </main>
    </div>
  )
}
