import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Property {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    axios.get('/api/properties').then((response) => {
      setProperties(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <div key={property.id} className="bg-white shadow-md p-4">
          <img src={property.imageUrl} alt={property.name} className="w-full h-64 object-cover mb-2" />
          <h2 className="text-xl font-bold">{property.name}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-gray-800">${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;