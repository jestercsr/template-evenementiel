'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white px-6 py-16 mt-32"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">ExpoTech 2025</h2>
          <p className="text-sm text-gray-400 mt-2">Le festival des technologies émergentes – Paris</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>📍 Grand Palais Éphémère – 24 & 25 octobre 2025</p>
          <p>✉️ contact@expotech.com</p>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ExpoTech. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
