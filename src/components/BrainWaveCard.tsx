import React, { useState } from 'react';

const waveVideos = {
  'Delta (δ)': 'https://www.youtube.com/embed/xQ6xgDI7Whc?autoplay=1',
  'Theta (θ)': 'https://www.youtube.com/embed/BZyGxL2FnVU?autoplay=1',
  'Alpha (α)': 'https://www.youtube.com/embed/GEgSBuYlSoA?autoplay=1',
  'Beta (β)': 'https://www.youtube.com/embed/YWIhyOWxKPw?autoplay=1',
  'Gamma (γ)': 'https://www.youtube.com/embed/vLEek3I3wac?autoplay=1',
};

const Modal = ({ videoUrl, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white/75 rounded-lg shadow-lg max-w-2xl w-full p-7 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black hover:text-red-500 text-2xl z-10"
        aria-label="Close video modal"
      >
        ×
      </button>
      <div className="w-full flex justify-center">
        <iframe
          className="w-full h-64 rounded-md"
          src={videoUrl}
          title="Brain Wave Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

const BrainWaveCard = ({ wave }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePlay = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  return (
    <>
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex flex-col h-full transition-transform transform hover:scale-[1.03] cursor-pointer">
        <button
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-transform shadow-md z-10"
          onClick={handlePlay}
          aria-label={`Play video for ${wave.name}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <polygon points="10,8 16,12 10,16" fill="currentColor" />
          </svg>
        </button>

        <h2 className="text-xl font-semibold text-white mb-1 truncate">
          {wave.name}
        </h2>
        <span className="text-sm text-gray-300 mb-2">{wave.frequency}</span>
        <p className="text-sm text-white/90 mb-2 flex-1">{wave.description}</p>
        <p className="text-sm italic text-green-200 mb-2">Mood: {wave.mood}</p>
        <div className="mt-auto space-y-1">
          {wave.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-blue-300 underline truncate"
              title={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal
          videoUrl={waveVideos[wave.name]}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export const brainWaves = [
  {
    name: 'Delta (δ)',
    frequency: '0.5–4 Hz',
    mood: 'Deep sleep, unconsciousness',
    description:
      'Delta waves are the slowest brain waves, dominating during deep, restorative sleep and important for healing and regeneration. EEG recordings consistently show high-amplitude δ oscillations in non-REM sleep.',
    links: [
      {
        label: 'StatPearls: EEG Waves',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK538222/',
      },
      {
        label: 'Sleep Research Society',
        url: 'https://academic.oup.com/sleep/article/31/2/175/2454221',
      },
    ],
  },
  {
    name: 'Theta (θ)',
    frequency: '4–7 Hz',
    mood: 'Drowsiness, meditation, creativity',
    description:
      'Theta waves appear during light sleep, deep meditation, and creative states. They play a role in memory consolidation and learning, observed in both scalp EEG and intracranial recordings.',
    links: [
      {
        label: 'PubMed: Theta Rhythm',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22219112/',
      },
      {
        label: 'Nature Neuroscience',
        url: 'https://www.nature.com/articles/nn.4174',
      },
    ],
  },
  {
    name: 'Alpha (α)',
    frequency: '8–12 Hz',
    mood: 'Relaxed wakefulness, eyes closed',
    description:
      'Alpha waves were the first brain rhythm discovered by Hans Berger. They increase when the eyes are closed and the mind is calm, and attenuate upon opening the eyes or mental effort.',
    links: [
      {
        label: 'Hans Berger 1929 Paper',
        url: 'https://www.jstor.org/stable/24304602',
      },
      {
        label: 'Frontiers in Human Neuroscience',
        url: 'https://www.frontiersin.org/articles/10.3389/fnhum.2012.00386/full',
      },
    ],
  },
  {
    name: 'Beta (β)',
    frequency: '12–30 Hz',
    mood: 'Active thinking, focus, anxiety',
    description:
      'Beta waves dominate during active concentration and alertness. Variations in β-band power correlate with attention, problem-solving, and sometimes anxiety levels.',
    links: [
      {
        label: 'Journal of Neuroscience',
        url: 'https://www.jneurosci.org/content/27/44/11902',
      },
      {
        label: 'ScienceDirect Review',
        url: 'https://www.sciencedirect.com/science/article/pii/S0167876013001832',
      },
    ],
  },
  {
    name: 'Gamma (γ)',
    frequency: '30–100 Hz',
    mood: 'High-level cognition, perception binding',
    description:
      'Gamma waves are associated with higher-order cognitive functions, sensory integration, and consciousness. They are seen during attention tasks and rapid information processing.',
    links: [
      {
        label: 'Journal of Cognitive Neuroscience',
        url: 'https://direct.mit.edu/jocn/article/14/5/873/4674/Neural-Synchronization-Modulates-with-the-Attention',
      },
      {
        label: 'Annual Review of Neuroscience',
        url: 'https://www.annualreviews.org/doi/10.1146/annurev.neuro.28.061604.135709',
      },
    ],
  },
];

export default BrainWaveCard;
