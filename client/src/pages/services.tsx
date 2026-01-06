import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layout,
  SEO,
  FAQSection,
  HeroSection,
  businessStructuredData,
} from "@/components/layout";
import {
  CheckCircle2,
  ArrowRight,
  Droplets,
  Wrench,
  Settings,
  Sparkles,
  Shield,
  Clock,
  Leaf,
  Gauge,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

// Main services
const mainServices = [
  {
    icon: Sparkles,
    title: "Pool Maintenance Bali",
    description:
      "Comprehensive weekly and bi-weekly pool maintenance services designed for Bali's tropical climate. Our certified technicians handle all aspects of pool care including water testing, chemical balancing, cleaning, and equipment checks.",
    features: [
      "Weekly water chemistry testing and balancing",
      "Skimming, brushing, and vacuuming",
      "Filter cleaning and maintenance",
      "Equipment inspection and monitoring",
      "Digital maintenance reports",
    ],
    link: "/pool-maintenance",
  },
  {
    icon: Wrench,
    title: "Pool Repair Bali",
    description:
      "Expert pool repair services for all types of issues, from minor fixes to major structural repairs. Our team is available 24/7 for emergency situations, ensuring minimal downtime for your pool.",
    features: [
      "Pump and motor repair/replacement",
      "Filter system repairs",
      "Leak detection and repair",
      "Tile and grout restoration",
      "Pool surface repairs",
    ],
    link: "/pool-repair",
  },
  {
    icon: Settings,
    title: "Pool Installation Bali",
    description:
      "Complete swimming pool installation from design to completion. We build custom pools for villas, resorts, and residential properties, incorporating Bali's unique landscape and architectural styles.",
    features: [
      "Custom pool design consultation",
      "Concrete and fiberglass pools",
      "Infinity edge and overflow pools",
      "Complete plumbing and electrical",
      "Landscaping integration",
    ],
    link: "/pool-installation",
  },
];

// Additional services
const additionalServices = [
  {
    icon: Droplets,
    title: "Water Testing",
    description:
      "Professional water quality analysis and chemical balancing to ensure safe, crystal-clear pool water.",
  },
  {
    icon: Shield,
    title: "Pool Safety Inspections",
    description:
      "Comprehensive safety audits for commercial pools to ensure compliance with health and safety standards.",
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description:
      "24/7 emergency response for urgent pool issues including pump failures, major leaks, and equipment malfunctions.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "Sustainable pool care options using environmentally friendly chemicals and energy-efficient equipment.",
  },
  {
    icon: Gauge,
    title: "Pool Automation",
    description:
      "Smart pool system installation for automated chemical dosing, filtration, and remote monitoring.",
  },
  {
    icon: Sparkles,
    title: "Pool Renovation",
    description:
      "Complete pool renovation services including retiling, resurfacing, and equipment upgrades.",
  },
];

// Service areas
const serviceAreas = [
  "Seminyak",
  "Canggu",
  "Ubud",
  "Sanur",
  "Jimbaran",
  "Uluwatu",
  "Nusa Dua",
  "Kuta",
  "Legian",
  "Denpasar",
  "Tabanan",
  "Gianyar",
];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Pool Services in Bali | Maintenance, Repair & Installation | Bali Pool Pros"
        description="Explore our comprehensive pool services in Bali including pool maintenance, cleaning, repair, and installation. Professional service for villas, resorts, and homes across the island."
        keywords="pool services Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, pool service company Bali"
        structuredData={{
          ...businessStructuredData,
          "@type": "Service",
          serviceType: [
            "Pool Maintenance",
            "Pool Cleaning",
            "Pool Repair",
            "Pool Installation",
          ],
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Professional Pool Services in Bali"
        subtitle="Complete Pool Care Solutions"
        description="From regular maintenance to complete installations, Bali Pool Pros offers comprehensive pool services designed for Bali's unique tropical environment. Serving villas, resorts, and residential properties island-wide."
        primaryButtonText="Get Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonLink="tel:+6282237565997"
        backgroundImage={heroImage}
        imageAlt="Professional pool services in Bali - Maintenance, repair, and installation"
        badges={[
          "Licensed Technicians",
          "24/7 Emergency Service",
          "Island-Wide Coverage",
        ]}
        compact={true}
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
              Complete Pool Care for Bali Properties
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                At Bali Pool Pros, we understand that your pool is more than just a water feature—it's
                a centerpiece of relaxation, entertainment, and property value. That's why we offer
                comprehensive pool services in Bali that cover every aspect of pool ownership, from
                routine maintenance to emergency repairs and complete installations.
              </p>
              <p>
                Our team of certified Bali pool experts brings over 15 years of combined experience
                to every project. We've developed specialized techniques for dealing with Bali's unique
                climate challenges, including high humidity, seasonal monsoons, and mineral-rich water
                sources. Whether you own a small villa pool or manage multiple resort properties, our
                pool service Bali solutions are tailored to meet your specific needs.
              </p>
              <p>
                We pride ourselves on using only premium, internationally certified chemicals and
                equipment, combined with eco-friendly practices that protect Bali's beautiful environment.
                Our digital reporting system keeps you informed about your pool's condition, maintenance
                history, and upcoming service needs, giving you complete transparency and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Our Main Pool Services in Bali
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our primary pool service offerings designed to keep your pool in
              perfect condition year-round.
            </p>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="overflow-hidden border-border/50 shadow-lg">
                    <div className="h-64 sm:h-80 relative">
                      <img
                        src={index === 0 ? techImage : index === 1 ? dashboardImage : heroImage}
                        alt={`${service.title} - Professional pool service in Bali`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={service.link}>
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-none h-12 px-8"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Additional Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              More Pool Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our core services, we provide a range of specialized pool care
              solutions to meet all your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Why Choose Bali Pool Pros for Your Pool Service?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Choosing the right pool service provider in Bali is crucial for maintaining the
                beauty, safety, and longevity of your pool investment. At Bali Pool Pros, we've
                built our reputation on delivering consistent, high-quality pool maintenance Bali
                services that exceed client expectations.
              </p>
              <p>
                Our team understands the unique challenges of maintaining pools in Bali's tropical
                climate. The combination of high humidity, heavy rainfall during monsoon season,
                and intense UV exposure requires specialized knowledge and techniques that only
                experienced Bali pool experts can provide. We've spent years perfecting our
                methods to address these specific conditions.
              </p>
              <p>
                What sets us apart is our commitment to transparency and communication. Every
                service visit is documented with photos and detailed reports that you can access
                through our digital platform. You'll always know exactly what work was done, what
                chemicals were used, and the current condition of your pool's water chemistry
                and equipment.
              </p>
              <p>
                We also prioritize environmental responsibility in all our pool service Bali
                operations. Our eco-friendly chemical options and energy-efficient equipment
                recommendations help reduce your pool's environmental footprint while maintaining
                perfect water quality. We believe in protecting Bali's natural beauty while
                keeping your pool pristine.
              </p>
              <p>
                Whether you need regular pool maintenance for a private villa, comprehensive
                pool repair services for a resort, or a complete swimming pool installation for
                a new property, Bali Pool Pros has the expertise, equipment, and dedication to
                deliver exceptional results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Coverage Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Pool Service Areas in Bali
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive pool services throughout Bali, with technicians
              stationed across the island for prompt response times.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-muted/50 rounded-full text-foreground font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Don't see your area listed?{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact us to check coverage in your location.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pool Services FAQ"
        subtitle="Common questions about our pool services in Bali"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Get Started with Our Pool Services?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Our team is ready to
            help you maintain the perfect pool in paradise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl"
              >
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:+6282237565997">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                Call: +62 822-3756-5997
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
