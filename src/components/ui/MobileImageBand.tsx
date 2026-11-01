import React, { useState } from "react";
import { RevealImage } from "./RevealAnimation";

/**
 * MobileImageBand
 * ---------------
 * Shown only below the md breakpoint (md:hidden). Renders a 16:9 aspect-ratio
 * image band with the bright image centre visible (object-cover object-center).
 * A gradient inside the container fades the bottom edge into #0B0B0C — no hard
 * line between the image and the text below it.
 * If the image fails to load, the component returns null so no empty gap is left.
 */
export interface MobileImageBandProps {
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
}

export function MobileImageBand({
  src,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  width = 1672,
  height = 941,
}: MobileImageBandProps) {
  const [hidden, setHidden] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  if (hidden) return null;
  return (
    <RevealImage
      className="md:hidden"
      durationMs={1000}
      isLoaded={loading === "eager" ? isLoaded : true}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9" }}
        aria-hidden="true"
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading={loading}
          decoding={decoding}
          {...(fetchPriority ? { fetchPriority } : {})}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHidden(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Bottom fade: image dissolves into #0B0B0C — sits inside overflow:hidden container */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0B0B0C)" }}
        />
      </div>
    </RevealImage>
  );
}
