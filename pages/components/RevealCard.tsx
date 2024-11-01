import React, { useState } from 'react';

export default function RevealCard({ giver, reciever }) {
  const [reavealed, setRevealed] = useState(false);
  const [delay, setDelay] = useState(0);

  const reveal = () => {
    setRevealed(true);
    setDelay(10);

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
    <div>
      <div>
        <h1>RevealCard - {giver}</h1>
        {reavealed ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Here is your secrete santa</p>
            <p>{reciever} </p>
            <p>Time remaining: {delay} seconds</p>
          </div>
        ) : (
          <div>
            <p>Here you can reveal your secrete santa</p>
            <button onClick={reveal}>Reveal</button>
          </div>
        )}
      </div>
    </div>
  );
}
