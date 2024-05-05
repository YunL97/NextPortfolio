
import type { Metadata } from 'next'
import logo from '../../public/logo.svg'
import Image from 'next/image'





export const metadata: Metadata = {
  title: '이윤식 포트폴리오',
  description: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
        <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
        </div>
        <img src={logo}></img>
        {children}</body>
    </html>
  )
}
