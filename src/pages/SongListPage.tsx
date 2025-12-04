import MainLayout from '../components/MainLayout';
import EventSidebar from '../components/EventSidebar';
import { Square } from 'lucide-react';

interface SongListPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function SongListPage({ onNavigate }: SongListPageProps) {
  const songItems = [
    {
      rank: 'S+',
      title: 'Song Title Alpha',
      score: '1,000,000',
      dlc: 'PREMIUM DLC PACK',
    },
    {
      rank: 'S',
      title: 'Song Title Beta',
      score: '999,500',
      dlc: 'STANDARD DLC PACK',
    },
    {
      rank: 'A+',
      title: 'Song Title Gamma',
      score: '998,200',
      dlc: 'SPECIAL DLC PACK',
    },
    {
      rank: 'A',
      title: 'Song Title Delta',
      score: '997,100',
      dlc: 'PREMIUM DLC PACK',
    },
    {
      rank: 'B+',
      title: 'Song Title Epsilon',
      score: '995,800',
      dlc: 'STANDARD DLC PACK',
    },
  ];

  return (
    <MainLayout
      onNavigate={onNavigate}
      currentPage="song"
      sidebar={<EventSidebar showGameGrid={true} />}
    >
      <div className="space-y-4">
        {songItems.map((item, index) => (
          <div key={index} className="bg-[#333333] rounded p-6 flex gap-6">
            <div className="w-32 h-32 bg-[#555555] rounded flex-shrink-0 flex items-center justify-center">
              <Square className="text-gray-400" size={48} />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#90EE90] font-semibold">{item.rank}</span>
                    <span className="text-gray-400">Score: {item.score}</span>
                  </div>
                </div>
                <span className="bg-[#555555] text-gray-400 text-xs px-3 py-1 rounded">
                  UPTIME
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="bg-[#121212] rounded px-4 py-2 inline-block">
                  <span className="text-gray-400 text-sm">REQUIRE DLC: </span>
                  <span className="text-white text-sm font-medium">{item.dlc}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
