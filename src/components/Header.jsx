import React from 'react';
import { Wrench, Shield, LogIn, UserPlus } from 'lucide-react';

const Header = ({ onShowAuth, mode, setMode }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-red-500 text-white flex items-center justify-center shadow-sm">
            <Wrench className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900">Emergency Home Services</p>
            <p className="text-xs text-gray-500">Plumbers • AC • Gas • Carpentry • More</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#workers" className="hover:text-gray-900">Top Workers</a>
          <a href="#auth" className="hover:text-gray-900">Get Started</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { setMode('login'); onShowAuth(true); }}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
          >
            <LogIn className="h-4 w-4" />
            Login
          </button>
          <button
            onClick={() => { setMode('signup'); onShowAuth(true); }}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-gray-900 text-white hover:bg-black"
          >
            <UserPlus className="h-4 w-4" />
            Sign up
          </button>
        </div>
      </div>

      <div className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm text-amber-800 flex items-center gap-2">
          <Shield className="h-4 w-4" />
          24/7 booking with secure upfront confirmation payments.
        </div>
      </div>
    </header>
  );
};

export default Header;
