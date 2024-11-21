import React, { useState } from 'react';
import { Menu, UserCircle, PlusCircle } from 'lucide-react';
import { AddSpaceModal } from './AddSpaceModal';
import type { Space } from '../types';

export function Header() {
  const [showAddSpace, setShowAddSpace] = useState(false);

  const handleAddSpace = (space: Partial<Space>) => {
    console.log('New space:', space);
    // Here you would typically make an API call to save the space
    setShowAddSpace(false);
    alert('Space listed successfully!');
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">cowork</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowAddSpace(true)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                <span>List your space</span>
              </button>
              
              <div className="flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Menu className="w-5 h-5 text-gray-500" />
                <UserCircle className="w-8 h-8 text-gray-500 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {showAddSpace && (
        <AddSpaceModal
          onClose={() => setShowAddSpace(false)}
          onAdd={handleAddSpace}
        />
      )}
    </>
  );
}