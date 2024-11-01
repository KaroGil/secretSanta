import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full space-x-4 flex flex-row items-center justify-center p-4 bg-white shadow-md">
      <Link href="/">🎅</Link>
      <div className="flex flex-row space-x-4">
        <Link className="hover:text-gray-700" href="/picker">
          Picker
        </Link>
        <Link className="hover:text-gray-700" href="/picks">
          Picks
        </Link>
      </div>
    </nav>
  );
}
