import React, { useState } from 'react';
import { Mail, Lock, User, Shield, Fingerprint } from 'lucide-react';

const AuthSection = ({ mode = 'login' }) => {
  const [activeTab, setActiveTab] = useState(mode);
  const [role, setRole] = useState('user');

  return (
    <section id="auth" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-2xl bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 p-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/15 p-2 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Safe and Secure</h3>
          </div>
          <ul className="space-y-4 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/90"></span>
              OTP-protected login and role-based access
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/90"></span>
              Google sign-in for fast onboarding
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/90"></span>
              Admin, user and worker dashboards
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/90"></span>
              Secure upfront confirmation payments
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium ${activeTab === 'login' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium ${activeTab === 'signup' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign up
            </button>
          </div>

          <form className="space-y-4">
            {activeTab === 'signup' && (
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="Full name" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input type="email" placeholder="Email address" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input type="password" placeholder="Password" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Choose your role</p>
              <div className="flex flex-wrap gap-3">
                {['user', 'worker', 'admin'].map((r) => (
                  <label key={r} className={`cursor-pointer select-none inline-flex items-center gap-2 px-3 py-2 rounded-md border ${role === r ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-300 text-gray-700'}`}>
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r)}
                      className="hidden"
                    />
                    <span className="capitalize">{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="button" className="w-full bg-gray-900 text-white py-2.5 rounded-md hover:bg-black transition">
              {activeTab === 'login' ? 'Login' : 'Create account'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <button type="button" className="w-full border border-gray-300 py-2.5 rounded-md hover:bg-gray-50 transition inline-flex items-center justify-center gap-2">
              <Fingerprint className="h-5 w-5 text-gray-700" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
