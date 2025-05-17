import React from 'react';

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-900 shadow-lg">
        <nav className="flex justify-between items-center px-6 py-4">
          <div className="text-4xl font-extrabold text-white">
            📷🍽️ Food Photography
          </div>
          <ul className="flex flex-col items-start gap-2 text-lg">
            <li><a href="#" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">About</a></li>
            <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <h1 className="text-5xl font-bold mb-4">Welcome to Food Photography</h1>
        <p className="text-xl text-gray-300 mb-8">Click for Memory</p>
        <a href="#" className="inline-block bg-teal-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:-translate-y-1 transform transition">Get Started</a>
      </section>

      {/* Features */}
      <section className="flex justify-center flex-wrap gap-8 px-6 py-16 bg-black">
        <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center w-72 hover:shadow-teal-400/30 transition">
          <h2 className="text-2xl font-bold mb-3">🚀 Discounts</h2>
          <p className="text-gray-300">Exclusive deals and seasonal food offers you can't miss.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center w-72 hover:shadow-teal-400/30 transition">
          <h2 className="text-2xl font-bold mb-3">🍽️ Foodies</h2>
          <p className="text-gray-300">Delicious dishes shared by food lovers around the world.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center w-72 hover:shadow-teal-400/30 transition">
          <h2 className="text-2xl font-bold mb-3">📷 Gallery</h2>
          <p className="text-gray-300">Explore and share mouth-watering food photography.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center w-72 hover:shadow-teal-400/30 transition">
          <h2 className="text-2xl font-bold mb-3">🔗 Follow Us</h2>
          <p className="text-gray-300">
            📺 <a href="#" className="hover:text-teal-400">YouTube</a><br />
            📸 <a href="#" className="hover:text-teal-400">Instagram</a><br />
            📘 <a href="#" className="hover:text-teal-400">Facebook</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-400 border-t border-gray-800">
        <p>© 2025 Food Photography. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;