"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const CanadaPRSteps: React.FC = () => {
  const steps = [
    {
      step: "Determine Eligibility",
      text: "Before applying for a Canada PR visa, ensure you meet the eligibility criteria based on factors like age, education, work experience, language skills, and other requirements.",
    },
    {
      step: "Choose Your Program",
      text: "Depending on your profile, you can apply under programs such as Express Entry, Provincial Nominee Program (PNP), or other PR pathways suitable for your skills and background.",
    },
    {
      step: "Gather Documents",
      text: "Collect all necessary documents including educational certificates, language test results, work experience proof, and any other required paperwork to strengthen your application.",
    },
    {
      step: "Submit Your Application",
      text: "Submit your application online through the official Canadian immigration portal along with all supporting documents and applicable fees.",
    },
    {
      step: "Wait for Processing",
      text: "Once submitted, wait for the processing time. You may be asked to provide additional documents or attend an interview during this period.",
    },
    {
      step: "Receive Your PR",
      text: "After approval, you will receive your PR. Congratulations! You are now a Canadian permanent resident ready to start your new journey.",
    },
  ];

  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="bg-white  px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6 md:mb-8">
          How to Apply for <span className="text-red-600">Canada PR Visa</span>
        </h2>

        {/* Top Row: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Text */}
          <div ref={textRef} className="lg:col-span-7 space-y-4">
            {steps.slice(0, 2).map((item, index) => (
              <p key={index} className="text-black leading-relaxed text-lg">
                <span className="font-bold text-black">Step {index + 1}:</span>{" "}
                <span className="font-semibold text-red-600">{item.step}</span>{" "}
                – <span>{item.text}</span>
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end -mt-14 lg:mt-0">
            <div
              className={`relative w-full max-w-md rounded-xl`}
              style={{ height: textHeight ? `${textHeight}px` : "auto" }}
            >
              <Image
                src="/canada-pr-apply.png"
                alt="Apply for Canada PR Visa"
                fill
                className="object-contain rounded-xl"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Remaining Steps */}
        <div className="space-y-2 sm:-mt-8 -mt-16 md:-mt-0">
          {steps.slice(2).map((item, index) => (
            <p key={index} className="text-black leading-relaxed text-lg">
              <span className="font-bold text-black">Step {index + 3}:</span>{" "}
              <span className="font-semibold text-red-600">{item.step}</span>{" "}
              – <span>{item.text}</span>
            </p>
          ))}
        </div>
         <div className="w-full h-1 bg-linear-to-r from-red-600 to-orange-550" />
      </div>
    </section>
  );
};

export default CanadaPRSteps;
