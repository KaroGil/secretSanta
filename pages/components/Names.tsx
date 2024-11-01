import NameForm from './NameForm';
import { matchSecretSanta } from '../utils/Match';

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
    <div>
      <div>
        <p>Here you can pick your secrete santa</p>
        <NameForm names={names} setNames={setNames} />
        <ul>
          {names.map((name, ind) => (
            <li key={ind}>
              <span>{name}</span>
              <button onClick={() => remove(ind)}>&reg;</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => submit()}>Pick</button>
      <button onClick={() => setNames([])}>Reset</button>
    </div>
  );
}
