"use client";

import React from "react";
import {
  FaFastForward,
  FaFileAlt,
  FaSuitcase,
  FaBriefcase,
  FaHome,
  FaUserTie,
  FaClipboardList,
  FaPenFancy,
  FaLanguage,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  step: number;
}

const services: Service[] = [
  { id: "0", step: 1, title: "Determine Eligibility", icon: <FaClipboardList /> },
  { id: "1", step: 2, title: "Choose Your PR Program (Express Entry / PNP)", icon: <FaFastForward /> },
  { id: "2", step: 3, title: "Gather Required Documents", icon: <FaFileAlt /> },
  { id: "3", step: 4, title: "Submit Online Application", icon: <FaPenFancy /> },
  { id: "4", step: 5, title: "Profile Assessment and CRS Score Optimization", icon: <FaBriefcase /> },
  { id: "5", step: 6, title: "Interview and Additional Document Support", icon: <FaUserTie /> },
  { id: "6", step: 7, title: "Visa Approval and Travel Planning", icon: <FaHome /> },
  { id: "7", step: 8, title: "Post Landing Settlement Guidance", icon: <FaSuitcase /> },
  { id: "8", step: 9, title: "Language & Integration Support", icon: <FaLanguage /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
} as const;

const CanadaPRServices: React.FC = () => {
  return (
    <section className="w-full py-6 md:py-6 lg:py-8 bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-bold uppercase mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent leading-tight"
            variants={cardVariants}
          >
            <span className="block sm:inline">Steps for</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-slate-900 mt-2">
              Canada PR Process with VJC Overseas
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4"
            variants={cardVariants}
          >
            Follow these <span className="text-orange-500 font-bold">step-by-step</span> services to move to Canada smoothly,
            from eligibility checks to post-landing settlement.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="
                relative bg-white
                p-5 lg:p-6
                rounded-xl
                border border-orange-100
                shadow-sm hover:shadow-md
                transition-all
              "
            >
              {/* STEP */}
              <div className="absolute -top-3 -left-3 w-9 h-9 rounded-lg bg-orange-500 text-white text-sm font-bold flex items-center justify-center shadow">
                {service.step}
              </div>

              {/* ICON */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-500 text-xl mx-auto mb-3">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm sm:text-base font-semibold text-center text-slate-900 mb-1 leading-snug line-clamp-2">
                {service.title}
              </h3>

              {/* TEXT */}
              <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                Personalized assistance tailored to your Canada PR journey.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CanadaPRServices;
