import Link from 'next/link'
import React from 'react'

const err = () => {
  return (
    <div>
      <h1>Ooopss..page not found!</h1>
     <Link href="/">Home</Link>
    </div>
    
  )
}

export default err