import React from "react";
import heroImage from "../assets/images/hero.webp";
import { Typewriter } from "react-simple-typewriter";
import { CheckCircle, ArrowRight, Play, Star } from "lucide-react";
import word from "../assets/mockData/typewriter.json";
import mobile from '../assets/images/mobile.webp'
import { Button } from "@mui/material";
export const HeroSection = () => {
  return (
    <div id="/" className="relative h-screen md:w-full md:h-full">
      {/* Background Image */}
      {/* Desktop / Large Screen Image */}
      <img
        src={heroImage}
        alt="hero image"
        className="hidden md:block h-full w-full object-cover"
      />

      {/* Mobile / Small Screen Image */}
      <img
        src={mobile}
        alt="hero image"
        className="block md:hidden h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/40 md:from-black/80 md:to-transparent"></div>

      {/* Content Layer */}
      <div className="absolute max-w-7xl px-4 mx-auto inset-0 flex items-center justify-start">
        <div className="text-white pt-12 md:pt-0 space-y-4 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-white/20 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
            <CheckCircle className="h-3 w-3 md:w-4 md:h-4 text-green-400" />
            <span>Certified Trainers & Nutritionists</span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 className="text-5xl md:text-7xl mb-4 font-dancing-script text-gray-200 bg-clip-text font-extrabold">
              Fitness Freak
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-white rounded-full mb-4 md:mb-6"></div>
          </div>

          {/* Typewriter Effect */}
          <div className="text-lg md:text-2xl h-16 flex items-center text-blue-100 md:text-blue-200">
            <span className="mr-2">🎯</span>
            <Typewriter
              words={word?.words}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text:md lg:text-xl font-semibold">
                Personalized Programs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text:md lg:text-xl font-semibold">
                Expert Guidance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text:md lg:text-xl font-semibold">
                Nutrition Planning
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text:md lg:text-xl font-semibold">
                24/7 Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 py-4">
            <Button className="w-1/2 h-12 !rounded-xl" variant="contained">
              <a href="#contact"> Book a Meeting </a>
            </Button>

            <Button
              className="w-1/2 h-12 !rounded-xl !bg-black/40 !border !border-gray-400"
              variant="contained"
            >
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-white/70 rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="ml-2 font-forum text-sm">Join 10k+ members</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-1 font-forum text-sm">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
