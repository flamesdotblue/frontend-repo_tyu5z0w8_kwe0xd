import React from 'react';
import { Wrench, Flame, Snowflake, Leaf, Hammer, Zap, WashingMachine, Bath, SatelliteDish } from 'lucide-react';

const services = [
  { name: 'Plumber', icon: Wrench, color: 'from-sky-500 to-blue-500' },
  { name: 'Gas Repair', icon: Flame, color: 'from-orange-500 to-amber-500' },
  { name: 'AC Repair', icon: Snowflake, color: 'from-cyan-500 to-blue-500' },
  { name: 'Gardener', icon: Leaf, color: 'from-green-500 to-emerald-500' },
  { name: 'Carpenter', icon: Hammer, color: 'from-yellow-500 to-amber-500' },
  { name: 'Electrician', icon: Zap, color: 'from-indigo-500 to-violet-500' },
  { name: 'Washing Machine', icon: WashingMachine, color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Bathroom', icon: Bath, color: 'from-rose-500 to-red-500' },
  { name: 'DTH/TV Install', icon: SatelliteDish, color: 'from-purple-500 to-indigo-500' },
];

const ServiceGrid = ({ onPick }) => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book urgent home services</h2>
            <p className="text-gray-600">Pick a category to see available workers near you</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map(({ name, icon: Icon, color }) => (
            <button
              key={name}
              onClick={() => onPick(name)}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm hover:shadow-md transition"
            >
              <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-20 bg-gradient-to-br ${color}`} />
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-xs text-gray-500">Starts in 30 minutes</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
