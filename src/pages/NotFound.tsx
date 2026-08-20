import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <span className="mb-4 inline-block text-sm font-medium tracking-[0.12em] text-primary">404</span>
        <h1 className="mb-4 font-sans text-[40px] font-semibold leading-[1.1] tracking-[0.02em] text-foreground sm:text-[48px]">
          This page doesn't exist.
        </h1>
        <p className="mb-8 font-sans text-[15px] leading-[1.65] text-foreground/75 sm:text-[16px]">
          The link might be outdated, or the page moved when we restructured the site. Either way, you're not lost, just here.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
