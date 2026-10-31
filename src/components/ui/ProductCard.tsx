import React from "react";
import { ExternalArrow } from "./Icons";

interface ProductCardProps {
  title: string;
  tagline: string;
  href: string;
  badge?: string;
  note?: string;
}

export function ProductCard({ title, tagline, href, badge, note }: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 sm:p-8 rounded-card bg-surface border border-border hover:bg-surface-hover hover:border-white/15 transition-all duration-150 relative"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2.5">
          <h3 className="type-subheading text-text-primary group-hover:text-accent transition-colors duration-150">
            {title}
          </h3>
          {badge && (
            <span className="type-mono px-2 py-0.5 rounded-tag bg-white/5 border border-border text-text-secondary text-[12px]">
              {badge}
            </span>
          )}
        </div>
        <div className="text-text-secondary group-hover:text-accent transition-colors duration-150 pt-0.5">
          <ExternalArrow className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      <p className="type-body text-text-secondary mb-2">{tagline}</p>
      {note && (
        <p className="type-caption text-text-secondary/70 italic mt-3">{note}</p>
      )}
    </a>
  );
}
