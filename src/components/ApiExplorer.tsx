"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENDPOINTS_DATA } from "@/src/data/endpoints";
import { EndpointKey } from "@/src/types/endpoint";
import { EndpointButton } from "./EndpointButton";
import { JsonViewer } from "./JsonViewer";
import { Play, Copy, Check, FileText } from "lucide-react";


const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} className="fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} className="fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const ApiExplorer: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<EndpointKey>("about");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeEndpoint = ENDPOINTS_DATA[selectedKey];

  const handleSelect = (key: EndpointKey) => {
    if (key === selectedKey) return;
    setIsLoading(true);
    setSelectedKey(key);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(activeEndpoint.response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-16">
      <div className="bg-[#0b0a12]/90 border border-purple-900/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">

        <div className="bg-[#12101e] px-5 py-3.5 border-b border-purple-900/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-400 pl-2 border-l border-purple-900/40">
              REST OpenAPI v3.0
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              200 OK
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/40 text-purple-300 border border-purple-800/30 hover:bg-purple-900/50 transition-colors"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? "Copied" : "Copy JSON"}</span>
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">

          <div className="md:col-span-4 border-r border-purple-900/20 p-4 bg-[#0e0c18]/60 space-y-2">
            <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider px-2 mb-3">
              Endpoints Documentation
            </p>
            {(Object.keys(ENDPOINTS_DATA) as EndpointKey[]).map((key) => (
              <EndpointButton
                key={key}
                endpoint={ENDPOINTS_DATA[key]}
                isSelected={selectedKey === key}
                onClick={() => handleSelect(key)}
              />
            ))}
          </div>


          <div className="md:col-span-8 p-6 flex flex-col justify-between bg-[#07060c] relative">
            <div>

              <div className="flex items-center justify-between gap-2 bg-[#12101f] p-3 rounded-xl border border-purple-900/30 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    GET
                  </span>
                  <span className="text-gray-200 font-semibold">{activeEndpoint.path}</span>
                </div>
                <span className="text-gray-400 text-[11px] hidden sm:inline">
                  {activeEndpoint.description}
                </span>
              </div>


              <div className="bg-[#030206] p-5 rounded-xl border border-purple-900/20 min-h-[260px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-[#030206]/90 backdrop-blur-sm z-10"
                    >
                      <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                        <Play size={14} className="animate-spin" /> Fetching response payload...
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={selectedKey}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <JsonViewer data={activeEndpoint.response} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>


            {selectedKey === "contact" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-4 border-t border-purple-900/30 flex flex-wrap gap-3"
              >
                <a
                  href="https://github.com/0xJotave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-700/40 text-xs font-mono text-purple-200 transition-all"
                >
                  <GithubIcon size={14} /> Open GitHub
                </a>
                <a
                  href="https://linkedin.com/in/0xjotave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-700/40 text-xs font-mono text-cyan-200 transition-all"
                >
                  <LinkedinIcon size={14} /> Open LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-700/40 text-xs font-mono text-emerald-200 transition-all"
                >
                  <FileText size={14} /> Download Resume
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};