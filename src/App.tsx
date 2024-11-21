import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { SpaceCard } from './components/SpaceCard';
import type { Space } from './types';

const SAMPLE_SPACES: Space[] = [
  {
    id: '1',
    name: 'Modern Downtown Workspace',
    description: 'Bright, open-concept workspace in the heart of downtown with stunning city views.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    price: 25,
    capacity: 12,
    amenities: ['wifi', 'coffee', 'printer'],
    location: 'Downtown',
    rating: 4.9,
    reviews: 128,
    host: {
      name: 'Sarah Johnson',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    }
  },
  {
    id: '2',
    name: 'Creative Studio Hub',
    description: 'Inspiring creative space perfect for designers and content creators.',
    imageUrl: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2',
    price: 30,
    capacity: 8,
    amenities: ['wifi', 'coffee'],
    location: 'Arts District',
    rating: 4.7,
    reviews: 89,
    host: {
      name: 'Michael Chen',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  },
  {
    id: '3',
    name: 'Tech Innovation Space',
    description: 'High-tech workspace equipped with the latest amenities for tech professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    price: 35,
    capacity: 20,
    amenities: ['wifi', 'coffee', 'printer'],
    location: 'Tech District',
    rating: 4.8,
    reviews: 156,
    host: {
      name: 'Emily Parker',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find your perfect workspace</h2>
          <SearchBar />
        </div>
        
        <FilterBar />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {SAMPLE_SPACES.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>© 2024 cowork. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;