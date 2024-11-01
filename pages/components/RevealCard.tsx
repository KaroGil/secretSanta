import React, { useState } from 'react';
import Button from './Button';

export default function RevealCard({
  giver,
  reciever,
}: {
  giver: string;
  reciever: string;
}) {
  const [reavealed, setRevealed] = useState(false);
  const [delay, setDelay] = useState(0);

  const reveal = () => {
    setRevealed(true);
    setDelay(5);

    const timer = setInterval(() => {
      setDelay((prev) => {
        if (prev === 1) {
          clearInterval(timer); // Clear the interval when countdown reaches 1
          setRevealed(false); // Reset `revealed` and `person`
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center m-4">
      <h1 className="text-xl font-semibold mb-4">RevealCard - {giver}</h1>
      {reavealed ? (
        <div>
          <p className="text-gray-700 mb-2">Here is your secret santa</p>
          <p className="text-blue-500 font-bold text-lg mb-2">{reciever} </p>
          <p className="text-gray-500">Time remaining: {delay} seconds</p>
        </div>
      ) : (
        <div>
          <p className="text-gray-700 mb-4">
            Here you can reveal your secret santa
          </p>
          <Button text={'Reveal'} clickFunction={reveal} />
        </div>
      )}
    </div>
  );
}
