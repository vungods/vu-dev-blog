import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center space-x-16 py-4">
        <li className="text-white">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white">
          <Link href="/blog">Blogs</Link>
        </li>
        <li className="text-white">
          <Link href="/books">Books Reviews</Link>
        </li>
        <li className="text-white">
          <Link href="/tutorials">Tutorials</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
