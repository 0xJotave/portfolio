"use client";

import React from "react";
import { EndpointData } from "@/src/types/endpoint";

interface EndpointButtonProps {
  endpoint: EndpointData;
  isSelected: boolean;
  onClick: () => void;
}

export const EndpointButton: React.FC<EndpointButtonProps> = ({
  endpoint,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3.5 rounded-lg border font-mono text-xs transition-all duration-200 flex items-center justify-between ${
        isSelected
          ? "bg-purple-950/50 border-purple-500/60 text-white shadow-md shadow-purple-950/50"
          : "bg-black/20 border-purple-900/10 text-gray-400 hover:border-purple-800/40 hover:text-gray-200"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-[10px]">
          GET
        </span>
        <span className="font-semibold">{endpoint.path}</span>
      </div>
      <div
        className={`w-2 h-2 rounded-full transition-all ${
          isSelected ? "bg-purple-400 shadow-[0_0_8px_#a855f7]" : "bg-transparent"
        }`}
      />
    </button>
  );
};