import Link from 'next/link';

export default function ({ link, title, description }) {
  return (
    <Link
      href={link}
      className="border border-gray-200 rounded-lg basis-5/12	text-inherit p-6 text-left m-4 min-h-52  hover:bg-gray-100 transition duration-200"
    >
      <h3 className="text-2xl font-semibold mb-2">{title} &rarr;</h3>
      <p>{description}</p>
    </Link>
  );
}