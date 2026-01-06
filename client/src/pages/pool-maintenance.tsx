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
  Droplets,
  Calendar,
  Shield,
  FileText,
  Clock,
  Sparkles,
  Beaker,
  Eye,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

// Maintenance packages
const maintenancePackages = [
  {
    name: "Essential Care",
    frequency: "Weekly",
    description: "Perfect for small residential pools with moderate use",
    features: [
      "Weekly pool visit",
      "Water chemistry testing",
      "Chemical balancing",
      "Skimming and debris removal",
      "Basic equipment check",
      "Monthly report",
    ],
    popular: false,
  },
  {
    name: "Premium Care",
    frequency: "Weekly",
    description: "Ideal for villas and properties with regular pool use",
    features: [
      "Weekly pool visit",
      "Advanced water testing",
      "Chemical optimization",
      "Complete cleaning (skim, brush, vacuum)",
      "Filter cleaning",
      "Equipment inspection",
      "Digital weekly reports",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Resort Standard",
    frequency: "2-3x Weekly",
    description: "Commercial-grade service for resorts and high-traffic pools",
    features: [
      "Multiple weekly visits",
      "Daily water monitoring",
      "Proactive chemical management",
      "Comprehensive cleaning",
      "Filter and pump maintenance",
      "24/7 emergency support",
      "Real-time digital dashboard",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

// Maintenance process steps
const processSteps = [
  {
    icon: Eye,
    title: "Visual Inspection",
    description:
      "Every visit begins with a thorough visual inspection of your pool, surrounding area, and equipment to identify any issues.",
  },
  {
    icon: Beaker,
    title: "Water Testing",
    description:
      "We test pH, chlorine, alkalinity, calcium hardness, and cyanuric acid levels to ensure balanced, safe water chemistry.",
  },
  {
    icon: Droplets,
    title: "Chemical Treatment",
    description:
      "Based on test results, we add the precise amount of chemicals needed to maintain optimal water balance.",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description:
      "We skim the surface, brush walls and tiles, vacuum the floor, and clean the waterline for a pristine pool.",
  },
  {
    icon: Shield,
    title: "Equipment Check",
    description:
      "Pumps, filters, heaters, and other equipment are inspected to ensure proper operation and catch issues early.",
  },
  {
    icon: FileText,
    title: "Digital Report",
    description:
      "You receive a detailed digital report with photos, test results, and any recommendations for your pool.",
  },
];

// Maintenance-specific FAQs
const maintenanceFAQs: FAQItem[] = [
  {
    question: "How often should I have my pool maintained in Bali?",
    answer:
      "For most pools in Bali, we recommend weekly maintenance at minimum. The tropical climate with high humidity and temperature accelerates algae growth and chemical degradation. For commercial pools or heavily used pools, 2-3 times per week may be necessary. Our pool maintenance Bali team can assess your specific needs and recommend the ideal frequency.",
  },
  {
    question: "What is included in a standard pool maintenance visit?",
    answer:
      "Our standard pool maintenance Bali service includes water chemistry testing (pH, chlorine, alkalinity, etc.), chemical balancing, skimming surface debris, brushing walls and tiles, vacuuming the pool floor, emptying skimmer baskets, checking and cleaning filter as needed, inspecting equipment, and providing a digital service report.",
  },
  {
    question: "Do you provide pool maintenance for both saltwater and chlorine pools?",
    answer:
      "Yes, we service all pool types including traditional chlorine pools, saltwater pools, and mineral pools. Our technicians are trained in the specific maintenance requirements of each system. Saltwater pools in Bali require particular attention due to the higher corrosion risk in tropical humidity.",
  },
  {
    question: "How do you handle pool maintenance during Bali's monsoon season?",
    answer:
      "During monsoon season (November-March), we increase our attention to water chemistry as heavy rains can significantly alter pH and dilute chlorine levels. We may recommend more frequent visits and adjust chemical treatments accordingly. Our pool maintenance Bali protocols are specifically designed for these seasonal variations.",
  },
  {
    question: "Can you maintain my pool while I'm away from Bali?",
    answer:
      "Absolutely! Many of our clients are property owners who aren't always in Bali. We provide complete pool care in your absence with detailed digital reports sent after each visit. You can monitor your pool's condition remotely through our reporting system and contact us anytime with questions.",
  },
  {
    question: "What chemicals do you use for pool maintenance?",
    answer:
      "We use premium, internationally certified pool chemicals from trusted brands. Our standard products include chlorine (liquid or tablets), pH adjusters, algaecides, clarifiers, and stabilizers. We also offer eco-friendly alternatives for environmentally conscious clients who want to minimize chemical impact.",
  },
  {
    question: "How long does a typical pool maintenance visit take?",
    answer:
      "A standard maintenance visit takes approximately 45-90 minutes depending on pool size and condition. Larger pools or those requiring additional attention may take longer. Our technicians take the time needed to ensure thorough service without cutting corners.",
  },
  {
    question: "Do you offer one-time pool cleaning services?",
    answer:
      "Yes, we offer one-time deep cleaning services for pools that have been neglected or need extra attention before an event or guest arrival. However, for optimal pool health, we recommend regular ongoing maintenance rather than periodic deep cleans.",
  },
];

export default function PoolMaintenance() {
  return (
    <Layout>
      <SEO
        title="Pool Maintenance Bali | Bali Pool Cleaning Service | Villa Pool Cleaning"
        description="Professional pool maintenance Bali and Bali pool cleaning service. Weekly villa pool cleaning, water testing, chemical balancing. Kolam renang service in Seminyak, Canggu, Ubud, Sanur. Keep your pool pristine."
        keywords="pool maintenance Bali, Bali pool cleaning service, weekly pool service Bali, villa pool cleaning Bali, pool care Bali, kolam renang Bali service, pool cleaning Seminyak, pool maintenance Canggu, pool service Ubud"
        structuredData={{
          ...businessStructuredData,
          "@type": "Service",
          name: "Pool Maintenance Bali",
          serviceType: "Pool Maintenance",
          description:
            "Professional weekly pool maintenance Bali services including water testing, chemical balancing, cleaning, and equipment checks. Specialized Bali pool cleaning service for villas and resorts.",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Pool Maintenance Bali | Bali Pool Cleaning Service"
        subtitle="Keep Your Pool Pristine with Professional Villa Pool Cleaning"
        description="Professional weekly pool maintenance Bali and Bali pool cleaning service designed for tropical climate. Our certified technicians provide expert villa pool cleaning and kolam renang service in Seminyak, Canggu, Ubud, Sanur ensuring crystal clear, safe pools year-round."
        primaryButtonText="Get Maintenance Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Packages"
        secondaryButtonLink="#packages"
        backgroundImage={techImage}
        imageAlt="Professional pool maintenance Bali service - Technician testing water for villa pool cleaning"
        badges={[
          "Weekly Service",
          "Certified Technicians",
          "Digital Reports",
        ]}
        compact={true}
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                Expert Pool Maintenance Bali & Bali Pool Cleaning Service
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Maintaining a pool in Bali's tropical climate requires specialized knowledge and
                consistent care. At Bali Pool Pros, our <strong>pool maintenance Bali</strong> and 
                <strong>Bali pool cleaning service</strong> are specifically designed to address the unique 
                challenges that local conditions present, including high humidity that accelerates algae growth, 
                seasonal monsoons that alter water chemistry, and mineral-rich water sources that can cause buildup. 
                Our <strong>villa pool cleaning Bali</strong> experts serve all areas including Seminyak, Canggu, 
                Ubud, Sanur, Jimbaran, Uluwatu, and Nusa Dua.
              </p>
              <p>
                Our comprehensive <strong>pool maintenance Bali</strong> approach goes beyond basic cleaning. Each visit
                includes professional water testing, precise chemical balancing, thorough cleaning
                of all pool surfaces, and careful inspection of your pool's equipment. We believe
                that preventive maintenance is the key to avoiding costly repairs and ensuring
                your pool remains a source of enjoyment rather than stress. Our <strong>kolam renang Bali service</strong> 
                (layanan kolam renang profesional) provides complete care for your swimming pool.
              </p>
              <p>
                What truly sets our <strong>Bali pool cleaning service</strong> apart is our commitment to
                transparency and communication. Every service visit is documented with photos and
                detailed reports that you can access through our digital platform. You'll always
                know exactly what work was done, the current state of your water chemistry, and
                any recommendations for keeping your pool in optimal condition. Whether you need 
                <strong>villa pool cleaning in Seminyak</strong>, <strong>pool maintenance in Canggu</strong>, 
                or <strong>kolam renang service in Ubud</strong>, we provide complete transparency.
              </p>
              <p>
                Whether you own a small plunge pool at a private villa or manage multiple large
                pools at a resort, our flexible <strong>pool maintenance Bali</strong> packages can be tailored to meet your
                specific needs and budget. Our team of certified pool experts is dedicated
                to keeping your pool pristine so you can focus on enjoying Bali's beautiful
                tropical lifestyle. <Link href="/faq" className="text-primary font-medium hover:underline">Visit our FAQ page</Link> to 
                learn more about <strong>pool cleaning costs in Bali</strong> and how often pools should be serviced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              What's Included in Every Maintenance Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures nothing is overlooked and your pool
              receives comprehensive care every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <Card className="h-full border-border/50 pt-4">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/30 flex items-center justify-center rounded-xl mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="packages">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Maintenance Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Choose Your Pool Maintenance Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible maintenance packages designed to fit your needs and budget.
              All packages can be customized for your specific pool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 transition-shadow hover:shadow-xl ${
                  pkg.popular ? "border-primary" : "border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{pkg.frequency}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className={`w-full rounded-none h-12 ${
                        pkg.popular
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Need a custom package?{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact us to discuss your requirements.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Digital Reporting */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl opacity-20 blur-2xl" />
              <img
                src={dashboardImage}
                alt="Digital pool maintenance reporting dashboard - Bali Pool Pros"
                className="relative rounded-xl shadow-2xl border border-white/50 w-full"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                Stay Informed
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                Digital Reports After Every Visit
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our pool maintenance Bali service includes comprehensive digital reporting
                that keeps you informed about your pool's condition. Access your reports
                anytime, from anywhere.
              </p>

              <ul className="space-y-4">
                {[
                  "Photos documenting the work completed",
                  "Detailed water chemistry test results",
                  "Chemical dosing records and history",
                  "Equipment status and maintenance notes",
                  "Recommendations for upcoming needs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8 mt-4">
                  Start Maintenance Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bali-Specific Challenges */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Pool Maintenance Challenges in Bali's Climate
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Pool maintenance in Bali presents unique challenges that require specialized
                expertise. Understanding these challenges is key to maintaining a healthy,
                beautiful pool throughout the year.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                High Humidity and Algae Growth
              </h3>
              <p>
                Bali's consistently high humidity, averaging 80-90% throughout the year, creates
                ideal conditions for algae proliferation. Without proper pool cleaning Bali
                protocols, algae can establish itself within days, turning your crystal-clear
                pool into a green mess. Our maintenance schedule includes preventive algaecide
                treatments and thorough brushing to prevent algae from taking hold.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Monsoon Season Impact
              </h3>
              <p>
                The wet season brings heavy rainfall that significantly impacts pool water
                chemistry. Rain is naturally acidic and can quickly lower your pool's pH while
                diluting chlorine levels. Additionally, rainwater introduces organic debris and
                contaminants. Our pool maintenance Bali service includes increased monitoring
                during monsoon season and proactive chemical adjustments.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Mineral-Rich Water
              </h3>
              <p>
                Bali's water sources often contain high levels of calcium, magnesium, and iron.
                These minerals can cause scaling on pool surfaces and equipment if not properly
                managed. Our water testing includes mineral content analysis, and we use
                specialized treatments to prevent buildup while maintaining balanced chemistry.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Intense UV Exposure
              </h3>
              <p>
                Bali's tropical sun is intense year-round, and UV rays break down chlorine
                faster than in temperate climates. This means pools in Bali require more
                frequent chemical adjustments and the use of stabilizers to maintain proper
                sanitization levels. Our technicians are trained to optimize chlorine usage
                while ensuring safe, effective pool sanitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pool Maintenance FAQ"
        subtitle="Common questions about our pool maintenance services in Bali"
        faqs={maintenanceFAQs}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready for Hassle-Free Pool Maintenance?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let our expert team take care of your pool so you can focus on enjoying it.
            Contact us today for a free maintenance quote.
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
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
