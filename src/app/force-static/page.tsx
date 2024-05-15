import Link from 'next/link';

export const dynamic = 'force-static';

export default function Page() {
  console.log("Rendering page using dynamic = 'force-static'");

  return (
    <div className="container mx-auto py-20">
      <h1>force-static</h1>
      <p>
        Using <code>export const dynamic = 'force-static'</code>
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
          <Link href='/error'>'error'</Link>
        </li>
        <li>
          <Link href='/none'>[none]</Link>
        </li>
      </ul>
    </div>
  );
}
