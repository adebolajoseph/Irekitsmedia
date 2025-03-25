import React from 'react';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const HomeSection = () => {
  return (
    <div className="text-center p-10 bg-gray-100">
      {/* Inject Keyframe Animations */}
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes colorCycle {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      {/* Main Home Content */}
      <section className="my-5">
        <div
          className="mx-auto p-8 w-11/12 max-w-3xl bg-gradient-to-r from-orange-300 via-red-300 to-blue-500 bg-[length:400%_400%] rounded-lg text-white text-center shadow-lg animate-[colorCycle_10s_infinite]"
        >
          <h1 className="text-3xl font-bold animate-[slideInLeft_1s_forwards] md:text-4xl">
            Welcome to Irekits Media
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Where we bring your vision to life through stunning visuals and cinematic storytelling.
          </p> 
        </div>
      </section>

      {/* Other Sections */}
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomeSection;
