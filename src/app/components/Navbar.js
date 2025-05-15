'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white px-6 py-4 fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight"><Link href="/">ExpoTech</Link></h1>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/programme">Programme</Link></li>
          <li>Orateurs</li>
          <li>Billetterie</li>
        </ul>
      </div>
    </motion.nav>
  );
}
