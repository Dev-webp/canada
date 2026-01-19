"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { X, MessageSquare, Mail, User, Info, Loader2 } from "lucide-react";

const PRIZES = [
  { label: "10% FLAT DISCOUNT", color: "#1e40af", weight: 25 },
  { label: "UPTO 30% DISCOUNT", color: "#b91c1c", weight: 15 },
  { label: "FREE WES", color: "#047857", weight: 20 },
  { label: "FREE IELTS", color: "#7c3aed", weight: 15 },
  { label: "76th REPUBLIC DAY OFFER", color: "#ea580c", weight: 25 },
];

const BG_IMAGE = "/canada-pr-job-oppurtunities.jpeg";
const WHATSAPP_LINK = "https://wa.me/919160449000";

interface SpinWheelProps {
  onClose: () => void;
}

export default function SpinWheel({ onClose }: SpinWheelProps) {
  const [showRules, setShowRules] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [step, setStep] = useState<"form" | "spinning" | "result">("form");
  const [resultPrize, setResultPrize] = useState<typeof PRIZES[0] | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSendingMail, setIsSendingMail] = useState(false);
  
  const wheelRef = useRef<HTMLDivElement>(null);
  const spinSound = useRef<HTMLAudioElement | null>(null);
  const winSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    spinSound.current = new Audio("/spin.mp3");
    winSound.current = new Audio("/win.mp3");
  }, []);

  const startSpin = () => {
    if (!formData.name || !formData.phone || !formData.email || isSpinning) return;
    
    const totalWeight = PRIZES.reduce((acc, p) => acc + p.weight, 0);
    let random = Math.random() * totalWeight;
    let selected = PRIZES[0];
    for (const p of PRIZES) { 
      if (random < p.weight) { 
        selected = p; 
        break; 
      } 
      random -= p.weight; 
    }

    setResultPrize(selected);
    setIsSpinning(true);
    setStep("spinning");
    
    if (spinSound.current) {
      spinSound.current.currentTime = 0;
      spinSound.current.play().catch(() => {});
    }
    
    const segmentAngle = 360 / PRIZES.length;
    // Slow 5 second spin duration
    const targetRotation = 2160 + (360 - (PRIZES.indexOf(selected) * segmentAngle + segmentAngle / 2));
    
    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 5s cubic-bezier(0.15, 0, 0.15, 1)";
      wheelRef.current.style.transform = `rotate(${targetRotation}deg)`;
    }

    setTimeout(async () => {
      setIsSpinning(false);
      setStep("result");
      
      if (spinSound.current) { 
        spinSound.current.pause(); 
        spinSound.current.currentTime = 0; 
      }
      if (winSound.current) winSound.current.play().catch(() => {});

      confetti({ 
        particleCount: 200, 
        spread: 80, 
        origin: { y: 0.6 }, 
        zIndex: 10000 
      });

      setIsSendingMail(true);
      try {
        await fetch("/api/assessment/spin-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            prize: selected.label
          }),
        });
      } catch (err) {
        console.error("Mail trigger failed:", err);
      } finally {
        setIsSendingMail(false);
      }
    }, 5000);
  };

  const resetWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "rotate(0deg)";
    }
    setStep("form");
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden h-[100dvh]">
      
      <div className="absolute inset-0 z-0">
        <img src={BG_IMAGE} className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 w-full h-full max-w-5xl flex flex-col lg:flex-row overflow-hidden ">
        
        {/* CLOSE BUTTON - MOBILE */}
        <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-[100] lg:hidden">
          <span className="text-yellow-500 font-black tracking-tighter text-sm uppercase">VJC Overseas</span>
          <button onClick={onClose} className="bg-yellow-500 text-black p-1.5 rounded-full active:scale-90">
            <X size={20} />
          </button>
        </div>

        {/* WHEEL SECTION */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 pt-12 lg:pt-4">
          <h2 className="hidden lg:block text-xl font-black text-yellow-500 tracking-[0.3em] mb-10 uppercase">VJC Overseas Future Wheel</h2>
          
          <div className="relative w-[75vw] h-[75vw] max-w-[380px] max-h-[380px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-50 text-4xl">👈</div>
            <div
              ref={wheelRef}
              className="w-full h-full rounded-full border-[6px] lg:border-[12px] border-yellow-500 relative overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.4)]"
              style={{ 
                background: `conic-gradient(${PRIZES.map((p, i) => 
                  `${p.color} ${(i * 360) / PRIZES.length}deg ${((i + 1) * 360) / PRIZES.length}deg`
                ).join(", ")})` 
              }}
            >
              {PRIZES.map((p, i) => (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 w-1/2 -translate-y-1/2 origin-left flex justify-end pr-3 lg:pr-10" 
                  style={{ transform: `rotate(${(i * 360) / PRIZES.length + (360 / PRIZES.length / 2)}deg)` }}
                >
                  <span className="text-[2.5vw] lg:text-[12px] font-black text-white uppercase text-right leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-[18%] h-[18%] bg-white rounded-full border-2 border-yellow-500 flex items-center justify-center p-1 shadow-2xl">
                <img src="/logo-vjc.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* FORM / RESULT SECTION */}
        <div className="flex-1 flex flex-col justify-center p-6 lg:p-12 bg-black/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-t-[40px] lg:rounded-none">
          <AnimatePresence mode="wait">
            {step !== "result" ? (
              <motion.div key="form" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} className="space-y-4">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl lg:text-6xl font-black text-white leading-none uppercase">Spin To <span className="text-yellow-500">Win!</span></h3>
                </div>
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={16} />
                    <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 pl-12 bg-white rounded-xl text-black font-bold text-sm" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={16} />
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-4 pl-12 bg-white rounded-xl text-black font-bold text-sm" />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={16} />
                    <input type="tel" placeholder="WhatsApp Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-4 pl-12 bg-white rounded-xl text-black font-bold text-sm" />
                  </div>
                  <button onClick={startSpin} disabled={!formData.name || !formData.phone || !formData.email || isSpinning} className="w-full py-4 bg-yellow-500 text-black font-black text-lg rounded-xl shadow-xl active:scale-95 disabled:opacity-50 uppercase">
                    {isSpinning ? "Spinning..." : "Get My Offer 🎯"}
                  </button>
                </div>
                <button onClick={() => setShowRules(true)} className="flex items-center gap-2 text-[10px] text-yellow-500/80 underline uppercase font-bold mx-auto lg:mx-0"><Info size={12} /> View Rules</button>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-6">
                <div className="bg-yellow-500 p-8 rounded-3xl shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                  <p className="text-black font-black text-xs uppercase mb-1">Congratulations!</p>
                  <h3 className="text-3xl lg:text-5xl font-black text-black uppercase">{resultPrize?.label}</h3>
                </div>
                <div className="grid gap-3">
                  <a href={WHATSAPP_LINK} target="_blank" className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-black rounded-xl shadow-lg active:scale-95">
                    <MessageSquare size={20} fill="white" /> CLAIM ON WHATSAPP
                  </a>
                  {isSendingMail && (
                    <div className="flex items-center justify-center gap-2 text-yellow-500 text-xs font-bold animate-pulse">
                      <Loader2 className="animate-spin" size={14} /> REGISTERING...
                    </div>
                  )}
                  <button onClick={resetWheel} className="text-white/50 text-xs underline uppercase">Spin Again</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CLOSE BUTTON - DESKTOP */}
        <button onClick={onClose} className="hidden lg:block absolute top-8 right-8 text-white/50 hover:text-white transition-colors active:scale-90">
          <X size={32} />
        </button>
      </div>

      {/* RULES POPUP */}
      <AnimatePresence>
        {showRules && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm">
            <div className="relative w-full max-w-sm bg-[#111] border border-yellow-500/30 p-8 rounded-[30px]">
              <button onClick={() => setShowRules(false)} className="absolute top-4 right-4 text-gray-500"><X size={20} /></button>
              <h4 className="text-yellow-500 font-black text-xl mb-4 uppercase">Rules</h4>
              <ul className="text-gray-300 text-sm space-y-3 font-medium">
                <li>• One User One Offer only.</li>
                <li>• Applicable to Primary Applicant only.</li>
                <li>• Offers are non-transferable.</li>
              </ul>
              <button onClick={() => setShowRules(false)} className="w-full mt-8 py-3 bg-yellow-500 text-black font-black rounded-xl uppercase text-sm">Got it</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}