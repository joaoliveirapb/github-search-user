import { ReactNode } from 'react'
import './globals.css'
import { Space_Mono as SpaceMono } from 'next/font/google'

const spaceMono = SpaceMono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Github Search User',
  description:
    'Um site para buscar usuários do Github construído com React, Next.js e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${spaceMono.className} flex items-center justify-center h-screen bg-slate-300 dark:bg-blue-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
