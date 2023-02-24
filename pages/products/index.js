import Link from 'next/link'
import React from 'react'

const index = ({products}) => {
  return (
    <div>
        <h1>List of Products</h1>
        {products.map(product => {
            return (
                <div key={product.id}>
<Link href={`/products/${product.id}`}><h2>{product.id}- {product.title} - {product.price}</h2></Link>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default index

export async function getStaticProps() {
    console.log("generating / regenerating products page")
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return{
        props:{
            products: data
        },
        revalidate: 10,
    }
}