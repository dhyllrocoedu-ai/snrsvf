import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Archdiocese of Cebu',
  description: 'Official website of the Archdiocese of Cebu',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-content">
            <div className="logo">The Archdiocese of Cebu</div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/parishes">Parishes</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <p>© {new Date().getFullYear()} The Archdiocese of Cebu. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}