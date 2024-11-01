import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealCard from '../components/RevealCard';
import { useState } from 'react';
import Button from '../components/Button';
import React from 'react';
import Link from 'next/link';

export default function Picks() {
  let names = [];
  if (typeof window != 'undefined') {
    names = JSON.parse(sessionStorage.getItem('matches'));
  }
  const [reveal, setReveal] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [correspondingPair, setCorrespondingPair] = useState('');

  const handleClick = (giver, reciever) => {
    setSelectedName(giver);
    setCorrespondingPair(reciever);
    setReveal(true);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Picks</h1>{' '}
        <p className="text-gray-600 mb-8">
          Here you can see who you have picked
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {names.length == 0 ? (
            <Link href="/picker" className="underline">
              No picks yet
            </Link>
          ) : (
            names.map((pair, ind) => (
              <Button
                key={ind}
                text={pair.name}
                clickFunction={() => handleClick(pair.name, pair.secretSanta)}
              />
            ))
          )}
        </div>
        {reveal ? (
          <RevealCard giver={selectedName} reciever={correspondingPair} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
