import Link from 'next/link';
import './globals.scss';

export default function Home() {
  return (
    <main className="home">
      <h1>Welcome to Property Finder</h1>
      <p>Use the links below to browse listings.</p>

      {/* Example link to a search result */}
      <Link href="/house/for-sale/leicester">
        See Houses for Sale in Leicester
      </Link>
    </main>
  );
}
