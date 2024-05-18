import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-950 text-white py-4">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Vu-Dev Blog</p>
      </div>
    </footer>
  )
}

export default Footer
