// src/pages/PropertyDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Listing {
  id: number;
  title: string;
  description: string;
  // Add more fields as per your API response
}

const PropertyDetails: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`https://api.repliers.io/listings/${id}`, {
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
  }, [id]);

  if (loading) {
    return <div>{t('propertyDetails.loading')}</div>;
  }

  if (!listing) {
    return <div>{t('propertyDetails.notFound')}</div>;
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
