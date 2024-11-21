import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

interface AuthModalProps {
  onClose: () => void;
  mode?: 'signin' | 'signup';
}

export function AuthModal({ onClose, mode = 'signin' }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(mode === 'signin');
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onClose();
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isSignIn ? 'Sign In' : 'Create Account'}
          </button>

          <p className="text-center text-sm text-gray-600">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}