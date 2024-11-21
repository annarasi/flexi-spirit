import React from 'react';
import { Wifi, Coffee, Printer, Car, Battery } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="flex items-center gap-4 py-4 overflow-x-auto">
      <button className="flex items-center px-4 py-2 rounded-full border hover:border-blue-600 hover:text-blue-600 transition-colors">
        <Wifi className="w-4 h-4 mr-2" />
        <span>WiFi</span>
      </button>
      
      <button className="flex items-center px-4 py-2 rounded-full border hover:border-blue-600 hover:text-blue-600 transition-colors">
        <Coffee className="w-4 h-4 mr-2" />
        <span>Coffee</span>
      </button>
      
      <button className="flex items-center px-4 py-2 rounded-full border hover:border-blue-600 hover:text-blue-600 transition-colors">
        <Printer className="w-4 h-4 mr-2" />
        <span>Printer</span>
      </button>
      
      <button className="flex items-center px-4 py-2 rounded-full border hover:border-blue-600 hover:text-blue-600 transition-colors">
        <Car className="w-4 h-4 mr-2" />
        <span>Parking</span>
      </button>
      
      <button className="flex items-center px-4 py-2 rounded-full border hover:border-blue-600 hover:text-blue-600 transition-colors">
        <Battery className="w-4 h-4 mr-2" />
        <span>EV Charging</span>
      </button>
    </div>
  );
}