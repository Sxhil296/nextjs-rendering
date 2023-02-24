import Link from 'next/link'
import React from 'react'

const index = ({articles}) => {
  return (
    <div>
        <h1>List of News Articles</h1>

        {articles.map(article => {
            return (
                <div key={article.id}>
                   <Link href={`/news/${article.id}`}> <h2>
                        {article.id} - {article.title} | {article.category}
                    </h2></Link>
                </div>
            )
        })}
    </div>
  )
}

export default index

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            articles: data,
        },
    }
}