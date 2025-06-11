import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">Saipremnath</h1>
          <p className="text-lg text-[#555] leading-relaxed">
            I do research on institutions, write about the world, and explore culture, food, and meaning.
          </p>
        </header>

        <section className="grid gap-4 text-lg text-[#1a1a1a]">
          <Link href="/research" className="hover:underline hover:text-[#0070f3]">→ Research</Link>
          <Link href="/blog" className="hover:underline hover:text-[#0070f3]">→ Blog</Link>
          <Link href="/notes" className="hover:underline hover:text-[#0070f3]">→ Notes</Link>
          <Link href="/travel" className="hover:underline hover:text-[#0070f3]">→ Travel Logs</Link>
          <Link href="/food" className="hover:underline hover:text-[#0070f3]">→ Food I Like</Link>
          <Link href="/about" className="hover:underline hover:text-[#0070f3]">→ About</Link>
        </section>
      </div>
    </main>
  );
}
