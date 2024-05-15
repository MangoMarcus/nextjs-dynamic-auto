import Link from 'next/link';

export const dynamic = 'error';

export default function Page() {
  console.log("Rendering page using dynamic = 'error'");

  return <div className="container mx-auto py-20">
    <h1>error</h1>
    <p>Using <code>export const dynamic = 'error'</code></p>
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
          <Link href='/none'>[none]</Link>
        </li>
      </ul>
  </div>;
}
