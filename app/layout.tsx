import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Head from 'next/head'
import { Providers } from "./redux/provider";
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vu-Dev Blogs',
  description: 'Blogs about Computer Science, Programming, and Web Development',
  openGraph: {
    title: 'Vu-Dev Blogs',
    description: 'Blogs about Computer Science, Programming, and Web Development',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vu-Dev Blogs',
      },
    ],
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
