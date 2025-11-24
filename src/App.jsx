import React, { useState, useMemo } from 'react';
import { Home, LayoutGrid, Inbox, Star, Search, Plus, Image as ImageIcon, Link as LinkIcon, FileText, MoreHorizontal, X, ArrowUp } from 'lucide-react';

// --- MOCK DATA (Safe Mode) ---
const generateMockItems = () => [
  { id: '1', content: 'Minimalist UI Inspiration', type: 'image', category: 'Design', tags: ['ui', 'minimal'], isStarred: true, createdAt: new Date(), mediaUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80' },
  { id: '2', content: 'React Hooks Cheatsheet', type: 'link', category: 'Dev', tags: ['react', 'code'], isStarred: false, createdAt: new Date(), notes: 'Very useful for useMemo examples.' },
  { id: '3', content: 'Meeting notes: Q4 Roadmap', type: 'text', category: 'Work', tags: ['planning'], isStarred: false, createdAt: new Date(), notes: 'Focus on mobile responsiveness.' },
];

const ItemCard = ({ item }) => (
  <div className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden'>
    {item.mediaUrl && <div className='h-48 bg-gray-100'><img src={item.mediaUrl} className='w-full h-full object-cover' /></div>}
    <div className='p-4'>
      <span className='text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase'>{item.category}</span>
      <h3 className='font-bold text-gray-900 mt-2'>{item.content}</h3>
      {item.notes && <p className='text-sm text-gray-500 mt-1'>{item.notes}</p>}
    </div>
  </div>
);

export default function ValtoraApp() {
  const [items, setItems] = useState(generateMockItems());
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className='flex h-screen bg-white text-gray-900 font-sans overflow-hidden'>
      {/* Sidebar */}
      <aside className='w-64 bg-gray-50 border-r border-gray-200 p-5 hidden md:flex flex-col'>
        <div className='flex items-center gap-3 mb-8'><div className='w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold'>V</div><span className='font-bold text-xl'>Valtora</span></div>
        <nav className='space-y-1'>
          <button onClick={() => setCurrentView('home')} className={'w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium ' + (currentView === 'home' ? 'bg-gray-200' : 'text-gray-500 hover:bg-gray-100')}><Home size={18} /> Home</button>
          <button onClick={() => setCurrentView('boards')} className={'w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium ' + (currentView === 'boards' ? 'bg-gray-200' : 'text-gray-500 hover:bg-gray-100')}><LayoutGrid size={18} /> Boards</button>
        </nav>
      </aside>

      {/* Main */}
      <main className='flex-1 flex flex-col relative'>
        <header className='h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md'>
           <h1 className='font-bold text-xl capitalize'>{currentView}</h1>
           <div className='text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full'>System Active</div>
        </header>
        <div className='p-6 overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {items.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
      </main>
    </div>
  );
}
