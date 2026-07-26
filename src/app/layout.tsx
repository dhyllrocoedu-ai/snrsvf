import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Vincent Ferrer Church Of Pitalo, San Fernando Cebu',
  description: 'Official website of St. Vincent Ferrer Church of Pitalo, San Fernando Cebu - A place of pilgrimage and devotion since 1925.',
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
            <div className="logo">St. Vincent Ferrer Church Of Pitalo</div>
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
          <p>© {new Date().getFullYear()} St. Vincent Ferrer Church Of Pitalo, San Fernando Cebu. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}