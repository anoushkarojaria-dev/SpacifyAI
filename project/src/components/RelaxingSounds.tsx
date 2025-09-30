import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react';

const RelaxingSounds: React.FC = () => {
  const [playingSound, setPlayingSound] = useState<string | null>(null);

  const spaceSound = [
    {
      id: 'cosmic-winds',
      name: 'Cosmic Winds',
      description: 'Gentle stellar winds flowing through space',
      duration: '15 min'
    },
    {
      id: 'nebula-whispers',
      name: 'Nebula Whispers',
      description: 'Soft ambient sounds from distant nebulae',
      duration: '20 min'
    },
    {
      id: 'saturn-rings',
      name: 'Saturn\'s Ring Symphony',
      description: 'Harmonious vibrations from Saturn\'s magnificent rings',
      duration: '12 min'
    },
    {
      id: 'pulsar-rhythm',
      name: 'Pulsar Rhythm',
      description: 'Rhythmic pulses from distant neutron stars',
      duration: '18 min'
    },
    {
      id: 'aurora-dance',
      name: 'Aurora Dance',
      description: 'Musical representation of auroras dancing in space',
      duration: '22 min'
    }
  ];

  const toggleSound = (soundId: string) => {
    setPlayingSound(playingSound === soundId ? null : soundId);
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => window.history.back()}
            className="galaxy-back-button mr-4"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="galaxy-title text-3xl md:text-4xl font-bold">
            Relaxing Space Sounds
          </h1>
        </div>

        <div className="galaxy-content-card mb-6">
          <p className="text-gray-200 text-lg leading-relaxed">
            Immerse yourself in the tranquil sounds of the cosmos. These carefully crafted audio experiences 
            transport you to the peaceful depths of space, perfect for relaxation, meditation, or bedtime. 
            Each sound has been designed to capture the wonder and serenity of our magnificent universe.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {spaceSound.map((sound) => (
            <div key={sound.id} className="galaxy-sound-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleSound(sound.id)}
                    className="galaxy-play-button"
                  >
                    {playingSound === sound.id ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </button>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-200">
                      {sound.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {sound.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <Volume2 size={16} />
                  <span className="text-sm">{sound.duration}</span>
                </div>
              </div>
              
              {playingSound === sound.id && (
                <div className="mt-4 pt-4 border-t border-purple-800/30">
                  <div className="sound-wave-animation">
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelaxingSounds;