import React, { useState } from 'react';
import { X } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import type { BookingDetails } from '../../types';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

interface PaymentModalProps {
  booking: BookingDetails;
  onClose: () => void;
  onSuccess: () => void;
}

export function PaymentModal({ booking, onClose, onSuccess }: PaymentModalProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make an API call to your backend to create a payment intent
      // const response = await fetch('/api/create-payment-intent', ...);
      // const { clientSecret } = await response.json();

      // const { error } = await stripe.confirmPayment({
      //   clientSecret,
      //   elements,
      // });

      // if (error) throw error;
      
      onSuccess();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Complete Payment</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-medium mb-2">Booking Summary</h4>
            <p className="text-gray-600">Total Amount: ${booking.totalPrice}</p>
          </div>

          {/* Stripe Elements would go here */}
          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <p className="text-sm text-gray-600">Card details form would be here</p>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : `Pay $${booking.totalPrice}`}
          </button>
        </div>
      </div>
    </div>
  );
}