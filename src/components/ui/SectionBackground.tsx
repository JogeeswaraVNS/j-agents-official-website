import React, { useState } from "react";
import { RevealImage } from "./RevealAnimation";

interface SectionBackgroundProps {
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  animate?: boolean;
}

export function SectionBackground({
  src,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  animate = true,
}: SectionBackgroundProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return null;
  }

  const imageElement = (
    <div className="hidden md:block absolute right-0 inset-y-0 w-[58%]">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding={decoding}
        {...(fetchPriority ? { fetchPriority } : {})}
        width={1672}
        height={941}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center"
      />
      {/* Left edge: continuous fade from #0B0B0C → transparent, no hard line */}
      <div
        className="absolute inset-y-0 left-0 w-[45%]"
        style={{ background: "linear-gradient(to right, #0B0B0C, transparent)" }}
      />
      {/* Top edge: image dissolves into the page / nav */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{ background: "linear-gradient(to bottom, #0B0B0C, transparent)" }}
      />
      {/* Bottom edge: image dissolves into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to top, #0B0B0C, transparent)" }}
      />
    </div>
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      {animate ? (
        <RevealImage
          className="w-full h-full"
          durationMs={1000}
          isLoaded={loading === "eager" ? isLoaded : true}
        >
          {imageElement}
        </RevealImage>
      ) : (
        imageElement
      )}
    </div>
  );
}
