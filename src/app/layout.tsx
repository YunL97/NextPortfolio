
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: '이윤식 포트폴리오',
  description: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
