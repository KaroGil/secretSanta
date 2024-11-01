import Head from 'next/head';
import Footer from './components/Footer';
import Card from './components/Card';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>Secrete santa picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-5xl font-bold mb-8">
          Secrete santa picker
          <span role="img" aria-label="Santa">
            🎅
          </span>
        </h1>

        <div className="flex space-x-8 justify-center">
          <Card
            link="/picker"
            title="Pick"
            description="Ready to pick your next secrete santa pairings? 🌟"
          />
          <Card
            link="/picks"
            title="See"
            description="Forgot who you picked? 😬"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
