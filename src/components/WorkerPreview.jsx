import React from 'react';
import { Star, Clock, MapPin, PhoneCall } from 'lucide-react';

const mockWorkers = [
  { id: 1, name: 'Ravi Kumar', rating: 4.8, jobs: 320, price: 299, time: 'Today, 1-3 PM', area: '2.1 km away' },
  { id: 2, name: 'Anita Verma', rating: 4.6, jobs: 210, price: 249, time: 'Today, 4-6 PM', area: '3.4 km away' },
  { id: 3, name: 'Mahesh Singh', rating: 4.9, jobs: 450, price: 349, time: 'Tomorrow, 9-11 AM', area: '1.2 km away' },
];

const Rating = ({ value }) => {
  const full = Math.floor(value);
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} className={`h-4 w-4 ${i < full ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
  ));
  return <div className="flex items-center gap-0.5">{stars}<span className="ml-1 text-xs text-gray-600">{value}</span></div>;
};

const WorkerPreview = ({ category }) => {
  return (
    <section id="workers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{category ? `${category} near you` : 'Top-rated workers near you'}</h2>
            <p className="text-gray-600">Transparent pricing, verified profiles, instant booking</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWorkers.map((w) => (
            <div key={w.id} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{w.name}</h3>
                  <p className="text-xs text-gray-500">{category || 'Multi-service specialist'}</p>
                </div>
                <Rating value={w.rating} />
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gray-400" /> {w.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gray-400" /> {w.area}</div>
                <div className="flex items-center gap-2"><span className="text-gray-400">₹</span> Advance: ₹{w.price}</div>
                <div className="text-xs text-gray-500">Completed {w.jobs}+ jobs</div>
              </div>

              <div className="mt-5 flex gap-2">
                <button className="flex-1 bg-gray-900 text-white py-2 rounded-md hover:bg-black">Book with advance</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkerPreview;
