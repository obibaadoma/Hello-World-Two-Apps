import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from Rails API
    const fetchGreeting = async () => {
      const response = await fetch('http://localhost:3000/random_greeting');
      const data = await response.json();
      setGreeting(data.greeting);
    };

    fetchGreeting();
  }, []);

  return <div>{greeting}</div>;
};

export default Greeting;
