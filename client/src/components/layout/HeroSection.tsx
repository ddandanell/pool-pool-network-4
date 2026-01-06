import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage: string;
  imageAlt: string;
  badges?: string[];
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  imageAlt,
  badges,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${
        compact ? "min-h-[60vh]" : "min-h-screen"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-12 lg:py-20">
        <div className="max-w-3xl space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {subtitle}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed font-light">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href={primaryButtonLink}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium shadow-xl"
              >
                {primaryButtonText}
              </Button>
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white rounded-none h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg backdrop-blur-sm"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-8 sm:pt-12 text-white/60 text-sm font-medium">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
