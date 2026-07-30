"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Award, Layers } from "lucide-react";

export const StatsCards: React.FC = () => {
  const cards = [
    {
      title: "Experience",
      main: "UOL",
      sub: "Backend Developer",
      icon: Briefcase,
      color: "text-purple-400",
      border: "border-purple-900/30",
    },
    {
      title: "Main Project",
      main: "PWNNED",
      sub: "CyberSecurity EdTech",
      icon: Code2,
      color: "text-cyan-400",
      border: "border-cyan-900/30",
    },
    {
      title: "Certificates",
      main: "AWS CCP",
      sub: "EF SET C1",
      icon: Award,
      color: "text-amber-400",
      border: "border-amber-900/30",
    },
    {
      title: "Current Stack",
      main: "Java & Node.js",
      sub: "Spring Boot & TS",
      icon: Layers,
      color: "text-emerald-400",
      border: "border-emerald-900/30",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className={`bg-[#0d0c14]/80 backdrop-blur-md border ${card.border} p-5 rounded-xl hover:border-purple-500/40 transition-all duration-300 group shadow-lg`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {card.title}
                </span>
                <Icon size={18} className={`${card.color} opacity-80 group-hover:scale-110 transition-transform duration-200`} />
              </div>
              <p className="text-lg font-bold text-white font-mono tracking-tight">
                {card.main}
              </p>
              <p className="text-xs text-gray-400 mt-1 font-sans">
                {card.sub}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};