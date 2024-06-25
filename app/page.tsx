// import Image from 'next/image'

import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
   <main>
    <h1>hello world</h1>
    <Link href="/users">users page</Link>
    <Link href="/users/new">new user</Link>
    <ProductCard />
   </main>
  )
}
