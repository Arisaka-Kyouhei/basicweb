import { User, Mail, Lock, CheckCircle } from 'lucide-react';

interface SignUpPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function SignUpPage({ onNavigate }: SignUpPageProps) {
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

          <div className="space-y-4">
            <div className="flex items-center bg-[#121212] rounded px-4 py-3">
              <User className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="ID"
                className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center bg-[#121212] rounded px-4 py-3">
              <Mail className="text-gray-400 mr-3" size={20} />
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center bg-[#121212] rounded px-4 py-3">
              <Lock className="text-gray-400 mr-3" size={20} />
              <input
                type="password"
                placeholder="PW"
                className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center bg-[#121212] rounded px-4 py-3">
              <CheckCircle className="text-gray-400 mr-3" size={20} />
              <input
                type="password"
                placeholder="PW CHECK"
                className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onNavigate('login')}
                className="text-white hover:text-gray-300 text-sm font-semibold transition-colors"
              >
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
