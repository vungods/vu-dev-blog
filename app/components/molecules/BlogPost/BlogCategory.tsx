import BlogPostInterface from '@/app/interfaces/BlogPost';
import React from 'react';


const BlogCategory: React.FC<BlogPostInterface> = ({ title, content, image, date }) => {
  return (
    <div className="flex flex-col bg-purple-100 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition transform hover:translate-y-1 hover:shadow-xl relative">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{content}</p>
        <p className="text-sm text-gray-500 mt-auto">{date}</p>
        <a href="#" className="text-blue-500 hover:underline mt-4">Read More</a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-cyan-100 to-transparent rounded-lg opacity-20 transition-opacity duration-300 hover:opacity-15"></div>
    </div>
  );
};

export default BlogCategory;
