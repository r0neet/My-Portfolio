import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackgroundBeams } from '@/components/ui/background-beams'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'Roneet Bala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
      <div className='fixed '>
      <BackgroundBeams/>
      </div>
        {children}
        </body>
    </html>
  )
}
