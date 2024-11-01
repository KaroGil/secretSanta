import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Secrete santa picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Secrete santa picker🎅</h1>

        <div>
          <Link href="/picker">
            <h3>Pick &rarr;</h3>
            <p>
              Ready to pick your next secrete santa pairings?🌟 <br />
              <i>Click here</i>
            </p>
          </Link>

          <Link href="/picks">
            <h3>See &rarr;</h3>
            <p>
              Forgot who you picked? 😬
              <br />
              <i>Click here</i>
            </p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" />
        </a>
      </footer>
    </div>
  );
}
