import React from 'react';
import icon from '../../assets/icon.svg';
import avatar from '../../assets/ahmed.jpeg';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-1">
        <div className="flex items-center justify-between px-[8%] h-16 sm:h-20">
          <div
            className="flex items-center space-x-2 sm:space-x-3 animate-slide-in-left"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <img src={icon} alt="Logo" className="w-full h-full" />
            </div>
            <h1 className="text-sm sm:text-xl font-bold text-white">
              HealWave Audio
            </h1>
          </div>

          <div className="relative group inline-block">
            <a
              href="https://github.com/AhmedTalbii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 animate-slide-in-right"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <h1 className="text-sm sm:text-xl font-bold mr-3 text-white">
                Made By
              </h1>
              <div className="ring-white/20 ring-offset-base-100/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-offset-2 transition-all group-hover:ring-white/40">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={avatar}
                  alt="Developer Avatar"
                />
              </div>
            </a>

            {/* Tooltip on hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-center bg-white text-black text-xs sm:text-sm rounded-lg px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
              Ahmed Talbi
              <br />
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
