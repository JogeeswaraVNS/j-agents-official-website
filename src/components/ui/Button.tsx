import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium text-[16px] min-h-[44px] px-6 py-2.5 rounded-btn transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles =
      variant === "primary"
        ? "bg-accent text-accent-foreground font-semibold hover:bg-accent-hover shadow-sm"
        : "bg-surface border border-border text-text-primary hover:bg-surface-hover";

    return (
      <button ref={ref} className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export function LinkButton({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  target,
  rel,
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium text-[16px] min-h-[44px] px-6 py-2.5 rounded-btn transition-colors duration-150";

  const variantStyles =
    variant === "primary"
      ? "bg-accent text-accent-foreground font-semibold hover:bg-accent-hover shadow-sm"
      : "bg-surface border border-border text-text-primary hover:bg-surface-hover";

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </a>
  );
}
