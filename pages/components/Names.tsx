import React from 'react';
import NameForm from './NameForm';
import { matchSecretSanta } from '../../utils/Match';
import Button from './Button';

export default function Names({
  names,
  setNames,
  setPairs,
  setPick,
}: {
  names: string[];
  setNames: (names: string[]) => void;
  setPairs: (pairs: { name: string; secretSanta: string }[]) => void;
  setPick: (pick: boolean) => void;
}) {
  const remove = (ind) => {
    setNames(names.filter((_, index) => index !== ind));
  };

  const submit = () => {
    const pairs = matchSecretSanta(names);
    setPick(false);
    setPairs(pairs);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-80 mb-8 text-center">
      <p className="text-gray-700 mb-4">Here you can pick your secrete santa</p>
      <NameForm names={names} setNames={setNames} />
      <ul className="list-none p-0 mt-4">
        {names &&
          names.map((name, ind) => (
            <li key={ind} className="flex justify-between items-center mb-2">
              <span className="text-gray-800">{name}</span>
              <button
                onClick={() => remove(ind)}
                className="text-red-500 hover:text-red-700"
              >
                &reg;
              </button>
            </li>
          ))}
      </ul>
      <div className="flex justify-between">
        <Button text={'Pick'} clickFunction={() => submit()} />
        <Button text={'Reset'} clickFunction={() => setNames([])} />
      </div>
    </div>
  );
}
