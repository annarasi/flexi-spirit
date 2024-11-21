import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { X, Clock } from 'lucide-react';
import type { Space, BookingDetails } from '../types';

interface BookingModalProps {
  space: Space;
  onClose: () => void;
  onBook: (booking: BookingDetails) => void;
}

export function BookingModal({ space, onClose, onBook }: BookingModalProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [duration, setDuration] = useState(1);
  const [people, setPeople] = useState(1);

  const calculateEndTime = (start: string, hours: number) => {
    const [h, m] = start.split(':').map(Number);
    const newHour = h + hours;
    return `${String(newHour).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  const handleBook = () => {
    const endTime = calculateEndTime(startTime, duration);
    const booking: BookingDetails = {
      spaceId: space.id,
      date,
      startTime,
      endTime,
      numberOfPeople: people,
      totalPrice: space.price * duration
    };
    onBook(booking);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Book {space.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <DatePicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              className="w-full p-2 border rounded-lg"
              minDate={new Date()}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full pl-10 p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
            <input
              type="number"
              min="1"
              max="8"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
            <input
              type="number"
              min="1"
              max={space.capacity}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">${space.price} × {duration} hours</span>
              <span className="font-semibold">${space.price * duration}</span>
            </div>
            <button
              onClick={handleBook}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirm Booking - ${space.price * duration}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}