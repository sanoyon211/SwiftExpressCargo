import React from 'react';
import MainContent from '@/components/read-more/MainContent';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

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
    <>
      <MainContent post={post} />
    </>
  );
}
