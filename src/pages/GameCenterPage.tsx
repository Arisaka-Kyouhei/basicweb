import MainLayout from '../components/MainLayout';
import EventSidebar from '../components/EventSidebar';

interface GameCenterPageProps {
  onNavigate: (page: 'login' | 'signup' | 'dlc' | 'song' | 'gamecenter') => void;
}

export default function GameCenterPage({ onNavigate }: GameCenterPageProps) {
  const gameCenters = [
    {
      name: 'Game Center Alpha',
      location: 'Seoul, Gangnam District, Street Address 123',
      distance: '0.5km',
      distColor: 'green',
    },
    {
      name: 'Game Center Beta',
      location: 'Seoul, Hongdae Area, Street Address 456',
      distance: '1.2km',
      distColor: 'orange',
    },
    {
      name: 'Game Center Gamma',
      location: 'Seoul, Itaewon District, Street Address 789',
      distance: '2.8km',
      distColor: 'green',
    },
    {
      name: 'Game Center Delta',
      location: 'Seoul, Sinchon Area, Street Address 321',
      distance: '3.5km',
      distColor: 'orange',
    },
    {
      name: 'Game Center Epsilon',
      location: 'Seoul, Myeongdong District, Street Address 654',
      distance: '4.1km',
      distColor: 'green',
    },
  ];

  return (
    <MainLayout
      onNavigate={onNavigate}
      currentPage="gamecenter"
      sidebar={<EventSidebar showGameGrid={true} />}
    >
      <div className="space-y-4">
        {gameCenters.map((center, index) => (
          <div key={index} className="bg-[#333333] rounded p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">{center.name}</h3>
                <p className="text-gray-400 text-sm">{center.location}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded font-medium ${
                  center.distColor === 'green'
                    ? 'bg-[#90EE90] text-[#121212]'
                    : 'bg-orange-500 text-white'
                }`}
              >
                DIST: {center.distance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
