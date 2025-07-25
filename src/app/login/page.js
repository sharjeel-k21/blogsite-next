// app/login/page.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';
import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push('/'); // already logged in
    });
    return () => unsub();
  }, []);

  return <AuthForm />;
}
