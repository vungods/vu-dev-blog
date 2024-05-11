import React from 'react';
import BlogCategory from '../components/molecules/BlogPostPreview/BlogPost/BlogCategory'; 

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Sample Blog Post 1',
      content: 'This is the content of sample blog post 1.',
    },
    {
      id: 2,
      title: 'Sample Blog Post 2',
      content: 'This is the content of sample blog post 2.',
    },
    {
      id: 3,
      title: 'Sample Blog Post 3',
      content: 'This is the content of sample blog post 3.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map(post => (
          <BlogCategory key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
