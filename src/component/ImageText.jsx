import React from "react";
import data from "../assets/mockData/imageText.json";

export const InfoSection = () => {
  return (
    <div id="service" className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-24">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          {data.heading || "Why Choose"}
        </h2>
        <p className="text-md md:text-lg text-gray-600">
          {data.subheading ||
            "Discover the benefits of training with certified experts who care about your success."}
        </p>
      </div>

      {/* Dynamic Rows */}
      {data?.sections.map((section, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          {/* Image Side */}
          <div
            className={`order-1 ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <img
              src={section.image}
              alt={section.title}
              className="rounded-2xl p-[4px] md:p-[8px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div
            className={`order-2 ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            } space-y-4 md:space-y-6`}
          >
            <h3 className="text-xl md:text-3xl font-bold font-roboto underline">
              {section.title}
            </h3>
            <p className="text-gray-600 italic font-roboto text-md md:text-lg leading-relaxed">
              {section.description}
            </p>

            {/* Conditional rendering for points or paragraph */}
            {section.points ? (
              <ul className="space-y-3 list-disc list-inside text-black font-roboto md:leading-justified text-sm md:text-lg">
                {section.points.map((point, i) => (
                  <li key={i} className="md:leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : section.paragraph ? (
              <div className="text-black font-roboto md:leading-relaxed text-justify text-sm md:text-lg">
                <p>{section.paragraph}</p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
