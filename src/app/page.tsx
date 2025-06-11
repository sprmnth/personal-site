import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Your Name</h1>
      <p className="text-lg mb-8">
        I do research on [X], write about [Y], and explore [Z].
      </p>
      <nav className="space-y-2 text-blue-600 underline flex flex-col">
        <Link href="/research">Research</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/travel">Travel Logs</Link>
        <Link href="/food">Food I Like</Link>
        <Link href="/about">About</Link>
      </nav>
    </main>
  );
}
