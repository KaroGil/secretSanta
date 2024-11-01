import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import RevealCard from '../components/RevealCard';
import Names from '../components/Names';

export default function Picker() {
  const [names, setNames] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [pick, setPick] = useState(true);
  return (
    <div>
      <Nav />
      <div>
        <h1>Picker</h1>
        {pick ? (
          <Names
            names={names}
            setNames={setNames}
            setPairs={setPairs}
            setPick={setPick}
          />
        ) : (
          <div>
            {pairs.map((pair, ind) => (
              <RevealCard
                key={ind}
                giver={pair.name}
                reciever={pair.secretSanta}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
