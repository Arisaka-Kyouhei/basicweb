import { User, Lock } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <header className="flex justify-end p-6">
        <button className="text-white text-sm hover:text-gray-300 transition-colors">
          LOGIN
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-4xl font-bold mb-12">WELCOME BACK</h1>

        <div className="bg-[#333333] rounded p-8 w-full max-w-2xl">
          <h2 className="text-white text-xl font-semibold mb-6">LOGIN</h2>

          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center bg-[#121212] rounded px-4 py-3">
                <User className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="ID"
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

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => onNavigate('signup')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  SIGNUP
                </button>
                <button
                  onClick={() => onNavigate('dlc')}
                  className="text-white hover:text-gray-300 text-sm font-semibold transition-colors"
                >
                  LOGIN
                </button>
              </div>
            </div>

            <div className="w-48 bg-[#555555] rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">소셜로그인 메뉴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
