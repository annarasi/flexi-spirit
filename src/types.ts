export interface Space {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  capacity: number;
  amenities: string[];
  location: string;
  rating: number;
  reviews: number;
  host: {
    name: string;
    rating: number;
    imageUrl: string;
  };
  availability?: TimeSlot[];
}

export interface TimeSlot {
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface BookingDetails {
  spaceId: string;
  date: Date;
  startTime: string;
  endTime: string;
  numberOfPeople: number;
  totalPrice: number;
}