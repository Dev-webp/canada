'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Form from "./Form";

const CanadaPRSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Bangalore → Toronto",
      text: "VJC made my Canada PR dream reality in just 8 months! Their personalized guidance and document preparation was flawless. Now settled with family in Toronto enjoying free healthcare and excellent schools.",
      rating: 5
    },
    {
      name: "Priya Patel",
      location: "Hyderabad → Vancouver",
      text: "10/10 recommend VJC! They handled my Express Entry profile optimization and got me 485 CRS score. Landing in Vancouver was seamless. Best decision of my life!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      location: "Delhi → Calgary",
      text: "From profile assessment to PPR, VJC team was with me every step. Their 15+ years experience shows. Got my PR in record time and now working as Software Engineer in Calgary.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="min-h-screen mt-14  md:px-4 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE - FORM */}
          <div className="lg:col-span-8 xl:col-span-9">
            <Form />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Award Image */}
           

            {/* Why Choose Canada PR */}
            <div>
             <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent mb-3">
 Why Choose Canada PR?
</h3>
<ul className="text-sm text-gray-800 space-y-2 ml-2">
  <li>• Access to world’s best healthcare system (free for residents)</li>
  <li>• Family sponsorship rights immediately</li>
  <li>• Citizenship pathway after just 3 years</li>
  <li>• Child benefits $500–700/month automatically</li>
  <li>• Globally recognized education system with free schooling for children</li>
  <li>• High standard of living with world-class infrastructure</li>
  <li>• Strong job market with demand in IT, healthcare, and engineering sectors</li>
  <li>• Social security benefits and retirement savings programs for residents</li>

  <li>• Dual citizenship allowed after naturalization</li>
  
</ul>

            </div>
            
            {/* Why Choose VJC Overseas */}
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Why Choose VJC Overseas?
              </h3>
               <div className="p-2">
              <Image
                src="/award.png"
                alt="VJC Award"
                width={1200}
                height={1200}
                className="w-full object-contain"
              />
            </div>
              <ul className="text-sm text-gray-800 space-y-2 ml-2">
                 <li>• Award Wining Consultensy</li>
                <li>• 16+ years serving 25,000+ Indian families</li>
                <li>• 98% success rate across all programs</li>
                <li>• Dedicated case officer throughout journey</li>
                <li>• In-house CRS calculator & score improvement</li>
                <li>• Complete document services included</li>
                <li>• Strong relationships with RCIC-licensed partners in Canada</li>
  <li>• 24×7 client support via WhatsApp and email</li>
  <li>• Proven success stories from professionals across India</li>
              </ul>
            </div>
              
            {/* Reviews Section */}
            <div className="rounded-2xl border border-red-200 p-5 shadow-sm bg-white/40">
              <h4 className="text-lg font-bold text-red-600 mb-4 text-center">Success Stories</h4>

              {/* Sliding Container */}
              <div className="relative overflow-hidden min-h-[180px] sm:min-h-[200px]">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReview * 100}%)`,
                    width: `${reviews.length * 33}%`
                  }}
                >
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 flex justify-center px-2"
                    >
                      <div className="bg-white rounded-xl p-4 shadow-md border border-red-100 w-full">
                        <div className="flex items-center mb-2">
                          <div className="flex gap-0.5 mr-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-red-500 text-base">★</span>
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            {review.name}
                          </span>
                        </div>
                        <p className="text-sm leading-snug text-gray-700 mb-2">
                          {review.text}
                        </p>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                          {review.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-4 justify-center">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? 'bg-red-600 scale-125 shadow-md'
                        : 'bg-red-200 hover:bg-red-300'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CanadaPRSection;
