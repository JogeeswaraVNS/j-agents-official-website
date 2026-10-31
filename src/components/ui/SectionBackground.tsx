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
        loading="lazy"
        decoding="async"
        width={1672}
        height={941}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
