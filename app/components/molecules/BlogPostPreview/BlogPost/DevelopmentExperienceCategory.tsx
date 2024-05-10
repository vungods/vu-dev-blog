import React from 'react'

interface DevelopmentExperienceProps {
  title: string
  content: string
}

const DevelopmentExperienceCategory : React.FC<DevelopmentExperienceProps> = ({ title, content }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default DevelopmentExperienceCategory 
