import Link from 'next/link';
import '../../../globals.scss';
import '../../../search-results.scss';

interface Params {
  type: string;
  sale: string;
  location: string;
}

export default async function SearchResultsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type, sale, location } = await params;

  // Dummy data—replace with a real fetch call.
  const listings = [
    { address: '10 High St', id: '10-high-st' },
    { address: '20 Market Rd', id: '20-market-rd' }
  ];

  return (
    <main className="search-results">
      <h2>
        {type} {sale.replace('-', ' ')} in {location}
      </h2>

      <ul>
        {listings.map((item) => (
          <li key={item.id}>
            <Link href={`/${type}/${sale}/${location}/${item.id}`}>
              {item.address}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
