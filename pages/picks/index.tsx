import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealCard from '../components/RevealCard';
import { useState } from 'react';

export default function Picks() {
  const names = ['Person A', 'Person B', 'Person C', 'Person D', 'Person E'];
  const [reveal, setReveal] = useState(false);
  return (
    <div>
      <Nav />
      <div>
        <h1>Picks</h1>
        <div>
          <p>Here you can see who you have picked</p>
          {names.map((name, ind) => (
            <button onClick={() => setReveal(!reveal)}>{name}</button>
          ))}
          {reveal ? (
            <RevealCard giver={'Person 1'} reciever={'Person 2'} />
          ) : null}
        </div>
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
