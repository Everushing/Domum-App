import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  image: string;
}

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('https://api.repliers.io/listings', {
          headers: {
            'REPLIERS-API-KEY': '9wUqBE1RKLGIaVSM7ZOIpaxbmOPjYv',
            'Content-Type': 'application/json',
          },
        });
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((listing) => (
        <div key={listing.id} className="bg-white shadow-md rounded-md p-4">
          <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-bold">{listing.title}</h2>
          <p className="text-gray-600 mb-2">{listing.location}</p>
          <p className="text-gray-700 mb-2">Price: ${listing.price}</p>
          <p className="text-gray-700 mb-2">Bedrooms: {listing.bedrooms}</p>
          <p className="text-gray-700">{listing.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Listings;
