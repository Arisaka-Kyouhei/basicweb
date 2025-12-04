import { useState } from 'react';

interface EventSidebarProps {
  showGameGrid?: boolean;
}

export default function EventSidebar({ showGameGrid = false }: EventSidebarProps) {
  const [activeTab, setActiveTab] = useState<'event' | 'patch'>('event');

  const events = [
    {
      title: 'Event Title 1',
      detail: 'Event Detail Information',
      startDate: '2024.01.01',
      endDate: '2024.12.31',
    },
    {
      title: 'Event Title 2',
      detail: 'Event Detail Information',
      startDate: '2024.02.01',
      endDate: '2024.11.30',
    },
    {
      title: 'Event Title 3',
      detail: 'Event Detail Information',
      startDate: '2024.03.01',
      endDate: '2024.10.31',
    },
    {
      title: 'Event Title 4',
      detail: 'Event Detail Information',
      startDate: '2024.04.01',
      endDate: '2024.09.30',
    },
  ];

  return (
    <div>
      {showGameGrid && (
        <div className="mb-6">
          <div className="grid grid-cols-5 gap-2 mb-3">
            {Array.from({ length: 15 }).map((_, i) => (
              <button
                key={i}
                className="aspect-square bg-[#333333] rounded hover:bg-[#444444] transition-colors"
              />
            ))}
          </div>
          <button className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
            <span>▽ 더 보기</span>
          </button>
        </div>
      )}

      <h2 className="text-white text-xl font-semibold mb-4">이벤트</h2>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('event')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            activeTab === 'event'
              ? 'bg-[#90EE90] text-[#121212]'
              : 'bg-[#333333] text-white hover:bg-[#444444]'
          }`}
        >
          이벤트
        </button>
        <button
          onClick={() => setActiveTab('patch')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            activeTab === 'patch'
              ? 'bg-[#90EE90] text-[#121212]'
              : 'bg-[#333333] text-white hover:bg-[#444444]'
          }`}
        >
          패치 노트
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="bg-[#333333] rounded p-4">
            <h3 className="text-white font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{event.detail}</p>
            <p className="text-gray-500 text-xs">
              {event.startDate} - {event.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
