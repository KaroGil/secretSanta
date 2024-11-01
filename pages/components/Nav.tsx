import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">🎅</Link>
      <ul>
        <li>
          <Link href="/picker">Picker</Link>
        </li>
        <li>
          <Link href="/picks">Picks</Link>
        </li>
      </ul>
    </nav>
  );
}
