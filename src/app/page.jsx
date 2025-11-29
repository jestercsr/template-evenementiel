"use client";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import {
  FaHeart,
  FaUsers,
  FaCalendarDays,
  FaArrowRight,
} from "react-icons/fa6";
import { RiMapPinFill } from "react-icons/ri";

export default function Home() {
  const [wishlist, setWishlist] = useState({});

  const events = [
    {
      id: 1,
      title: "Festival de Musique 2025",
      date: "15 Jun 2025",
      time: "19:00",
      location: "Paris, France",
      image: "bg-gradient-to-br from-rose-400 to-pink-600",
      category: "Musique",
      attendees: 5430,
      price: 49,
      originalPrice: 79,
    },
    {
      id: 2,
      title: "Conférence Tech Summit",
      date: "22 Jun 2025",
      time: "09:00",
      location: "Lyon, France",
      image: "bg-gradient-to-br from-purple-400 to-rose-500",
      category: "Tech",
      attendees: 2180,
      price: 89,
      originalPrice: 129,
    },
    {
      id: 3,
      title: "Marché d'Art Contemporain",
      date: "28 Jun 2025",
      time: "10:00",
      location: "Bordeaux, France",
      image: "bg-gradient-to-br from-orange-400 to-pink-500",
      category: "Art",
      attendees: 1850,
      price: 25,
      originalPrice: 40,
    },
    {
      id: 4,
      title: "Marathon International",
      date: "05 Jul 2025",
      time: "07:00",
      location: "Marseille, France",
      image: "bg-gradient-to-br from-blue-400 to-purple-500",
      category: "Sport",
      attendees: 8920,
      price: 35,
      originalPrice: 50,
    },
    {
      id: 5,
      title: "Gala de Charité",
      date: "12 Jul 2025",
      time: "20:00",
      location: "Paris, France",
      image: "bg-gradient-to-br from-yellow-400 to-rose-500",
      category: "Gala",
      attendees: 1240,
      price: 150,
      originalPrice: 200,
    },
    {
      id: 6,
      title: "Festival Gastronomique",
      date: "19 Jul 2025",
      time: "12:00",
      location: "Lyon, France",
      image: "bg-gradient-to-br from-red-400 to-pink-500",
      category: "Gastronomie",
      attendees: 3670,
      price: 45,
      originalPrice: 65,
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto text-center bg-white text-gray-900">
      <section className="relative h-96 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Trouvez l'Événement Parfait
          </h1>
          <p className="text-xl text-rose-100 mb-8">
            Explorez les meilleurs événements près de chez vous et réservez vos
            places
          </p>

          <div className="flex flex-col md:flex-row gap-3 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-rose-600 font-bold rounded-lg hover:shadow-xl transition">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Catégories</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Musique", "Sport", "Tech", "Art"].map((cat, i) => (
              <button
                key={i}
                className="px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-rose-600 hover:text-rose-600 hover:bg-rose-50 transition font-semibold"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Événements à venir
              </h2>
              <p className="text-gray-600 mt-2">
                Les événements les plus attendus du moment
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-rose-600 text-rose-600 font-bold rounded-lg hover:bg-rose-50 transition">
              Voir tous les événements
              <IoChevronForward size={20} />
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-rose-200 transition group cursor-pointer"
              >
                {/* Event Image */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <div className={`w-full h-full ${event.image}`}></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">
                      {event.category}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(event.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition"
                  >
                    <FaHeart
                      size={20}
                      className={
                        wishlist[event.id]
                          ? "fill-rose-500 text-rose-500"
                          : "text-gray-600"
                      }
                    />
                  </button>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-rose-600 transition">
                    {event.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarDays size={16} className="text-rose-600" />
                      <span>
                        {event.date} à {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiMapPinFill size={16} className="text-rose-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers size={16} className="text-rose-600" />
                      <span>
                        {event.attendees.toLocaleString()} participants
                      </span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${event.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${event.originalPrice}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm flex items-center gap-1">
                      Réserver
                      <FaArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Créez votre propre événement
          </h2>
          <p className="text-lg text-rose-100 mb-8">
            Organisez facilement votre événement et atteignez des milliers de
            participants
          </p>
          <button className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:shadow-2xl transition inline-flex items-center gap-2">
            Commencer maintenant
            <FaArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
