import { useState } from 'react';
import { User, Lock, CheckCircle } from 'lucide-react';

interface SignUpPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function SignUpPage({ onNavigate }: SignUpPageProps) {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password, username }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        onNavigate('song');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <header className="flex justify-end p-6">
        <button
          onClick={() => onNavigate('login')}
          className="text-white text-sm hover:text-gray-300 transition-colors"
        >
          LOGIN
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-4xl font-bold mb-12">WELCOME!</h1>

        <div className="bg-[#333333] rounded p-8 w-full max-w-xl">
          <h2 className="text-white text-xl font-semibold mb-6">SIGN UP</h2>

          <form onSubmit={handleSignup}>
            <div className="space-y-4">
              <div className="flex items-center bg-[#121212] rounded px-4 py-3">
                <User className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex items-center bg-[#121212] rounded px-4 py-3">
                <User className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex items-center bg-[#121212] rounded px-4 py-3">
                <Lock className="text-gray-400 mr-3" size={20} />
                <input
                  type="password"
                  placeholder="PW"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex items-center bg-[#121212] rounded px-4 py-3">
                <CheckCircle className="text-gray-400 mr-3" size={20} />
                <input
                  type="password"
                  placeholder="PW CHECK"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="text-white hover:text-gray-300 text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? 'LOADING...' : 'SIGNUP'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
