"use client";

import React from "react";
import {
  FaUserGraduate,
  FaLanguage,
  FaBriefcase,
  FaFileAlt,
  FaClipboardList,
  FaPlaneDeparture,
  FaStethoscope,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
} as const;

const eligibilityPoints = [
  {
    icon: <FaUserGraduate />,
    title: "Age Matters",
    description:
      "Ideal age: 18–35. Points decrease gradually after 35, but you can still qualify with other strengths!",
  },
  {
    icon: <FaUserGraduate />,
    title: "Education",
    description:
      "Minimum: High School Diploma. Higher education earns more CRS points. Bonus for <span class='text-red-600 font-semibold'>Canada</span> credentials!",
  },
  {
    icon: <FaLanguage />,
    title: "Language Proficiency",
    description:
      "Take IELTS or CELPIP. CLB 7+ required. Strong English/French gives a big CRS boost.",
  },
  {
    icon: <FaBriefcase />,
    title: "Work Experience",
    description:
      "Minimum 1 year of full-time skilled work in the last 10 years. Overseas experience counts; <span class='text-red-600 font-semibold'>Canadian</span> experience is a plus.",
  },
  {
    icon: <FaClipboardList />,
    title: "CRS Score",
    description:
      "Points for valid <span class='text-red-600 font-semibold'>Canadian</span> job offers. The higher your CRS, the better your chances!",
  },
  {
    icon: <FaStethoscope />,
    title: "Medical & Police Clearance",
    description:
      "Must be in good health and have a clean police record to qualify for PR.",
  },
];

const processSteps = [
  {
    icon: <FaClipboardList />,
    step: "01",
    title: "Profile Evaluation",
    description:
      "We analyze your education, work experience, and language scores to check eligibility under <span class='text-red-600 font-semibold'>Canada</span> PR programs.",
  },
  {
    icon: <FaUserGraduate />,
    step: "02",
    title: "Counseling & Planning",
    description:
      "Our experts guide you to the most suitable PR stream (Express Entry, PNP, etc.) and plan your migration path to <span class='text-red-600 font-semibold'>Canada</span>.",
  },
  {
    icon: <FaFileAlt />,
    step: "03",
    title: "Documentation Support",
    description:
      "We help gather, organize, and verify all required documents for your <span class='text-red-600 font-semibold'>Canada</span> PR visa submission.",
  },
  {
    icon: <FaPlaneDeparture />,
    step: "04",
    title: "Application Submission",
    description:
      "We submit your PR application accurately through Express Entry, PNP, or other <span class='text-red-600 font-semibold'>Canada</span> immigration portals.",
  },
  {
    icon: <FaCheckCircle />,
    step: "05",
    title: "Follow-Up & Updates",
    description:
      "We track your application, respond to government queries, and keep you updated throughout your <span class='text-red-600 font-semibold'>Canada</span> PR journey.",
  },
  {
    icon: <FaBriefcase />,
    step: "06",
    title: "Visa Approval & Pre-departure",
    description:
      "After approval, we guide you on travel, accommodation, and settlement in <span class='text-red-600 font-semibold'>Canada</span> for a smooth transition.",
  },
];

const CanadaPREligibilityAndProcess: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full py-14 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* --- Eligibility Section --- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 bg-black bg-clip-text text-transparent">
            Are You Eligible for <span className="text-red-600">Canada</span> PR?
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            <span className="text-red-600 font-semibold">Canada</span> is calling! Check your eligibility for Permanent Residence with these key criteria:
          </p>
        </div>

        {/* Eligibility Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {eligibilityPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg border border-orange-100 transition-all text-center flex flex-col items-center"
            >
              <div className="text-orange-500 text-3xl mb-2">{point.icon}</div>
              <h3 className="font-semibold text-lg mb-1 text-orange-500">{point.title}</h3>
              <p
                className="text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: point.description }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Apply Now button under eligibility */}
        <div className="flex justify-center mb-20">
          <button
            onClick={scrollToTop}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 transition-all duration-300"
          >
            Check Your Eligibility
          </button>
        </div>

        {/* --- Application Process Section --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 bg-black bg-clip-text text-transparent">
            <span className="text-red-600">Canada</span> PR Application Process
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Step-by-step expert guidance to help you move to <span className="text-red-600 font-semibold">Canada</span> with confidence:
          </p>
        </div>

        {/* Image + Steps beside each other */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Image */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/canada-pr-application-process.png"
              alt="Canada PR Process"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto object-contain"
            />

            {/* Apply Now button below the image */}
           
          </motion.div>

          {/* Right Steps (stacked vertically) */}
          <motion.div
            className="flex-1 flex flex-col justify-between h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center mb-3"
              >
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-lg bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step.step}
                </div>
                <div className="text-orange-500 text-2xl mb-2">{step.icon}</div>
                <h3 className="font-semibold text-base text-orange-500 mb-1">{step.title}</h3>
                <p
                  className="text-xs text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
                
              </motion.div>
              
            ))}
             <div className="flex justify-center mt-6">
              <button
                onClick={scrollToTop}
                className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 transition-all duration-300"
              >
                Check Eligibility
              </button>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
};

export default CanadaPREligibilityAndProcess;
