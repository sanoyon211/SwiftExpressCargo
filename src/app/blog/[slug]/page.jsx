import React from 'react';
import MainContent from '@/components/read-more/MainContent';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300">

      {/* 🔴 Navbar Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[85px] bg-[#0A0F1C] z-0"></div>

      {/* 🔴 Content Wrapper: Padding একদম কমিয়ে ব্যানার হাইটের সমান (85px) করা হয়েছে */}
      <div className="relative z-10 pt-[85px] pb-16">
        <MainContent post={post} />
      </div>

    </div>
  );
}