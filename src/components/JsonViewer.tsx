"use client";

import React from "react";

interface JsonViewerProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => {
  const formatJsonValue = (value: unknown, depth = 1): React.ReactNode => {
    const indent = "  ".repeat(depth);
    const closingIndent = "  ".repeat(depth - 1);

    if (value === null) return <span className="text-gray-500">null</span>;
    if (typeof value === "boolean")
      return <span className="text-amber-400">{value ? "true" : "false"}</span>;
    if (typeof value === "number")
      return <span className="text-cyan-400">{value}</span>;
    if (typeof value === "string") {
      const isUrl = value.startsWith("http");
      return (
        <span className="text-emerald-300">
          &quot;
          {isUrl ? (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300 transition-colors"
            >
              {value}
            </a>
          ) : (
            value
          )}
          &quot;
        </span>
      );
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="text-gray-300">[]</span>;
      return (
        <span>
          <span className="text-gray-300">[</span>
          <br />
          {value.map((item, idx) => (
            <React.Fragment key={idx}>
              {indent}
              {formatJsonValue(item, depth + 1)}
              {idx < value.length - 1 && <span className="text-gray-400">,</span>}
              <br />
            </React.Fragment>
          ))}
          {closingIndent}
          <span className="text-gray-300">]</span>
        </span>
      );
    }

    if (typeof value === "object") {
      const entries = Object.entries(value);
      if (entries.length === 0) return <span className="text-gray-300">{"{}"}</span>;
      return (
        <span>
          <span className="text-gray-300">{"{"}</span>
          <br />
          {entries.map(([k, v], idx) => (
            <React.Fragment key={k}>
              {indent}
              <span className="text-purple-300">&quot;{k}&quot;</span>
              <span className="text-gray-400">: </span>
              {formatJsonValue(v, depth + 1)}
              {idx < entries.length - 1 && <span className="text-gray-400">,</span>}
              <br />
            </React.Fragment>
          ))}
          {closingIndent}
          <span className="text-gray-300">{"}"}</span>
        </span>
      );
    }

    return String(value);
  };

  return (
    <pre className="font-mono text-xs leading-relaxed text-gray-200 overflow-x-auto p-1 selection:bg-purple-900/50">
      {formatJsonValue(data)}
    </pre>
  );
};