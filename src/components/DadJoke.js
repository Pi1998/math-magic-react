import React, { useState, useEffect } from 'react';

const DadJoke = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDadJoke = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
          headers: { 'X-Api-Key': 'O0LeNS4Yf4srFvUkr0ftng==HYT2JLZ8PEoTdFDa' },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dad joke');
        }

        const data = await response.json();
        setJoke(data[0].joke);
        setLoading(false);
      } catch (error) {
        setError('Error fetching dad joke');
        setLoading(false);
      }
    };

    fetchDadJoke();
  }, []);

  if (loading) {
    return <p>Loading dad joke...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <p>{joke}</p>;
};

export default DadJoke;
