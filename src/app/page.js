// // app/page.js
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { getAuth } from 'firebase/auth';
// import HomePage from './components/HomePage';

// export default function Page() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
    
//     // Check if there's an active session
//     const user = auth.currentUser;
    
//     if (!user) {
//       router.replace('/login');
//     } else {
//       setIsAuthenticated(true);
//     }
//     setLoading(false);
//   }, [router]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-pulse text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return isAuthenticated ? <HomePage /> : null;
// }


'use client'; // This component must be a client component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { auth } from '../../firebase'; // Import the initialized 'auth' instance
import HomePage from './components/HomePage';

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged is the most reliable way to observe auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
        router.replace('/login'); // Redirect to login if not authenticated
      }
      setLoading(false); // Set loading to false once the auth state is determined
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [router]); // Include router in dependency array as it's used inside useEffect

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  // Only render HomePage if isAuthenticated is true
  return isAuthenticated ? <HomePage /> : null;
}