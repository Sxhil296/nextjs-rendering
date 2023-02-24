import Link from 'next/link'
import React from 'react'

const index = ({ posts }) => {
  return (
    <div>
        <h1>List of posts</h1>
        {
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref><h3>{post.id}- {post.title}</h3></Link>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default index

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0,3)
            // posts: data,
        }
    }
}