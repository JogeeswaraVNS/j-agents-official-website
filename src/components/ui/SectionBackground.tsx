import React, { useState } from "react";

interface SectionBackgroundProps {
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
}

export function SectionBackground({
  src,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
}: SectionBackgroundProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding={decoding}
        {...(fetchPriority ? { fetchPriority } : {})}
        width={1672}
        height={941}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center md:object-left"
      />

      {/* Horizontal Gradient Overlay:
          - Mobile (below md): Uniform heavy coverage (90% to 85%) across the entire width so centered/spanning text meets WCAG AA everywhere.
          - Desktop (md and up): Heavy coverage (95% to 90%) over the left text area (0% to 55%), gradually tapering to a light 25% overlay on the right so the image remains clearly visible.
      */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(11, 11, 12, 0.95) 0%, rgba(11, 11, 12, 0.92) 40%, rgba(11, 11, 12, 0.88) 58%, rgba(11, 11, 12, 0.55) 75%, rgba(11, 11, 12, 0.25) 100%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(11, 11, 12, 0.92) 0%, rgba(11, 11, 12, 0.88) 50%, rgba(11, 11, 12, 0.85) 100%)",
        }}
      />

      {/* Vertical Edge Fades:
          Fades the top and bottom into solid #0B0B0C so sections blend smoothly and section dividers remain crisp.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11, 11, 12, 0.85) 0%, transparent 18%, transparent 82%, rgba(11, 11, 12, 0.90) 100%)",
        }}
      />
    </div>
  );
}
