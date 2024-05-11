import React from 'react'

interface BlogPostProps {
  title: string
  content: string
}

const BlogCategory: React.FC<BlogPostProps> = ({ title, content }) => {
  return (
    <a href="#" className="block hover:bg-blue-200 p-4 rounded-lg">
      <div className="border border-gray-300 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </a>
  );
};

export default BlogCategory 
