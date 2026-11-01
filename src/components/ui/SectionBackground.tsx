import React, { useState } from "react";
import { RevealImage } from "./RevealAnimation";

interface SectionBackgroundProps {
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  animate?: boolean;
  className?: string;
  overlayClassName?: string;
}

export function SectionBackground({
  src,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  animate = true,
  className = "",
  overlayClassName,
}: SectionBackgroundProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return null;
  }

  const imageElement = (
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
      className={`w-full h-full object-cover object-center ${className}`}
    />
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#0B0B0C]"
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
      {overlayClassName && (
        <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />
      )}
    </div>
  );
}
