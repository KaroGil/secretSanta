import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-white p-4 border-b border-gray-200 flex justify-center items-center">
      <Link href="/" className="text-2xl">
        🎅
      </Link>
      <div className="flex">
        <Link
          className="text-gray-800 font-medium text-lg px-4 py-2"
          href="/picker"
        >
          Picker
        </Link>
        <Link
          className="text-gray-800 font-medium text-lg px-4 py-2"
          href="/picks"
        >
          Picks
        </Link>
      </div>
    </nav>
  );
}
