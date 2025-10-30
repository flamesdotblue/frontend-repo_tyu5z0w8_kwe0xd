import React, { useState } from 'react';
import Header from './components/Header';
import ServiceGrid from './components/ServiceGrid';
import WorkerPreview from './components/WorkerPreview';
import AuthSection from './components/AuthSection';

function App() {
  const [picked, setPicked] = useState('');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header onShowAuth={setAuthOpen} mode={authMode} setMode={setAuthMode} />

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                24/7 emergency bookings now available
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Fix urgent home problems fast
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Trusted plumbers, AC technicians, gas repair, carpenters, gardeners and more. Verified pros, upfront pricing, and instant confirmation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Book a service</button>
                <button onClick={() => { setAuthMode('signup'); setAuthOpen(true); }} className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-50">Join as a worker</button>
              </div>
              <p className="mt-3 text-sm text-gray-500">Serving villages and towns with rapid-response local experts.</p>
            </div>
            <div className="relative h-[320px] md:h-[380px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100 via-orange-100 to-rose-100 border border-red-200/40" />
              <div className="absolute -top-6 -left-6 h-40 w-40 bg-rose-300/40 blur-3xl rounded-full" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-orange-300/40 blur-3xl rounded-full" />
              <div className="absolute inset-6 rounded-xl bg-white shadow-xl border border-gray-200 p-6 flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {["Plumber","AC","Gas","Carpenter","Garden","Electric"].map((t, i) => (
                    <div key={i} className="h-20 rounded-md border border-gray-200 bg-gray-50/60 flex items-center justify-center text-sm font-medium text-gray-700">
                      {t}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">Pick a category below to see available workers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid onPick={(name) => setPicked(name)} />
      <WorkerPreview category={picked} />
      {authOpen && <AuthSection mode={authMode} />}

      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Emergency Home Services. All rights reserved.</footer>
    </div>
  );
}

export default App;
