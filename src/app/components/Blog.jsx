"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from "./ThemeProvider";

const Blog = ({ blog }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-700 dark:text-gray-200 
                     hover:text-blue-600 dark:hover:text-blue-400
                     font-medium transition-colors duration-200
                     group"
          >
            <svg 
              className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <header className="mb-8">
            <h1 className="text-4xl text-gray-700 md:text-5xl font-bold dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 
                          border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 
                              rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-gray-700 dark:text-white font-medium">
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </p>
                </div>
              </div>
              
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={blog.date}>{blog.date}</time>
              </div>
              
              {blog.readTime && (
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {blog.readTime} min read
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {blog.image && (
            <div className="mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg
                         ring-1 ring-gray-200 dark:ring-gray-700"
                loading="lazy"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm 
                        border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            
            {/* Attention Getter / Lead */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 
                          leading-relaxed font-light border-l-4 border-blue-500 
                          pl-6 italic bg-blue-50 dark:bg-blue-900/20 py-4 rounded-r-lg">
                {blog.attentionGetter}
              </p>
            </div>

            {/* Main Content-mostly tailwind is generated using claude */}
            <div className="prose prose-lg max-w-none 
                          prose-headings:text-gray-900 dark:prose-headings:text-white
                          prose-p:text-gray-700 dark:prose-p:text-gray-300
                          prose-p:leading-relaxed prose-p:mb-6
                          prose-strong:text-gray-900 dark:prose-strong:text-white
                          prose-a:text-blue-600 dark:prose-a:text-blue-400
                          prose-a:no-underline hover:prose-a:underline
                          prose-blockquote:border-l-blue-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800
                          prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                          prose-code:text-pink-600 dark:prose-code:text-pink-400
                          prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
                          prose-img:rounded-lg prose-img:shadow-md">
              
              {/* Handle different content types */}
              {typeof blog.fullDescription === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: blog.fullDescription.replace(/\n/g, '<br />') }} />
              ) : (
                blog.fullDescription
              )}
            </div>
          </div>

          {/* Blog Footer / CTA */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 
                          dark:from-blue-900/20 dark:to-purple-900/20 
                          rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Enjoyed this article?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check out more amazing content on our blog
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 
                         bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                         text-white font-medium rounded-lg
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         dark:focus:ring-offset-gray-800"
              >
                View All Posts
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default Blog;