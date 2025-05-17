import React from 'react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-900 shadow-md">
        <nav className="flex justify-between items-center px-6 py-4">
          <div className="text-3xl font-bold text-center flex-grow">Food Photography</div>
          <ul className="flex gap-4 bg-gray-800 px-4 py-2 rounded-lg">
            <li><a href="#" className="text-white font-medium hover:text-cyan-400 border-2 border-transparent hover:border-cyan-400 px-3 py-1 rounded transition">Home</a></li>
            <li><a href="#" className="text-white font-medium hover:text-cyan-400 border-2 border-transparent hover:border-cyan-400 px-3 py-1 rounded transition">Features</a></li>
            <li><a href="#" className="text-white font-medium hover:text-cyan-400 border-2 border-transparent hover:border-cyan-400 px-3 py-1 rounded transition">About</a></li>
            <li><a href="#" className="text-white font-medium hover:text-cyan-400 border-2 border-transparent hover:border-cyan-400 px-3 py-1 rounded transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-cyan-500 to-blue-800 text-white shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Food Photography</h1>
        <p className="text-xl text-white/90 mb-6">Click for Memory</p>
        <a href="#" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 hover:-translate-y-1 transform transition">Get Started</a>
      </section>

      {/* Features Section */}
      <section className="flex justify-center flex-wrap gap-8 px-6 py-16 bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-xl shadow-md max-w-xs text-center transition hover:-translate-y-2 hover:shadow-cyan-500/30">
          <h2 className="text-2xl font-semibold mb-2">🚀 Fast</h2>
          <p className="text-gray-300">Lightning fast performance across all devices.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-md max-w-xs text-center transition hover:-translate-y-2 hover:shadow-cyan-500/30">
          <h2 className="text-2xl font-semibold mb-2">💡 Simple</h2>
          <p className="text-gray-300">Just clean code. Easy to maintain and understand.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-md max-w-xs text-center transition hover:-translate-y-2 hover:shadow-cyan-500/30">
          <h2 className="text-2xl font-semibold mb-2">📱 Responsive</h2>
          <p className="text-gray-300">Looks great on mobiles, tablets, and desktops.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-400 border-t border-gray-800">
        <p className="text-sm">© 2025 Food Photography. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
