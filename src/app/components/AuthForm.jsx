'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, pass);
        alert('Login successful');
      } else {
        await createUserWithEmailAndPassword(auth, email, pass);
        alert('Signup successful');
      }
      router.push('/'); // redirect to homepage
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      
      <input
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      
      <input
        className="w-full mb-3 p-2 border rounded"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        type="password"
      />
      
      <button
        onClick={handleAuth}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      <p className="mt-4 text-sm text-center">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          className="text-blue-500 underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}
