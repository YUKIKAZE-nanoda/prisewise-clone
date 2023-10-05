import './globals.css'
import type { Metadata } from 'next'
import { Inter,Space_Grotesk} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk=Space_Grotesk({subsets:[]})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}