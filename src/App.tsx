import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DLCListPage from './pages/DLCListPage';
import SongListPage from './pages/SongListPage';
import GameCenterPage from './pages/GameCenterPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'dlc' | 'song' | 'gamecenter'>('song');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setCurrentPage('login');
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUpPage onNavigate={setCurrentPage} />;
      case 'dlc':
        return <DLCListPage onNavigate={setCurrentPage} />;
      case 'song':
        return <SongListPage onNavigate={setCurrentPage} />;
      case 'gamecenter':
        return <GameCenterPage onNavigate={setCurrentPage} />;
      default:
        return <LoginPage onNavigate={setCurrentPage} />;
    }
  };

  return <div className="min-h-screen bg-[#121212]">{renderPage()}</div>;
}

export default App;
