import '../../../../globals.scss';
import '../../../../details-page.scss';

interface Params {
  type: string;
  sale: string;
  location: string;
  address: string;
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type, sale, location, address } = await params;

  // Replace this with a real fetch.
  const property = {
    bedrooms: 3,
    bathrooms: 2,
    price: '£350,000',
  };

  return (
    <main className="details-page">
      <h2>{address.replace('-', ' ')}</h2>
      <p>
        {type} {sale.replace('-', ' ')} in {location}
      </p>

      <ul>
        <li>Bedrooms: {property.bedrooms}</li>
        <li>Bathrooms: {property.bathrooms}</li>
        <li>Price: {property.price}</li>
      </ul>
    </main>
  );
}
