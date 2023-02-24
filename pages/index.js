import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users"><p>Users</p></Link>
      <Link href="/posts"><p>Posts</p></Link>
      <Link href="/products"><p>Products</p></Link>
      <Link href="/news"><p>News</p></Link>
      <Link href="/dashboard"><p>Dashboard</p></Link>
      <Link href="/events"><p>Events</p></Link>
    </div>
  )
}
