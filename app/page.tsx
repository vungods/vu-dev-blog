'use client'
import Head from 'next/head'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import BlogCategory from './components/molecules/BlogPostPreview/BlogPost/BlogCategory'
import { useEffect, useState } from 'react';
import { MOCK_DATA } from './utils/constants';
import BlogPostInterface from './interfaces/BlogPost'
import Loading from './components/atoms/Loading/Loading'

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setBlogPosts(MOCK_DATA);
      setIsLoading(false); // Set loading to false when data is loaded
    }, 2000); // Adjust loading time as per your requirement
  }, []);
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
      <main className="flex flex-col items-center justify-top min-h-screen bg-gradient-to-r from-purple-950 to-black">
        <h1 className="relative text-center font-ins text-[48px] text-primary drop-shadow-comeau-style-1 text-rose-900 font-bold mb-8 mt-8">Welcome to Vu-Dev Blog</h1>
        <p className="font-serif relative text-center font-ins font-sans text-2xl text-gray-600 font-light mb-8">Blog Category</p>
        {isLoading ? (
          <Loading /> // Render Loading component when data is loading
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl px-4 mb-8 ">
            {blogPosts.map((post, index) => (
              <BlogCategory key={index} title={post.title} content={post.content} image={post.image} date={post.date} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
