import { Link } from "wouter";
import { Droplets, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/pool-maintenance", label: "Pool Maintenance" },
    { href: "/pool-repair", label: "Pool Repair" },
    { href: "/pool-installation", label: "Pool Installation" },
    { href: "/services", label: "All Services" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/blog", label: "Pool Care Tips" },
    { href: "/contact", label: "Free Quote" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 text-sm" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Droplets className="h-5 w-5" aria-hidden="true" />
              <span className="font-serif text-lg font-bold tracking-tight">
                Bali Pool Pros<span className="text-primary font-light">.</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Bali's premier pool service provider since 2010. Expert pool maintenance, 
              repair, and installation services for villas, resorts, and residential properties 
              throughout the island.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              Our Services
            </h4>
            <ul className="space-y-2" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-2" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <address className="not-italic space-y-2">
              <p>Jl. Raya Ubud No. 45</p>
              <p>Gianyar, Bali 80571</p>
              <p>Indonesia</p>
              <p className="pt-2">
                <a
                  href="mailto:info@balipoolpros.com"
                  className="hover:text-white transition-colors"
                >
                  info@balipoolpros.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+6282237565997"
                  className="hover:text-white transition-colors"
                >
                  +62 822-3756-5997
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>
              © {currentYear} Bali Pool Pros. All rights reserved. | Pool Service in Bali
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
