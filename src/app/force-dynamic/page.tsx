import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Page() {
  console.log("Rendering page using dynamic = 'force-dynamic'");

  return (
    <div className="container mx-auto py-20">
      <h1>force-dynamic</h1>
      <p>
        Using <code>export const dynamic = 'force-dynamic'</code>
      </p>
      <h2>Other options:</h2>
      <ul>
        <li>
          <Link href='/auto'>'auto'</Link>
        </li>
        <li>
          <Link href='/force-static'>'force-static'</Link>
        </li>
        <li>
          <Link href='/error'>'error'</Link>
        </li>
        <li>
          <Link href='/none'>[none]</Link>
        </li>
      </ul>
    </div>
  );
}
