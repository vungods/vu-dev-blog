import React from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import { mmoOptions, tutorialsOptions } from '@/app/utils/constants'

const Navigation: React.FC = () => {
  return (
    <nav className="">
      <ul className="flex justify-center space-x-16 py-4">
        <li className="text-white">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="text-white">
          <Dropdown name="Tutorials" options={tutorialsOptions} />
        </li>
        <li className="text-white">
          <Dropdown name="Make Money" options={mmoOptions} />
        </li>
        <li className="text-white">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
