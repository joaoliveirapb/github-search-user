'use client'

import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, initialState: any) {
  const [state, setStote] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return storageValue
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setStote]
}
