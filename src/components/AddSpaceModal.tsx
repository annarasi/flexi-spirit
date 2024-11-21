import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import type { Space } from '../types';

interface AddSpaceModalProps {
  onClose: () => void;
  onAdd: (space: Partial<Space>) => void;
}

export function AddSpaceModal({ onClose, onAdd }: AddSpaceModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    capacity: '',
    location: '',
    amenities: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      price: Number(formData.price),
      capacity: Number(formData.capacity),
      rating: 0,
      reviews: 0,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c', // Default image
      host: {
        name: 'Current User', // This would come from auth
        rating: 0,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    });
  };

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">List Your Space</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Space Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-2 border rounded-lg"
              placeholder="e.g., Modern Downtown Office"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full p-2 border rounded-lg"
              rows={3}
              placeholder="Describe your space..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per Hour ($)</label>
              <input
                type="number"
                required
                min="1"
                value={formData.price}
                onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <input
                type="number"
                required
                min="1"
                value={formData.capacity}
                onChange={e => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full p-2 border rounded-lg"
              placeholder="e.g., Downtown, Business District"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
            <div className="flex flex-wrap gap-3">
              {['wifi', 'coffee', 'printer', 'parking'].map(amenity => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => toggleAmenity(amenity)}
                  className={`px-4 py-2 rounded-full border ${
                    formData.amenities.includes(amenity)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              List Space
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}