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
      {/* Image: hidden on mobile (text sits on plain bg), visible on md+ */}
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
        className="hidden md:block w-full h-full object-cover object-right"
      />
      {/*
        Desktop fade overlays (md+):
        1. Left panel — solid #0B0B0C covering ~55% of width so text always has a fully opaque backing
        2. Left-to-right gradient blending the solid into the image
        3. Top gradient so the image's top edge dissolves into the page bg
        4. Bottom gradient so the image's bottom edge dissolves into the page bg
      */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[55%] bg-[#0B0B0C]" />
      <div className="hidden md:block absolute inset-y-0 left-[45%] w-[30%]"
        style={{ background: "linear-gradient(to right, #0B0B0C, transparent)" }}
      />
      <div className="hidden md:block absolute inset-x-0 top-0 h-32"
        style={{ background: "linear-gradient(to bottom, #0B0B0C, transparent)" }}
      />
      <div className="hidden md:block absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to top, #0B0B0C, transparent)" }}
      />
    </div>
  );
}
