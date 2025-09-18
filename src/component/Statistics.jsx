import React from "react";
import CountUp from "react-countup";
import { Activity, Zap, Target, TrendingUp } from "lucide-react";

export const FitnessStats = () => {
  const stats = [
    {
      id: 1,
      label: "Pushups",
      end: 50,
      icon: Activity,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      id: 2,
      label: "Squats",
      end: 75,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: 3,
      label: "Calories Burned",
      end: 120,
      icon: Zap,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      id: 4,
      label: "Workout Completion",
      end: 95,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">{"Why Choose"}</h2>
        <p className="text-md md:text-lg text-gray-600">
          {
            "Discover the benefits of training with certified experts who care about your success."
          }
        </p>
      </div>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center justify-center text-center">
                {/* Icon */}
                <div
                  className={`${stat.bgColor} rounded-2xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-4 w-4 md:w-8 md:h-8 ${stat.textColor}`} />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <h2 className={`text-4xl font-bold ${stat.textColor} mb-1`}>
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      delay={index * 0.2}
                    />
                    {stat.label === "Workout Completion" ? "%" : ""}
                  </h2>
                  <div
                    className={`h-1 w-16 bg-gradient-to-r ${stat.color} rounded-full mx-auto opacity-60`}
                  ></div>
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium text-md md:text-lg">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div
                className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
              ></div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
