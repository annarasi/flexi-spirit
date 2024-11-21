import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-white rounded-full shadow-lg p-2 flex items-center max-w-4xl mx-auto">
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Where are you looking?"
          className="w-full outline-none text-gray-700"
        />
      </div>
      
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Date & Time"
          className="w-full outline-none text-gray-700"
        />
      </div>
      
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <Users className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="number"
          placeholder="Number of people"
          className="w-full outline-none text-gray-700"
        />
      </div>
      
      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors mx-2">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}