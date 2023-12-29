import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/modules/components/ui/navbar'
import Footer from '@/modules/components/ui/footer'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bailey Health',
  description: 'Get the care you need, when you need it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
