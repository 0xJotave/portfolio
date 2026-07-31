"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Sparkles } from "lucide-react";

const BADGES = [
  "Java",
  "Spring Boot",
  "Node.js",
  "TypeScript",
  "Docker",
  "AWS",
  "Kafka",
  "PostgreSQL",
  "MongoDB",
  "Redis"
];

export const Hero: React.FC = () => {
  return (
    <header className="w-full max-w-6xl mx-auto pt-16 pb-12 px-4 flex flex-col items-start gap-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-mono backdrop-blur-md"
      >
        <Sparkles size={13} className="text-purple-400" />
        <span>v1.0.0 — REST API Documentation</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-3 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          João Victor Moura Barbosa
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-purple-200 to-cyan-400 font-mono">
          Back-end Engineer
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl font-sans"
      >
        Desenvolvedor Back-end com experiência em Java e Spring Boot adquirida na UOL, atualmente expandindo atuação para Node.js e TypeScript, construindo APIs escaláveis, microsserviços e aplicações utilizando Arquitetura Hexagonal, Docker e AWS.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2 pt-2"
      >
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 rounded-md bg-[#12111d] border border-purple-900/30 text-gray-300 text-xs font-mono hover:border-purple-500/50 hover:text-white transition-colors duration-200"
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </header>
  );
};