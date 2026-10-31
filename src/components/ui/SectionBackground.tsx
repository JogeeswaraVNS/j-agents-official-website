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
      {/*
        Desktop (md+): image lives in its own right-side box — 58% of viewport width,
        full section height, anchored to the right edge. object-cover + object-center
        keeps the bright centre of the image fully visible in the middle of the box.
        The area to the left of the box is plain #0B0B0C (the page background).

        Three gradient overlays INSIDE the box eliminate every hard edge:
          • Left  — fades from solid #0B0B0C at the box's left edge to transparent
                    45% across, blending seamlessly into the plain left area.
          • Top   — dissolves the top of the image into the nav / page background.
          • Bottom — dissolves the bottom of the image into the next section.
      */}
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
    </div>
  );
}
