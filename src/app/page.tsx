import TopNavigation from '@/app/components/mainpage/topnavigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log('asd')

  return (
    <>
    <div className="mr-4 py-4">skill</div>
      <TopNavigation />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}
