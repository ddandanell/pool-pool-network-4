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
  ShieldCheck,
  Droplets,
  FileBarChart,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Wrench,
  Settings,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

const services = [
  {
    icon: Sparkles,
    title: "Pool Cleaning Bali",
    description:
      "Professional pool cleaning services tailored for Bali's tropical conditions. Our expert team removes debris, algae, and buildup to keep your pool crystal clear.",
    link: "/pool-maintenance",
  },
  {
    icon: Wrench,
    title: "Pool Repair Bali",
    description:
      "Fast, reliable pool repair services for pumps, filters, heaters, and structural issues. Available 24/7 for emergencies throughout Bali.",
    link: "/pool-repair",
  },
  {
    icon: Settings,
    title: "Pool Installation Bali",
    description:
      "Complete swimming pool installation from design to completion. We build custom pools for villas, resorts, and residential properties across Bali.",
    link: "/pool-installation",
  },
];

const stats = [
  { value: "500+", label: "Pools Maintained" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Pool Service in Bali | Expert Pool Maintenance, Repair & Installation"
        description="Bali Pool Pros offers professional pool service in Bali including pool maintenance, cleaning, repair, and installation. Trusted by villas and resorts across Bali since 2010."
        keywords="pool service Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool experts"
        structuredData={businessStructuredData}
      />

      {/* Hero Section */}
      <HeroSection
        title="Premier Pool Service in Bali"
        subtitle="Trusted Since 2010"
        description="Expert pool maintenance, cleaning, repair, and installation services for villas, resorts, and residential properties throughout Bali. Keep your pool pristine in paradise with Bali's leading pool service provider."
        primaryButtonText="Get Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        backgroundImage={heroImage}
        imageAlt="Luxury infinity pool overlooking Bali rice terraces - Professional pool service Bali"
        badges={[
          "Licensed Technicians",
          "Eco-Friendly Methods",
          "Island-Wide Coverage",
        ]}
      />

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
              Bali's Most Trusted Pool Service Provider
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Welcome to Bali Pool Pros, your premier destination for professional pool
              service in Bali. For over 15 years, we have been the trusted choice for
              villa owners, resort managers, and homeowners seeking exceptional pool
              maintenance, cleaning, repair, and installation services across the Island
              of the Gods. Our team of certified Bali pool experts understands the unique
              challenges that Bali's tropical climate presents for pool care. From the
              humidity that accelerates algae growth to the mineral-rich local water sources
              that can cause buildup, we have the expertise and equipment to keep your pool
              in pristine condition year-round.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you own a private villa in Ubud, manage a luxury resort in Seminyak,
              or have a family home in Sanur, our comprehensive pool service Bali solutions
              are tailored to meet your specific needs. We combine international standards
              with local expertise to deliver results that exceed expectations while using
              eco-friendly methods that protect Bali's beautiful environment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/20" id="services">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Comprehensive Pool Services in Bali
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From regular maintenance to complete installations, we offer everything
              your pool needs to stay beautiful and functional in Bali's tropical climate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-semibold hover:text-primary/80 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                  Why Choose Bali Pool Pros
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-6">
                  Expert Pool Care Designed for Bali's Unique Climate
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Maintaining a pool in Bali is unlike anywhere else in the world. The
                  tropical humidity, seasonal monsoons, and mineral-rich water sources
                  create unique challenges that require specialized knowledge. Our team
                  of Bali pool experts has spent years perfecting techniques specifically
                  designed for local conditions.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Specialized techniques for tropical climate maintenance",
                  "Eco-friendly products safe for Bali's environment",
                  "Experienced team serving all areas of Bali",
                  "24/7 emergency response for urgent pool repairs",
                  "Transparent pricing with no hidden fees",
                  "Digital reporting for property managers and owners",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold hover:text-primary/80 group"
                >
                  Learn About Our Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img
                src={techImage}
                alt="Professional pool technician testing water chemistry in Bali villa pool"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Reporting Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
              <img
                src={dashboardImage}
                alt="Digital pool maintenance reporting dashboard for Bali pool service"
                className="relative rounded-xl shadow-2xl border border-white/50 w-full hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                  Smart Pool Management
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-6">
                  Digital Reports for Complete Transparency
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in complete transparency with our clients. That's why every
                  pool maintenance Bali service includes detailed digital reports that
                  you can access anytime. Track water chemistry, service history, and
                  equipment status from your phone or computer.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Real-time water quality metrics",
                  "Photo documentation of each service visit",
                  "Chemical dosing logs and history",
                  "Equipment status and maintenance alerts",
                  "Cost tracking and budget analysis",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold hover:text-primary/80 group"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tropical Challenges Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Understanding Pool Care in Bali's Tropical Climate
              </h2>
              <p className="text-lg text-muted-foreground">
                Bali's unique environment requires specialized pool maintenance approaches
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Bali's tropical climate, while beautiful, presents unique challenges for pool
                owners. The island's high humidity levels, averaging 80-90% throughout the year,
                create perfect conditions for algae and bacterial growth. Without proper pool
                maintenance in Bali, even the most pristine pool can quickly become a breeding
                ground for unwanted organisms.
              </p>
              <p>
                The monsoon season, typically running from November to March, brings heavy
                rainfall that can dramatically alter your pool's water chemistry. Rainwater is
                naturally acidic and can quickly throw off your pool's pH balance, while also
                introducing contaminants and debris. Our pool cleaning Bali services are designed
                to address these seasonal challenges with proactive maintenance schedules that
                increase service frequency during the wet season.
              </p>
              <p>
                Additionally, Bali's water sources often have high mineral content, particularly
                calcium and magnesium. While these minerals are harmless to swimmers, they can
                cause scaling on pool surfaces and equipment if not properly managed. Our pool
                service Bali team uses specialized treatments and filtration methods to prevent
                mineral buildup and extend the life of your pool infrastructure.
              </p>
              <p>
                The intense tropical sun also plays a significant role in pool maintenance. UV
                rays break down chlorine faster than in temperate climates, meaning pools in Bali
                require more frequent chemical adjustments. Our technicians are trained to balance
                these factors, ensuring your pool remains safe and inviting despite the environmental
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready for Crystal Clear Pool Water?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Join hundreds of satisfied clients across Bali who trust us with their pool
            care. Get your free consultation and quote today.
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
            <a href="tel:+6281234567890">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
