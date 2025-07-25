import React from 'react';  
import Blog from '@/app/components/Blog';
import { blogs } from '@/app/data/blogs';


export async function generateStaticParams() {
  return blogs.map(blog => ({ id: blog.id.toString() }));
}

export default function BlogPage({ params }) {
  const blog = blogs.find(b => b.id.toString() === params.id);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return <Blog blog={blog} />;
}
