'use client';
import Head from 'next/head';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import BlogPost from './components/molecules/BlogPostPreview/BlogPost/BlogPost';  // Import this once you create the BlogPost component
import { useEffect, useState } from 'react';
import { MOCK_DATA } from './utils/constants';
import BlogPostInterface from './interfaces/BlogPost';

export default function Home() {
  // Assuming you have some data for your blog posts
  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([]);

  // Fetch blog posts data when the component mounts
  useEffect(() => {
    setBlogPosts(MOCK_DATA);
  }, []);

  return (
    <div>
      <Head>
        <title>Vu-Dev Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="text-4xl font-bold mb-8">Welcome to Vu-Dev Blog</h1>

        {/* Display blog posts */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
