import type { Metadata } from 'next'
import Image from 'next/image'
import "./globals.css";

export const metadata: Metadata = {
  title: '이윤식 포트폴리오',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <a href="/">
            <Image
              src="logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
