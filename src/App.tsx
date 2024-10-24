import React, { lazy, Suspense } from 'react';
import Header from './components/Header';

const ComingSoon = lazy(() => import('./components/ComingSoon'));
const SocialLinks = lazy(() => import('./components/SocialLinks'));

export default function App() {
  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1579697096985-41fe1430e5df?q=80&w=1200&fm=webp&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="min-h-screen backdrop-blur-[8px] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl mx-auto text-center text-white">
          <div className="backdrop-blur-md bg-black/20 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-black/25">
            <Header />
            <Suspense fallback={<div className="h-32 animate-pulse bg-white/10 rounded-lg"></div>}>
              <ComingSoon />
            </Suspense>
            <Suspense fallback={<div className="h-24 animate-pulse bg-white/10 rounded-lg"></div>}>
              <SocialLinks />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}