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
  Ruler,
  HardHat,
  Palette,
  Waves,
  Sun,
  Leaf,
  Shield,
  Clock,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

// Pool types we build
const poolTypes = [
  {
    title: "Infinity Edge Pools",
    description:
      "Stunning vanishing edge pools that appear to merge with the horizon. Perfect for Bali's villa settings overlooking rice fields, jungles, or the ocean.",
    image: heroImage,
  },
  {
    title: "Concrete/Gunite Pools",
    description:
      "Highly durable custom-shaped pools built with reinforced concrete. Fully customizable in any size, shape, and finish to match your vision.",
    image: dashboardImage,
  },
  {
    title: "Plunge Pools",
    description:
      "Compact pools perfect for smaller villa compounds or as secondary pools. Ideal for cooling off in Bali's tropical heat.",
    image: heroImage,
  },
  {
    title: "Resort & Commercial Pools",
    description:
      "Large-scale pool installations for hotels, resorts, and commercial properties. Built to handle high-traffic use with premium finishes.",
    image: dashboardImage,
  },
];

// Installation process
const installationProcess = [
  {
    step: 1,
    icon: Palette,
    title: "Design Consultation",
    description:
      "We meet with you to understand your vision, assess your site, and discuss design options that complement your property and Bali's landscape.",
  },
  {
    step: 2,
    icon: Ruler,
    title: "Detailed Planning",
    description:
      "Our engineers create detailed plans including 3D renders, structural engineering, and precise specifications for your approval.",
  },
  {
    step: 3,
    icon: HardHat,
    title: "Excavation & Construction",
    description:
      "Excavation, steel reinforcement, gunite/concrete application, and structural work. We manage all aspects of the build.",
  },
  {
    step: 4,
    icon: Waves,
    title: "Finishing & Equipment",
    description:
      "Pool surface finishing (tiles, pebbles, or plaster), installation of plumbing, pumps, filters, and other equipment.",
  },
  {
    step: 5,
    icon: Sun,
    title: "Testing & Handover",
    description:
      "Fill, test, and balance the pool. We ensure everything works perfectly before handing over your new pool with a full warranty.",
  },
];

// Features we offer
const features = [
  {
    icon: Waves,
    title: "Infinity & Overflow Edges",
    description:
      "Create stunning visual effects with vanishing edge designs that blend with Bali's beautiful landscapes.",
  },
  {
    icon: Shield,
    title: "Quality Materials",
    description:
      "We use premium materials rated for tropical conditions, ensuring longevity and beauty for years to come.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description:
      "Natural pool options, solar heating, and energy-efficient equipment for sustainable pool ownership.",
  },
  {
    icon: Sun,
    title: "LED Lighting",
    description:
      "Beautiful underwater and landscape lighting to enjoy your pool day or night.",
  },
];

// Installation-specific FAQs
const installationFAQs: FAQItem[] = [
  {
    question: "How long does a swimming pool installation in Bali take?",
    answer:
      "A typical swimming pool installation Bali project takes 8-12 weeks from groundbreaking to completion. This includes excavation (1-2 weeks), structural work (3-4 weeks), finishing and tiling (2-3 weeks), and equipment installation and testing (1-2 weeks). Complex designs like infinity pools may take longer. We provide detailed timelines during the planning phase.",
  },
  {
    question: "What is the cost of building a pool in Bali?",
    answer:
      "Contact us to get a price. Pool installation costs in Bali vary based on size, design, and features. We provide detailed quotes after site assessment and design consultation. Our pricing is transparent with no hidden fees.",
  },
  {
    question: "Do you handle all permits for pool construction in Bali?",
    answer:
      "Yes, we assist with all necessary permits and approvals for pool construction in Bali. This includes building permits, environmental compliance, and any other local requirements. Our team is familiar with the permitting process and can guide you through it smoothly.",
  },
  {
    question: "What pool finishes are available for pools in Bali?",
    answer:
      "We offer a range of pool finishes including traditional plaster, exposed aggregate (pebble), glass bead, fully tiled, and natural stone. For Bali's climate, we recommend finishes that resist mineral buildup and algae growth. We can show you samples and discuss the pros and cons of each option.",
  },
  {
    question: "Can you build a pool on a sloped Bali hillside property?",
    answer:
      "Absolutely! Many beautiful Bali properties are on hillsides, and we have extensive experience building pools on slopes. Infinity edge pools are particularly stunning on hillside properties. Our engineers assess the site and design appropriate structural solutions for the terrain.",
  },
  {
    question: "Do you offer pool and garden/landscaping packages?",
    answer:
      "Yes, we can coordinate with trusted landscaping partners to create integrated pool and garden designs. This includes pool decking, tropical plantings, outdoor shower areas, and pergolas. A coordinated approach often results in better design outcomes and cost savings.",
  },
  {
    question: "What equipment do you install with new pools?",
    answer:
      "Our standard pool installation includes a quality pump, sand or cartridge filter, pool light, skimmer, return fittings, and necessary plumbing. Upgrades available include variable speed pumps, saltwater chlorination, pool heating, automated chemical dosing, and smart controls. We recommend equipment suited to Bali's conditions.",
  },
  {
    question: "What warranty comes with a new pool installation?",
    answer:
      "Our pool installations come with a comprehensive warranty: 10 years on structural/shell, 5 years on surface finish (varies by type), and manufacturer warranties on equipment (typically 2-3 years). We also offer optional extended maintenance contracts to keep your new pool in perfect condition.",
  },
];

export default function PoolInstallation() {
  return (
    <Layout>
      <SEO
        title="Villa Pool Cleaning Bali | Pool Installation | Custom Pool Builders"
        description="Expert villa pool cleaning Bali and custom swimming pool installation. Professional pool builders for villas, resorts. Infinity pools, kolam renang installation in Seminyak, Canggu, Ubud. 10-year warranty."
        keywords="villa pool cleaning Bali, pool installation Bali, swimming pool installation Bali, pool builders Bali, custom pool Bali, infinity pool Bali, kolam renang installation Bali, villa pool Seminyak, pool builders Canggu"
        structuredData={{
          ...businessStructuredData,
          "@type": "Service",
          name: "Villa Pool Cleaning Bali & Installation",
          serviceType: "Pool Installation and Villa Pool Services",
          description:
            "Custom swimming pool design and installation in Bali including infinity pools, villa pool cleaning, and complete kolam renang services for villas and resorts.",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Villa Pool Cleaning Bali | Pool Installation Services"
        subtitle="Custom Pool Builders & Villa Pool Maintenance"
        description="Create your dream villa pool with Bali's trusted pool installation experts. Specialized villa pool cleaning Bali, custom pool design, infinity pools, and complete kolam renang installation services in Seminyak, Canggu, Ubud, Sanur for villas and resorts."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Pool Types"
        secondaryButtonLink="#pool-types"
        backgroundImage={heroImage}
        imageAlt="Luxury villa pool installation in Bali with infinity edge and professional pool cleaning service"
        badges={[
          "10-Year Warranty",
          "Villa Pool Specialists",
          "Custom Designs",
        ]}
        compact={true}
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                Expert Villa Pool Cleaning Bali & Swimming Pool Installation
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Building a pool in Bali is a significant investment that requires the right
                combination of design expertise, construction skills, and local knowledge.
                At Bali Pool Pros, we bring over 15 years of <strong>swimming pool installation Bali</strong>
                and <strong>villa pool cleaning Bali</strong> experience to every project, creating stunning 
                pools that enhance your property and provide years of enjoyment in Bali's tropical paradise. 
                Our <strong>kolam renang installation Bali</strong> services (jasa instalasi kolam renang) 
                combine international standards with local expertise in areas like Seminyak, Canggu, Ubud, 
                and Sanur.
              </p>
              <p>
                Our <strong>villa pool</strong> installation process begins with understanding your vision. Whether
                you dream of a dramatic infinity pool overlooking rice terraces in Ubud, a family-friendly
                pool for your villa in Canggu, or a commercial-grade installation for a resort in Seminyak, 
                our design team works with you to create the perfect pool. We specialize in <strong>villa pool 
                cleaning Bali</strong> and understand that villas require pools designed for both beauty and easy 
                maintenance. Our team considers your property's unique characteristics, the surrounding landscape,
                and Bali's architectural styles to create a pool that feels like a natural extension of your property.
              </p>
              <p>
                Construction in Bali presents unique challenges including tropical weather,
                varying soil conditions, and the need for materials that withstand high humidity
                and mineral-rich water. Our experienced construction team understands these
                challenges and uses proven techniques and quality materials to build pools that
                last. We manage every aspect of the installation, from excavation to final
                testing, ensuring a smooth process and excellent results.
              </p>
              <p>
                Every pool installation Bali project comes with our comprehensive warranty and
                the option for ongoing maintenance through our pool service Bali team. We're
                not just building a pool—we're creating a long-term relationship to ensure your
                pool remains beautiful and functional for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Types */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30" id="pool-types">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Pool Styles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Types of Pools We Build in Bali
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From stunning infinity edges to compact plunge pools, we design and build
              pools to match any vision and property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {poolTypes.map((pool, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border/50"
              >
                <div className="h-48 sm:h-64 relative overflow-hidden">
                  <img
                    src={pool.image}
                    alt={`${pool.title} - Swimming pool installation Bali`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white">
                    {pool.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {pool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have a unique design in mind? We love creative challenges.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                Discuss Your Vision
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              From Design to Dive-In
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven pool installation process ensures quality results and a
              smooth experience from start to finish.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {installationProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="md:hidden flex-1">
                      <h3 className="font-semibold text-primary text-lg">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="hidden md:block mb-2">
                      <h3 className="font-semibold text-primary text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              Premium Features for Your Bali Pool
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your pool with features designed for Bali's lifestyle and climate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/30 flex items-center justify-center rounded-full mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build with Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img
                src={heroImage}
                alt="Pool installation project in Bali by Bali Pool Pros"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                Why Build Your Pool with Bali Pool Pros?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just pool builders—we're Bali pool experts who understand
                the unique requirements of pool construction in this tropical paradise.
              </p>

              <ul className="space-y-4">
                {[
                  "15+ years of pool installation experience in Bali",
                  "In-house design team for custom pool creations",
                  "Quality materials rated for tropical conditions",
                  "Comprehensive 10-year structural warranty",
                  "Full project management from permits to handover",
                  "Ongoing maintenance services after installation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-none h-12 px-8"
                  >
                    About Our Company
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bali-Specific Considerations */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Building Pools in Bali: What You Need to Know
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Pool installation in Bali requires specialized knowledge of local conditions,
                regulations, and construction practices. Here's what makes building a pool
                in Bali unique and how we address these factors.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Climate Considerations
              </h3>
              <p>
                Bali's tropical climate means your pool will face high humidity, heavy rainfall
                during monsoon season, and intense UV exposure year-round. We design and build
                pools with materials and equipment specifically chosen to withstand these
                conditions. From UV-resistant surface finishes to corrosion-resistant hardware,
                every element is selected for longevity in Bali's environment.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Soil and Terrain
              </h3>
              <p>
                Bali's volcanic soil and varied terrain present both opportunities and challenges.
                Many properties are on slopes that are perfect for dramatic infinity pools, but
                require careful engineering. Our team assesses soil conditions and designs
                appropriate structural solutions for each site, ensuring your pool is built on
                a solid foundation.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Water Quality
              </h3>
              <p>
                Bali's water sources often have high mineral content that can affect pool water
                chemistry and equipment. We install appropriate filtration and treatment systems
                and can advise on the best equipment choices for your area's water quality.
                Proper planning at the installation stage prevents problems down the road.
              </p>
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                Permits and Regulations
              </h3>
              <p>
                Pool construction in Bali requires various permits and must comply with local
                building regulations. We handle the permit process as part of our service,
                ensuring your pool meets all legal requirements. This includes building permits,
                environmental compliance, and any other local approvals needed for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pool Installation FAQ"
        subtitle="Common questions about building a pool in Bali"
        faqs={installationFAQs}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Build Your Dream Pool in Bali?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let's discuss your vision. Contact us for a free consultation and quote
            for your swimming pool installation project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl"
              >
                Get Free Consultation
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
