'use client'
import Head from 'next/head'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import BlogCategory from './components/molecules/BlogPostPreview/BlogPost/BlogCategory'
import { useEffect, useState } from 'react';
import { MOCK_DATA } from './utils/constants';
import BlogPostInterface from './interfaces/BlogPost';
import BookReviewCategory from './components/molecules/BlogPostPreview/BlogPost/BookReviewCategory'
import DevelopmentExperienceCategory from './components/molecules/BlogPostPreview/BlogPost/DevelopmentExperienceCategory'

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([])
  const [bookReviews, setBookReviews] = useState<BlogPostInterface[]>([]);
  const [developmentExperiences, setDevelopmentExperiences] = useState<BlogPostInterface[]>([]);

  useEffect(() => {
    setBlogPosts(MOCK_DATA.filter(post => post.category === 'Blog'));
    setBookReviews(MOCK_DATA.filter(post => post.category === 'Book Review'));
    setDevelopmentExperiences(MOCK_DATA.filter(post => post.category === 'Development Experience'));
  }, [])

  return (
    <div className=' '>
      <Head >
        <title>Vu-Dev Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-top min-h-screen scroll-py-0">
        <h1 className="text-4xl text-rose-900	font-bold mb-8">Welcome to Vu-Dev Blog</h1>
        <p className="font-sans hover:font-serif text-2xl text-gray-600 font-light">
          Blog Category
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <BlogCategory key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
        <p className="font-sans hover:font-serif text-2xl text-gray-600 font-light">
        BookReview Category
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bookReviews.map(post => (
            <BookReviewCategory key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
        <p className="font-sans hover:font-serif text-2xl text-gray-600 font-light">
        Development Category
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {developmentExperiences.map(post => (
            <DevelopmentExperienceCategory key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
