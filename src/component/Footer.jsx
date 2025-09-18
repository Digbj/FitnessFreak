import React from "react";
import logo from "../assets/images/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Heart,
} from "lucide-react";
import { Button } from "@mui/material";

export const Footer = () => {
  return (
    <footer id="about" className="bg-[#c5e2e2a1] text-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info with Follow Us below */}
          <div className="space-y-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img className="h-20 w-20" src={logo} alt="logo" />
                <span className="font-extrabold font-dancing-script text-2xl lg:text-3xl">
                  Fitness Tycoon
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A fitness Tycoon is passionate about health and workouts. A diet
                planner platform helps track meals, calories, and nutrition,
                offering personalized plans to achieve fitness goals
                effectively.
              </p>
            </div>

            {/* Follow Us - Now below company info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 group"
                >
                  <Facebook className="text-white" />
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 group"
                >
                  <Twitter className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500  transition-colors duration-200 group"
                >
                  <Instagram className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#success"
                  className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-200"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated - Third column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for fitness tips, healthy recipes, and
              exclusive offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom section */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 text-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600">
              <span>
                © {new Date().getFullYear()} Fitness Tycoon. All rights reserved.
              </span>
              <div className="flex items-center">
                <span>Made with </span>
                <Heart className="fill-red-500 stroke-red-500 mx-1" />

                <span> in</span>
                <span className="ml-1 text-orange-600 font-semibold">
                  Bangalore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
