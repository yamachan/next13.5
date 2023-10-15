import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zen test pages',
  description: 'Test pages with Zen API',
}

export default function ZenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Zen test page</h1>
        {children}
      </body>
    </html>
  )
}
