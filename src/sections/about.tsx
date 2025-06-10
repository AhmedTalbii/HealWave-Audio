import React from 'react';

import Header from '../components/ui/header';
import BrainWaveCard, { brainWaves } from '../components/BrainWaveCard';

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 flex flex-col items-center justify-between min-h-[calc(100vh-64px)]">
        <div className="mt-[20%] lg:mt-[8%] text-center">
          <h1 className="text-4xl text-white font-bold font-orbitron mb-2">
            Explore Brain Waves
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Brain waves are electrical impulses in the brain, classified by
            frequency and linked to different mental states. They play a vital
            role in sleep, focus, creativity, and consciousness.
          </p>
        </div>

        <div className="w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brainWaves.map((wave) => (
              <BrainWaveCard key={wave.name} wave={wave} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
