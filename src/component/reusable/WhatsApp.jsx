import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919963428347" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-50"
    >
      <img
        src={whatsapp}
        alt="WhatsApp Chat"
        className="h-14 w-14 object-contain"
      />
    </a>
  );
};
