import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcfb] text-[#1c1c1c] font-sans antialiased max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">Saipremnath</h1>
      <p className="text-xl leading-relaxed mb-10">
        I do research on institutions, write about the world, and explore culture, food, and meaning.
      </p>
      <nav className="space-y-3 text-[#0070f3] underline flex flex-col text-lg">
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
