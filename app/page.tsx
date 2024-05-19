"use client"
import Head from 'next/head';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import BlogCategory from './components/molecules/BlogPost/BlogCategory';
import { useEffect, useState } from 'react';
import { MOCK_DATA } from './utils/constants';
import BlogPostInterface from './interfaces/BlogPost';
import Loading from './components/atoms/Loading/Loading';
import BGAnimation from './components/organisms/BGAnimation/BGAnimation';

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlogPosts(MOCK_DATA);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>Vu-Dev Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="area">
        <main className="bg-gradient-to-r from-purple-950 to-black">
          <div className="flex flex-col items-center justify-top min-h-screen">
            <h1 className="text-center font-sans text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-4">Welcome to Vu-Dev Blog</h1>
            <p className="font-serif relative font-ins items-start font-sans text-2xl text-white font-light mb-8">Blogs</p>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl px-4 mb-8">
                {blogPosts.map((post, index) => (
                  <BlogCategory key={index} title={post.title} content={post.content} image={post.image} date={post.date} />
                ))}
              </div>
            )}
          </div>
          <Footer />
        </main>
        <BGAnimation />
      </div>
    </div>
  );
}
