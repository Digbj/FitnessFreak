import React from "react";
import { NavBar } from "./component/NavBar";
import { Footer } from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Registration";
import { HeroSection } from "./component/Hero";
import { InfoSection } from "./component/ImageText";
import { TestimonialCarousel } from "./component/Testemonial";
import {FitnessStats} from "./component/Statistics";
import { ContactUs } from "./component/ContactUs";
import { WhatsAppButton } from "./component/reusable/WhatsApp";


function App() {
  return (
    <div className="bg-[#eefeff]">
      <NavBar />
      <HeroSection />
      <InfoSection />
      <TestimonialCarousel />
      <FitnessStats />
      <ContactUs />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}

export default App;
