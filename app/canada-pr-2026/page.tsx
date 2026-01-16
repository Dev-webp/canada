// app/germany-opportunity-card/page.tsx
"use client";

import { useState } from "react";
import AdCard from "../components/AdCard";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import WhatIsSection from "../components/WhatIsSection";
import WhyVJCSection from "../components/WhyVJCSection";
import GameChangerSection from "../components/GameChangerSection";
import AdvantageSection from "../components/AdvantageSection";
import TestimonialSection from "../components/TestimonialSection";
import FinalCTASection from "../components/FinalCTASection";
import FormModal from "../components/FormModal";
import Form from "../components/Form";

export default function GermanyOpportunityCard() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <>
   
     
        {/* Hero Section - Full Width */}
      <Hero />  
          

      {/* NEW CONTENT SECTIONS */}
      <IntroSection />

   

      <WhatIsSection />

     

      <GameChangerSection />

    <FinalCTASection  />
     
       <WhyVJCSection />
 <AdvantageSection />
      <TestimonialSection />

      

      

      
    </>
  );
}
