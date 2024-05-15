import Link from 'next/link';

// If this is the default then it should behave the same as not exporting `dynamic`
export const dynamic = 'auto';

export default function Page() {
  console.log("Rendering page using dynamic = 'auto'");

  return (
    <div className="container mx-auto py-20">
      <h1>auto</h1>
      <p>
        Using <code>export const dynamic = 'auto'</code>
      </p>
      <h2>Other options:</h2>
      <ul>
        <li>
          <Link href='/force-dynamic'>'force-dynamic'</Link>
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
