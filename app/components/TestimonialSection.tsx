"use client";

import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [successCount, setSuccessCount] = useState(1);
  const [yearsCount, setYearsCount] = useState(1);

  useEffect(() => {
    const successInterval = setInterval(() => {
      setSuccessCount((prev) => {
        if (prev >= 3000) {
          clearInterval(successInterval);
          return 3000;
        }
        return prev + 50;
      });
    }, 150);

    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => {
        if (prev >= 16) {
          clearInterval(yearsInterval);
          return 16;
        }
        return prev + 1;
      });
    }, 250);

    return () => {
      clearInterval(successInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-red-500 fill-current" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white ">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {successCount.toLocaleString()}+ Successful Canada PR Stories
          </h2>
          <p className="mt-2 text-slate-600 text-lg">
            Trusted Canada PR Experts for{" "}
            <span className="font-semibold text-red-600">{yearsCount}+ Years</span>
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="group rounded-2xl border border-red-500 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-700 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "VJC Overseas made my Canada PR journey simple and clear. Their guidance on Express Entry and CRS optimization ensured I got my PR fast. Now I'm enjoying life in Toronto!"
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Rahul S.</p>
              <p className="text-sm text-slate-500">Software Engineer</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Thanks to VJC Overseas, I successfully applied for Canada PR through PNP. Their team guided me step-by-step, and my landing in Vancouver was seamless!"
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Priya P.</p>
              <p className="text-sm text-slate-500">Business Analyst</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Professional, transparent, and reliable. VJC's Canada PR experts made my application smooth and helped me relocate with my family comfortably."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Amit K.</p>
              <p className="text-sm text-slate-500">IT Consultant</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "VJC Overseas helped me achieve Canada PR in record time. From eligibility checks to document submission, the process was smooth and stress-free!"
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Suresh M.</p>
              <p className="text-sm text-slate-500">Engineer</p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "I couldn’t have done it without VJC Overseas. Their team ensured all my documents were perfect, and now I’m living my Canadian dream in Calgary!"
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Anjali R.</p>
              <p className="text-sm text-slate-500">Marketing Specialist</p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Exceptional consultancy! VJC Overseas guided me through every step of the Canada PR process. Now I’m thriving in Montreal with great opportunities."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Neha G.</p>
              <p className="text-sm text-slate-500">Healthcare Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
