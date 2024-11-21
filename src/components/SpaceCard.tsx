import React, { useState } from 'react';
import { Star, Users, Wifi, Coffee, Printer } from 'lucide-react';
import type { Space, BookingDetails } from '../types';
import { BookingModal } from './BookingModal';

interface SpaceCardProps {
  space: Space;
}

export function SpaceCard({ space }: SpaceCardProps) {
  const [showBooking, setShowBooking] = useState(false);

  const handleBook = (booking: BookingDetails) => {
    console.log('Booking details:', booking);
    // Here you would typically make an API call to save the booking
    setShowBooking(false);
    alert('Booking confirmed! Check your email for details.');
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48">
          <img 
            src={space.imageUrl} 
            alt={space.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md">
            <span className="font-semibold">${space.price}/hr</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{space.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{space.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{space.description}</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{space.capacity}</span>
            </div>
            <div className="flex gap-2">
              {space.amenities.includes('wifi') && <Wifi className="w-4 h-4 text-gray-600" />}
              {space.amenities.includes('coffee') && <Coffee className="w-4 h-4 text-gray-600" />}
              {space.amenities.includes('printer') && <Printer className="w-4 h-4 text-gray-600" />}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center">
              <img 
                src={space.host.imageUrl} 
                alt={space.host.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">Hosted by {space.host.name}</span>
            </div>
            <button 
              onClick={() => setShowBooking(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showBooking && (
        <BookingModal
          space={space}
          onClose={() => setShowBooking(false)}
          onBook={handleBook}
        />
      )}
    </>
  );
}