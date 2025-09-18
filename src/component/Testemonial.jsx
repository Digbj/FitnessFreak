import React from "react";
import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";
import testimonialData from "../assets/mockData/testiMonial.json"

export const TestimonialCarousel = () => {
  const { testimonials } = testimonialData;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div id="success" className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          {testimonialData.heading}
        </h2>
        <p className="text-md md:text-lg text-gray-600">
          {testimonialData.subheading}
        </p>
      </div>

      {/* Testimonial Carousel */}
      <Marquee speed={60} pauseOnHover={true} className="py-2">
        {testimonialData?.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-xl bg-white shadow-lg p-6 mx-4 w-80 border border-gray-100"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-blue-600 opacity-30 mb-4" />

            {/* Rating */}
            <div className="flex space-x-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              "{testimonial.testimonial}"
            </p>

            {/* Achievement */}
            <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full inline-block mb-4">
              {testimonial.achievement}
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-xs">{testimonial.role}</p>
                <p className="text-gray-500 text-xs">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
