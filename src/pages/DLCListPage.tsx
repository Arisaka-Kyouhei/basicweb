import MainLayout from '../components/MainLayout';
import EventSidebar from '../components/EventSidebar';
import { Square } from 'lucide-react';

interface DLCListPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function DLCListPage({ onNavigate }: DLCListPageProps) {
  const dlcItems = [
    {
      rank: 'S+',
      title: 'Song Title 1',
      score: '999,999',
      dlc: 'DLC PACK NAME A',
    },
    {
      rank: 'S',
      title: 'Song Title 2',
      score: '998,888',
      dlc: 'DLC PACK NAME B',
    },
    {
      rank: 'A+',
      title: 'Song Title 3',
      score: '997,777',
      dlc: 'DLC PACK NAME C',
    },
    {
      rank: 'A',
      title: 'Song Title 4',
      score: '996,666',
      dlc: 'DLC PACK NAME A',
    },
  ];

  return (
    <MainLayout
      onNavigate={onNavigate}
      currentPage="dlc"
      sidebar={<EventSidebar showGameGrid={true} />}
    >
      <div className="space-y-4">
        {dlcItems.map((item, index) => (
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
