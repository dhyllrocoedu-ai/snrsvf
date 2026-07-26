import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Vincent Ferrer Parish',
  description: 'Official website of St. Vincent Ferrer Parish',
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
            <div className="logo">St. Vincent Ferrer Parish</div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/mass-schedule">Mass Schedule</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <p>© {new Date().getFullYear()} San Vicente Ferrer Chapel Pitalo, San Fernando Cebu. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}