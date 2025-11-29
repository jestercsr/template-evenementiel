"use client";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-gray-950 to-black text-white"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text mb-4">
              ExpoEvent
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Découvrez et créez des événements mémorables près de chez vous
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 bg-rose-600/20 hover:bg-rose-600/40 rounded-lg transition"
              >
                <FaInstagram size={18} className="text-rose-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-rose-600/20 hover:bg-rose-600/40 rounded-lg transition"
              >
                <FaXTwitter size={18} className="text-rose-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-rose-600/20 hover:bg-rose-600/40 rounded-lg transition"
              >
                <FaLinkedinIn size={18} className="text-rose-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-rose-600/20 hover:bg-rose-600/40 rounded-lg transition"
              >
                <FaFacebookF size={18} className="text-rose-400" />
              </a>
            </div>
          </div>

          {/* Découvrir */}
          <div>
            <h4 className="font-bold text-white mb-4">Découvrir</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Tous les événements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Catégories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Tendances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Près de vous
                </a>
              </li>
            </ul>
          </div>

          {/* Pour Organisateurs */}
          <div>
            <h4 className="font-bold text-white mb-4">Pour Organisateurs</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Créer un événement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Guide de l'organisateur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Tarification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-bold text-white mb-4">Ressources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Aide & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  Sécurité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition text-sm"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Rester Informé</h4>
            <p className="text-gray-400 text-sm mb-3">
              Recevez les meilleurs événements
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:border-rose-500 focus:outline-none"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ExpoEvent. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-gray-400 text-sm justify-end">
              <a href="#" className="hover:text-rose-400 transition">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-rose-400 transition">
                Confidentialité
              </a>
              <a href="#" className="hover:text-rose-400 transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <p>Made with ❤️ for event lovers</p>
            <p>Langue: Français | Région: France</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
