import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-4">
          About BookTracker 📚
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-500">BookTracker</span> – your personal digital library!
          This app helps you keep track of books you've read, wish to read, and even compare based on pages and ratings.
        </p>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-6 mb-6">
          <div className="bg-indigo-100 p-4 rounded-xl shadow-md w-full sm:w-1/3">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">✨ Features</h2>
            <ul className="text-left text-gray-700 list-disc list-inside space-y-1">
              <li>Track read & wishlist books</li>
              <li>Sort by pages or ratings</li>
              <li>Interactive UI with tabs</li>
            </ul>
          </div>
          <div className="bg-indigo-100 p-4 rounded-xl shadow-md w-full sm:w-1/3">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">🔧 Technologies</h2>
            <ul className="text-left text-gray-700 list-disc list-inside space-y-1">
              <li>React & React Router</li>
              <li>Tailwind CSS</li>
              <li>LocalStorage for persistence</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          
        </p>
      </div>
    </div>
  );
};

export default About;
