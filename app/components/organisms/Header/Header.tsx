import React from 'react'
import Navigation from '../Navigation/Navigation'
const Header = () => {
  return (
    <header className="bg-gray-800 flex justify-start text-white py-4 ">
      <div className="flex-col content-center px-4 max-w-64">
        <h1 className="text-2xl font-bold">Vu-Dev Blogs</h1>
      </div>
      <div className="mx-auto">
        <Navigation />
      </div>
    </header>
  )
}

export default Header
