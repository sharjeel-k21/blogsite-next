'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { blogs } from '../data/blogs';
import { useTheme } from "./ThemeProvider";
import { auth } from '../../../firebase'; // Import the initialized 'auth' instance

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Call Firebase signOut with your auth instance
      console.log("User signed out successfully!");
      router.replace('/login'); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out:", error.message);
      // You might want to display an error message to the user here
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-gray-900 dark:text-white font-bold text-xl">
                Blog Space
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <button 
                  onClick={toggleDarkMode}
                  className="flex items-center px-3 py-2 rounded-lg text-sm font-medium 
                           text-gray-700 dark:text-gray-200 
                           hover:text-gray-900 dark:hover:text-white
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           transition-colors duration-200"
                  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                >
                  <span className="mr-2">
                    {darkMode ? '☀️' : '🌙'}
                  </span>
                  {darkMode ? 'Light' : 'Dark'}
                </button>
                
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-200 
                           hover:text-gray-900 dark:hover:text-white
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           px-3 py-2 rounded-lg text-sm font-medium
                           transition-colors duration-200"
                >
                  Home
                </Link>
                
                <Link 
                  href="/categories" 
                  className="text-gray-700 dark:text-gray-200 
                           hover:text-gray-900 dark:hover:text-white
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           px-3 py-2 rounded-lg text-sm font-medium
                           transition-colors duration-200"
                >
                  Categories
                </Link>
                
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-200 
                           hover:text-gray-900 dark:hover:text-white
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           px-3 py-2 rounded-lg text-sm font-medium
                           transition-colors duration-200"
                >
                  About
                </Link>
                  <button
        onClick={handleSignOut}
        className="px-3 py-1 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300"
      >
        Sign Out
      </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         transition-colors duration-200"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg 
                         text-gray-700 dark:text-gray-200 
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
                         transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-200 
                       hover:text-gray-900 dark:hover:text-white
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       block px-3 py-2 rounded-lg text-base font-medium
                       transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="/categories" 
              className="text-gray-700 dark:text-gray-200 
                       hover:text-gray-900 dark:hover:text-white
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       block px-3 py-2 rounded-lg text-base font-medium
                       transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-200 
                       hover:text-gray-900 dark:hover:text-white
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       block px-3 py-2 rounded-lg text-base font-medium
                       transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="signOut text-gray-700 dark:text-gray-200 
                       hover:text-gray-900 dark:hover:text-white
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       block px-3 py-2 rounded-lg text-base font-medium
                       transition-colors duration-200" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white dark:bg-gray-800 
                       p-6 rounded-xl shadow-sm hover:shadow-lg 
                       border border-gray-200 dark:border-gray-700
                       transition-all duration-300 hover:scale-[1.02]
                       group"
            >
              <Link href={`/blog/${blog.id}`} className="block">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white 
                             mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400
                             transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h2>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span>By {blog.author}</span>
                  <span className="mx-2">•</span>
                  <time>{blog.date}</time>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
                  {blog.attentionGetter}
                </p>
                
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 
                              text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300
                              transition-colors duration-200">
                  Read more
                  <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;