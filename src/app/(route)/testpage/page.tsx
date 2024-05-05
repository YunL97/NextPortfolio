// 'use client'

import Greeting from "@/app/component/test"

export default function TestComponent() {

  console.log('test' + process.env.BASE_URL)
  console.log(process.env.NEXT_PUBLIC_NODE_ENV)
  return <main>
    <Greeting></Greeting>
  </main>
}
