import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '../app/components/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Hello World

     {/* <a href="/users"> users</a> */}
     <Link href="/users">users</Link>
     <ProductCard />
</main>
  )
}
