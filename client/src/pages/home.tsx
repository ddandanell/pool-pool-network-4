import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Droplets, 
  FileBarChart, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Phone 
} from "lucide-react";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold tracking-tight text-primary">
              Resort Standard<span className="text-muted-foreground font-light">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
            <a href="#reporting" className="hover:text-primary transition-colors">Reporting</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex text-muted-foreground hover:text-primary">
              Client Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 shadow-lg shadow-primary/20">
              Request Audit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury Resort Infinity Pool" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 px-6 pt-20">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              B2B Hospitality Partner
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Commercial-Grade <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Pool Compliance
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl leading-relaxed font-light">
              Elevate your guest experience with resort-standard maintenance, weekly board-ready reporting, and risk mitigation for Bali’s premier hospitality brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-medium shadow-xl">
                Schedule Site Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-none h-14 px-8 text-lg backdrop-blur-sm">
                View Service Standards
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-12 text-white/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Weekly KPI Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>24/7 Emergency SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 group">
              <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-500">
                <ShieldCheck className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-primary">Risk Mitigation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protect your brand reputation with documented compliance logs. We adhere to international water safety standards to minimize liability.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-500">
                <Users className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-primary">Guest Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crystal clear water, perfectly balanced chemistry, and zero downtime. Ensure your guests experience nothing but perfection.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-500">
                <FileBarChart className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-primary">Asset Longevity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preventive maintenance schedules that extend the life of your pumps, filters, and surfaces, reducing long-term CapEx.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight - Reporting */}
      <section className="py-24 bg-muted/30 overflow-hidden" id="reporting">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={dashboardImage} 
                alt="Digital Pool Reporting Dashboard" 
                className="relative rounded-xl shadow-2xl border border-white/50 w-full hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                Transparency & Accountability
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Board-Ready Reports, <br/>Delivered Weekly.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forget paper logs. We provide digital, auditable reports sent directly to your management team. Track chemical levels, technician visits, and issue resolution in real-time.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Water Balance & Clarity Metrics",
                  "Chemical Dosing Logs",
                  "Equipment Status & Alerts",
                  "Cost Control Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="link" className="text-primary p-0 h-auto font-semibold hover:text-primary/80 group">
                Download Sample Report 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight - Technician */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                Expertise You Can Trust
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Certified Technicians, <br/>Not Just Cleaners.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our staff undergo rigorous training in water chemistry, hydraulics, and guest etiquette. They act as an extension of your hotel's engineering team.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 border border-border rounded-lg bg-muted/20">
                  <div className="text-3xl font-serif font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Response</div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-muted/20">
                  <div className="text-3xl font-serif font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img 
                src={techImage} 
                alt="Professional Pool Technician" 
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            {/* Abstract pattern or texture could go here */}
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Upgrade Your Pool Standard?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Join the leading resorts in Bali that trust us with their guest experience. Schedule a complimentary site audit today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl">
              Get Your Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-white">
                <Droplets className="h-5 w-5" />
                <span className="font-serif text-lg font-bold tracking-tight">
                  Resort Standard<span className="text-primary font-light">.</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Setting the benchmark for commercial pool compliance and management in Bali.
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Hotel Pool Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Testing & Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipment Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contact</h4>
             <address className="not-italic space-y-2">
               <p>Jl. Sunset Road No. 88, Bali</p>
               <p>hello@resortstandard.com</p>
               <p>+62 812 3456 7890</p>
             </address>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Resort Standard Pool Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}