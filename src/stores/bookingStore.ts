import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { BookingDetails } from '../types';

interface BookingState {
  bookings: BookingDetails[];
  loading: boolean;
  createBooking: (booking: BookingDetails) => Promise<void>;
  fetchUserBookings: (userId: string) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  loading: false,
  createBooking: async (booking) => {
    set({ loading: true });
    const { error } = await supabase
      .from('bookings')
      .insert([booking]);
    if (error) throw error;
    set((state) => ({
      bookings: [...state.bookings, booking],
      loading: false,
    }));
  },
  fetchUserBookings: async (userId) => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('userId', userId);
    if (error) throw error;
    set({ bookings: data, loading: false });
  },
}));