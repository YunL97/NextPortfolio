import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

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
        <div className="absolute top-0 mx-10 my-5">
          <Link href="/">
            <Image
              src="logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}
