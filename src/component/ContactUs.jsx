
import { Button } from "@mui/material";
import React, { useState } from "react";
import Trainer from '../assets/images/trainer.webp'
export const ContactUs = () => {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const submit =() => {
    e.preventDefault();
    console.log(contact);
  };


  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold">Book a Meeting</h2>
        <p className="text-lg text-gray-600">
          Get in touch with our experts — we’re just a message away to help you
          succeed
        </p>
      </div>
      <div className="grid max-w-7xl md:grid-cols-2 gap-12 items-start justify-around">
        {/* Left Side */}
        <div className="flex-1 flex max-w-7xl flex-col items-center text-center md:text-left">
          <div className="relative w-80 h-full flex items-center justify-center">
            {/* Glowing background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-blue-400 blur-3xl opacity-70" />
            </div>
            <img
              src={Trainer}
              alt="trainer"
              className="relative z-10 w-60 h-full object-cover rounded-xl"
            />
          </div>

          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 max-w-md">
            We’d love to hear from you! Whether you have a question about
            features, pricing, or anything else — our team is ready to answer.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 w-full mx-auto max-w-md bg-white rounded-2xl shadow-lg backdrop-blur-md border border-black/10">
          <form
            onSubmit={submit}
            className="p-6 flex flex-col gap-4 rounded-xl"
          >
            <p className="text-xl font-semibold text-center mb-2">Contact Us</p>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                value={contact.subject}
                onChange={(e) =>
                  setContact({ ...contact, subject: e.target.value })
                }
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                placeholder="Type your message here"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                rows={4}
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
              />
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
