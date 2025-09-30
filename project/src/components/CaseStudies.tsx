import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CaseStudies: React.FC = () => {
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
            Case Studies on Space
          </h1>
        </div>

        <div className="galaxy-content-card">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-purple-200">
            The Amazing Journey of the James Webb Space Telescope
          </h2>
          
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              The James Webb Space Telescope represents one of humanity's greatest achievements in space exploration. 
              Launched on December 25, 2021, this incredible observatory has revolutionized our understanding of the cosmos. 
              Unlike its predecessor, the Hubble Space Telescope, Webb observes primarily in infrared light, allowing it to 
              peer through cosmic dust and see the first galaxies that formed after the Big Bang.
            </p>
            
            <p>
              What makes Webb so special? Its massive 6.5-meter primary mirror, made of 18 hexagonal segments, collects 
              six times more light than Hubble. The telescope operates at the L2 Lagrange point, about 1.5 million 
              kilometers from Earth, where it maintains a stable position relative to both Earth and the Sun. This 
              location provides an unobstructed view of deep space while keeping the telescope cold enough for its 
              sensitive infrared instruments to function properly.
            </p>
            
            <p>
              Since beginning operations, Webb has captured breathtaking images of distant galaxies, star-forming regions, 
              and exoplanet atmospheres. It has helped scientists discover galaxies that formed just 400 million years 
              after the Big Bang, providing crucial insights into how the universe evolved. For young space enthusiasts, 
              Webb represents the power of human curiosity and engineering, showing that with dedication and teamwork, 
              we can unlock the mysteries of the universe and inspire future generations to reach for the stars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;