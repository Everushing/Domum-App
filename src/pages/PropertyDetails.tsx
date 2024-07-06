import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Listing {
  id: number;
  title: string;
  description: string;
  // Add more fields as per your API response
}

const PropertyDetails: React.FC = () => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Replace with your actual API endpoint and API key
        const response = await axios.get('https://api.repliers.io/listings/1', {
          headers: {
            'REPLIERS-API-KEY': '9wUqBE1RKLGIaVSM7ZOIpaxbmOPjYv',
            'Content-Type': 'application/json',
          },
        });
        setListing(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch listing:', error);
        setLoading(false);
      }
    };

    fetchListing();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      {/* Render other fields as needed */}
    </div>
  );
};

export default PropertyDetails;
