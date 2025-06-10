import React, { useEffect, useState } from 'react';
import { AuroraBackground } from './components/ui/background';
import About from './sections/about';

const INTRO_ANIMATION_DURATION = 500;

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setShowContent(true),
      INTRO_ANIMATION_DURATION
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-[${INTRO_ANIMATION_DURATION}ms] ease-out pointer-events-none ${
          showContent ? 'opacity-0' : 'opacity-90'
        }`}
      />

      <AuroraBackground>
        {showContent && (
          <div>
            <About />
            <div>
              <div className="text-center text-white text-sm sm:text-base px-4 py-6 bg-black/30 backdrop-blur-lg rounded-t-2xl">
                <p className="mb-2">
                  <span className="font-semibold">Disclaimer:</span> If you
                  listen to the waves and still don't feel right, please talk to
                  a licensed psychologist.
                </p>
                <p>
                  CopyRight © 2025 All rights reserved to{' '}
                  <a
                    href="https://github.com/AhmedTalbii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Ahmed Talbi
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </AuroraBackground>
    </>
  );
}

export default App;
