'use client'

import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storageValue = window.localStorage.getItem(key)
    if (storageValue) {
      setState(storageValue)
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}
