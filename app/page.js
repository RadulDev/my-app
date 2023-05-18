import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <h1>welcome to Homepage</h1>
      <ul>
        <li>
          <Link href='/'>Homepage</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>

    </div>
  )
}

export default Homepage