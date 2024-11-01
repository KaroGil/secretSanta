import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealCard from '../components/RevealCard';
import { useState } from 'react';
import Button from '../components/Button';
import React from 'react';

export default function Picks() {
  const names = ['Person A', 'Person B', 'Person C', 'Person D', 'Person E'];
  const [reveal, setReveal] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Picks</h1>{' '}
        <p className="text-gray-600 mb-8">
          Here you can see who you have picked
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {names.map((name, ind) => (
            <Button
              key={ind}
              text={name}
              clickFunction={() => setReveal(!reveal)}
            />
          ))}
        </div>
        {reveal ? (
          <RevealCard giver={'Person 1'} reciever={'Person 2'} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
