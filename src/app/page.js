'use client';
import Skeleton from "./components/Skeleton";

export default function Home() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto text-center text-white">
      <h1 className="text-5xl font-bold mb-4 text-indigo-950">Le futur s'invente ici</h1>
      <p className="text-gray-300 mb-10">2 jours de conférences, workshops et expériences immersives.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </main>
  );
}
