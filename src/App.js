import React from 'react';
import './index.css'; // Make sure Tailwind is imported here

function App() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center bg-gray-900 p-6 shadow-lg">
          <div className="text-white text-3xl font-bold flex-grow text-center">
            <span role="img" aria-label="camera and plate">📷🍽️</span> Food Photography
          </div>
          <ul className="flex gap-5 bg-gray-800 p-3 rounded-xl">
            <li><a className="text-white hover:text-teal-300 border-2 border-transparent hover:border-teal-400 rounded px-3 py-2 transition" href="#">Home</a></li>
            <li><a className="text-white hover:text-teal-300 border-2 border-transparent hover:border-teal-400 rounded px-3 py-2 transition" href="#">Features</a></li>
            <li><a className="text-white hover:text-teal-300 border-2 border-transparent hover:border-teal-400 rounded px-3 py-2 transition" href="#">About</a></li>
            <li><a className="text-white hover:text-teal-300 border-2 border-transparent hover:border-teal-400 rounded px-3 py-2 transition" href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Food Photography</h1>
        <p className="text-xl text-gray-400 mb-8">Click for Memory</p>
        <a href="#" className="inline-block bg-teal-400 text-black font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1">Get Started</a>
      </section>

      <section className="flex justify-center flex-wrap gap-8 py-16 px-6 bg-gray-900">
        <div className="bg-gray-800 text-gray-300 p-8 rounded-xl shadow-md text-center max-w-xs transition transform hover:-translate-y-2 hover:shadow-teal-500/30">
          <h2 className="text-2xl mb-3">🚀 Discounts</h2>
          <p>Exclusive deals and seasonal food offers you can't miss.</p>
        </div>
        <div className="bg-gray-800 text-gray-300 p-8 rounded-xl shadow-md text-center max-w-xs transition transform hover:-translate-y-2 hover:shadow-teal-500/30">
          <h2 className="text-2xl mb-3">🍽️ Foodies</h2>
          <p>Delicious dishes shared by food lovers around the world.</p>
        </div>
        <div className="bg-gray-800 text-gray-300 p-8 rounded-xl shadow-md text-center max-w-xs transition transform hover:-translate-y-2 hover:shadow-teal-500/30">
          <h2 className="text-2xl mb-3">📷 Gallery</h2>
          <p>Explore and share mouth-watering food photography.</p>
        </div>
        <div className="bg-gray-800 text-gray-300 p-8 rounded-xl shadow-md text-center max-w-xs transition transform hover:-translate-y-2 hover:shadow-teal-500/30">
          <h2 className="text-2xl mb-3">🔗 Follow Us</h2>
          <p>
            📺 <a href="#" className="text-gray-300 hover:text-teal-400">YouTube</a><br />
            📸 <a href="#" className="text-gray-300 hover:text-teal-400">Instagram</a><br />
            📘 <a href="#" className="text-gray-300 hover:text-teal-400">Facebook</a>
          </p>
        </div>
      </section>

      <footer className="text-center py-6 bg-black text-gray-500">
        <p>© 2025 Food Photography. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
