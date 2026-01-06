import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layout,
  SEO,
  FAQSection,
  HeroSection,
  businessStructuredData,
  FAQItem,
} from "@/components/layout";
import {
  CheckCircle2,
  ArrowRight,
  Wrench,
  AlertTriangle,
  Clock,
  Phone,
  Shield,
  Settings,
  Droplets,
  Gauge,
  Zap,
  PenTool,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";

// Common repairs
const commonRepairs = [
  {
    icon: Settings,
    title: "Pump & Motor Repair",
    description:
      "Expert diagnosis and repair of pool pump issues including motor failures, seal leaks, impeller problems, and electrical faults. We service all major brands.",
  },
  {
    icon: Gauge,
    title: "Filter System Repair",
    description:
      "Sand filter, cartridge filter, and DE filter repairs. We fix cracked housings, replace filter media, and restore proper filtration to your pool.",
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection technology to locate underground leaks, shell cracks, and fitting failures. Professional repair to stop water loss.",
  },
  {
    icon: PenTool,
    title: "Tile & Grout Restoration",
    description:
      "Repair cracked, loose, or missing pool tiles. Re-grouting services and waterline tile replacement to restore your pool's appearance.",
  },
  {
    icon: Zap,
    title: "Electrical & Lighting",
    description:
      "Pool light replacement, transformer repairs, and electrical system troubleshooting. LED upgrade installations for energy efficiency.",
  },
  {
    icon: Wrench,
    title: "Surface Repairs",
    description:
      "Plaster patching, fiberglass repair, and surface crack fixes. We restore damaged pool surfaces to their original condition.",
  },
];

// Emergency services
const emergencyServices = [
  "Pump failure leaving pool without circulation",
  "Major leaks causing rapid water loss",
  "Electrical hazards or safety issues",
  "Filter breakdowns during peak season",
  "Equipment malfunction at resorts",
  "Structural damage requiring immediate attention",
];

// Repair process
const repairProcess = [
  {
    step: 1,
    title: "Contact Us",
    description:
      "Call or message us about your pool issue. We'll gather initial information and schedule a diagnostic visit.",
  },
  {
    step: 2,
    title: "Diagnosis",
    description:
      "Our technician performs a thorough inspection to identify the problem and determine the best repair solution.",
  },
  {
    step: 3,
    title: "Quote & Approval",
    description:
      "We provide a detailed, transparent quote for the repair. No hidden fees, no surprises.",
  },
  {
    step: 4,
    title: "Expert Repair",
    description:
      "Our certified technicians complete the repair using quality parts and proven techniques.",
  },
  {
    step: 5,
    title: "Quality Check",
    description:
      "We test the repaired system thoroughly to ensure everything is working perfectly.",
  },
];

// Repair-specific FAQs
const repairFAQs: FAQItem[] = [
  {
    question: "How quickly can you respond to a pool repair emergency in Bali?",
    answer:
      "For emergencies, we aim to respond within 2-4 hours during business hours and same-day for after-hours calls. Our pool repair Bali team has technicians stationed across the island in Seminyak, Ubud, Sanur, and Jimbaran to ensure quick response times regardless of your location.",
  },
  {
    question: "What are the most common pool repairs needed in Bali?",
    answer:
      "The most common pool repairs in Bali include pump motor failures (often caused by power fluctuations), filter problems due to high debris loads, leak repairs from ground movement or age, tile and grout issues from mineral buildup, and equipment damage from Bali's humid, salt-laden air. Our pool repair Bali specialists are experienced with all these issues.",
  },
  {
    question: "Do you provide warranty on pool repairs?",
    answer:
      "Yes, all our pool repair work comes with a warranty. Parts warranties vary by manufacturer (typically 1-3 years), and our labor is warranted for 6 months. If a repair fails within the warranty period, we'll fix it at no additional cost.",
  },
  {
    question: "Can you repair saltwater pool systems?",
    answer:
      "Absolutely. We're experienced with all types of saltwater chlorination systems including repairs to salt cells, control boards, and flow sensors. Saltwater systems in Bali often face accelerated corrosion due to humidity, and we can address these issues effectively.",
  },
  {
    question: "How do I know if my pool has a leak?",
    answer:
      "Signs of a pool leak include: water level dropping more than 1/4 inch per day (beyond normal evaporation), wet spots around the pool or equipment, cracks in the pool shell, air bubbles in the return lines, or increasing water bills. If you notice these signs, contact our pool repair Bali team for professional leak detection.",
  },
  {
    question: "What brands of pool equipment do you service?",
    answer:
      "We service all major pool equipment brands including Pentair, Hayward, Zodiac, Astral, Emaux, Waterco, and many others. Our technicians carry common replacement parts for popular brands and can source specific parts as needed.",
  },
  {
    question: "How long does a typical pool repair take?",
    answer:
      "Repair time depends on the issue. Simple repairs like replacing a pump seal or pool light may take 1-2 hours. More complex repairs like leak detection and repair, filter replacement, or tile work may require half a day or more. We'll provide a time estimate with your quote.",
  },
  {
    question: "Is it better to repair or replace old pool equipment?",
    answer:
      "This depends on the equipment's age, condition, and repair cost. As a general rule, if a repair costs more than 50% of replacement cost and the equipment is over 8-10 years old, replacement is often more economical. Our technicians will give you honest advice on the best option for your situation.",
  },
];

export default function PoolRepair() {
  return (
    <Layout>
      <SEO
        title="Pool Repair Bali | 24/7 Emergency Pool Repair Services"
        description="Expert pool repair services in Bali available 24/7. We fix pumps, filters, leaks, tiles, and all pool equipment. Fast response times across the island for villas and resorts."
        keywords="pool repair Bali, pool pump repair Bali, pool leak repair Bali, swimming pool repair Bali, pool equipment repair Bali, emergency pool repair Bali"
        structuredData={{
          ...businessStructuredData,
          "@type": "Service",
          name: "Pool Repair Bali",
          serviceType: "Pool Repair",
          description:
            "24/7 emergency pool repair services in Bali including pump repair, leak detection, filter repair, and equipment troubleshooting.",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Pool Repair Bali"
        subtitle="24/7 Emergency Service"
        description="Expert pool repair services for pumps, filters, leaks, and all pool equipment. Fast response times across Bali for emergencies and scheduled repairs. Get your pool back in action quickly."
        primaryButtonText="Emergency Repair"
        primaryButtonLink="tel:+6282237565997"
        secondaryButtonText="Schedule Repair"
        secondaryButtonLink="/contact"
        backgroundImage={techImage}
        imageAlt="Professional pool repair service in Bali - Technician fixing pool equipment"
        badges={[
          "24/7 Available",
          "Fast Response",
          "All Brands Serviced",
        ]}
        compact={true}
      />

      {/* Emergency Banner */}
      <section className="py-6 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">Pool Emergency in Bali?</p>
              <p className="text-white/90">
                Call our 24/7 emergency line for immediate assistance
              </p>
            </div>
            <a href="tel:+6282237565997">
              <Button className="bg-white text-red-600 hover:bg-white/90 rounded-none h-12 px-8 font-bold">
                <Phone className="w-4 h-4 mr-2" />
                +62 822-3756-5997
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                Professional Pool Repair Services in Bali
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                When your pool equipment fails or you discover a problem, you need fast, reliable
                repair service from experienced professionals. Bali Pool Pros offers comprehensive
                pool repair Bali services for all types of issues, from minor fixes to major
                equipment overhauls. Our team of certified technicians is available 24/7 for
                emergencies, ensuring you're never left with a non-functional pool for long.
              </p>
              <p>
                Pool equipment in Bali faces unique stresses. The humid tropical climate accelerates
                corrosion, power fluctuations can damage motors, and the intense UV exposure degrades
                plastic and rubber components faster than in temperate regions. Our pool repair Bali
                specialists understand these local challenges and have the expertise to diagnose
                and fix problems efficiently.
              </p>
              <p>
                We service all major brands of pool equipment and maintain a stock of common
                replacement parts to minimize repair time. For specialized parts, we have
                established relationships with suppliers across Indonesia and internationally
                to source what you need quickly. Whether you have a small villa pool or manage
                a resort with multiple pools, we have the skills and resources to handle your
                repair needs.
              </p>
              <p>
                Our commitment to quality means we don't just fix the immediate problem—we identify
                the root cause and address it to prevent future issues. Every repair comes with
                a warranty, and we provide clear documentation of the work performed. You can
                trust Bali Pool Pros for honest, professional pool repair service throughout Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Common Pool Repairs We Handle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From pumps and filters to leaks and surfaces, our pool repair Bali
              team handles it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonRepairs.map((repair, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary transition-colors duration-500">
                    <repair.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {repair.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {repair.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Our Pool Repair Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from first contact to completed repair.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line for larger screens */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

              {repairProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-8 last:mb-0 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <Card
                      className={`border-border/50 shadow-md ${
                        index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 md:hidden">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary text-lg mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step Number (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                24/7 Emergency Response
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                Emergency Pool Repair in Bali
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pool emergencies don't wait for business hours, and neither do we. Our
                emergency pool repair Bali service is available 24 hours a day, 7 days
                a week. We understand that a non-functioning pool can be a major
                problem, especially for resorts and rental properties.
              </p>

              <div className="space-y-3">
                <p className="font-medium text-primary">
                  Emergency situations we handle:
                </p>
                <ul className="space-y-2">
                  {emergencyServices.map((service, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+6282237565997">
                  <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-none h-12 px-8">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Line
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-none h-12 px-8"
                  >
                    Schedule Non-Urgent Repair
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img
                src={heroImage}
                alt="Emergency pool repair service in Bali"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Why Choose Bali Pool Pros for Pool Repairs?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Fast Response Times",
                  description:
                    "With technicians across Bali, we can reach you quickly when you need help most.",
                },
                {
                  icon: Shield,
                  title: "Warranty on All Work",
                  description:
                    "Every repair comes with a warranty so you can have peace of mind.",
                },
                {
                  icon: Settings,
                  title: "All Brands Serviced",
                  description:
                    "We work with all major pool equipment brands and have access to parts.",
                },
                {
                  icon: CheckCircle2,
                  title: "Transparent Pricing",
                  description:
                    "Clear quotes with no hidden fees. You know the cost before we start work.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/30 flex items-center justify-center rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                When you choose Bali Pool Pros for your pool repair needs, you're choosing a
                company with over 15 years of experience servicing pools across Bali. Our
                technicians are trained professionals who take pride in their work and treat
                your pool with the same care they would give their own.
              </p>
              <p>
                We believe in honest, straightforward service. When we diagnose your pool
                problem, we'll explain exactly what's wrong, what the repair options are,
                and what each will cost. If a repair isn't worth the investment, we'll tell
                you honestly and recommend alternatives. Our goal is a long-term relationship
                with you as a satisfied client, not just a one-time repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pool Repair FAQ"
        subtitle="Common questions about our pool repair services in Bali"
        faqs={repairFAQs}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Need Pool Repair Service in Bali?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Don't let pool problems ruin your day. Contact us for fast, reliable
            repair service anywhere in Bali.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+6282237565997">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
