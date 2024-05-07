// 'use client'

export default function TestComponent() {
  console.log('test' + process.env.BASE_URL)
  console.log(process.env.NEXT_PUBLIC_NODE_ENV)
  console.log('sssdsd')
  return <main></main>
}
