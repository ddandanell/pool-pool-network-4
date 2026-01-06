import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/pool-maintenance", label: "Pool Maintenance" },
      { href: "/pool-repair", label: "Pool Repair" },
      { href: "/pool-installation", label: "Pool Installation" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => location === href;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Bali Pool Pros Home">
          <Droplets className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-serif text-xl font-bold tracking-tight text-primary">
            Bali Pool Pros<span className="text-muted-foreground font-light">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 hover:text-primary transition-colors ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </Link>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-lg rounded-lg border border-border py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 hover:bg-muted transition-colors ${
                          isActive(child.href) ? "text-primary bg-muted/50" : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
          >
            Client Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 shadow-lg shadow-primary/20">
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border/40 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-border/40 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-3 text-left font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pb-3 pl-4 space-y-2">
                      <Link
                        href={link.href}
                        className={`block py-2 text-sm text-muted-foreground hover:text-primary transition-colors ${
                          isActive(link.href) ? "text-primary" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block py-2 text-sm text-muted-foreground hover:text-primary transition-colors ${
                            isActive(child.href) ? "text-primary" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/40 last:border-0 ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
              >
                Client Login
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
