// Don't export `dynamic` - should behave the same as `dynamic = 'auto'`
// export const dynamic = 'auto';
import Link from 'next/link';

export default function Page() {
  console.log('Rendering page without exporting dynamic');

  return (
    <div className="container mx-auto py-20">
      <h1>[none]</h1>
      <p>
        Not using <code>export const dynamic</code>
      </p>
      <h2>Other options:</h2>
      <ul>
        <li>
          <Link href='/auto'>'auto'</Link>
        </li>
        <li>
          <Link href='/force-dynamic'>'force-dynamic'</Link>
        </li>
        <li>
          <Link href='/force-static'>'force-static'</Link>
        </li>
        <li>
          <Link href='/error'>'error'</Link>
        </li>
      </ul>
    </div>
  );
}
