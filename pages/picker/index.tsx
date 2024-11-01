import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import RevealCard from '../components/RevealCard';
import Names from '../components/Names';
import Button from '../components/Button';
import React from 'react';

export default function Picker() {
  const [names, setNames] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [pick, setPick] = useState(true);

  sessionStorage.setItem('matches', JSON.stringify(pairs));

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold m-4">Picker</h1>
        {pick ? (
          <Names
            names={names}
            setNames={setNames}
            setPairs={setPairs}
            setPick={setPick}
          />
        ) : (
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              {pairs.length === 0 ? (
                <p className="text-gray-600 mb-8">
                  You have to enter multiple people for a match
                </p>
              ) : null}
              {pairs.map((pair, ind) => (
                <RevealCard
                  key={ind}
                  giver={pair.name}
                  reciever={pair.secretSanta}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                text={'Back to namelist'}
                clickFunction={() => setPick(true)}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
