import { Button } from "@/components/ui/button";
import {
  Layout,
  SEO,
  FAQSection,
  businessStructuredData,
  FAQItem,
} from "@/components/layout";
import { Link } from "wouter";
import { Phone, MessageCircle, Mail } from "lucide-react";

// SEO-focused FAQ questions based on user search intent
const seoFAQs: FAQItem[] = [
  {
    question: "What does a pool cleaning service in Bali include?",
    answer:
      "Our Bali pool cleaning service includes comprehensive care: skimming and removing surface debris, brushing walls and tiles to prevent algae buildup, vacuuming the pool floor, testing and balancing water chemistry (pH, chlorine, alkalinity), cleaning skimmer and pump baskets, inspecting and backwashing filters, checking all pool equipment, and providing detailed digital reports with photos. We specialize in villa pool cleaning Bali and understand the unique challenges of maintaining pools in Bali's tropical climate. Each visit is tailored to your pool's specific needs and usage patterns.",
  },
  {
    question: "How much does pool cleaning cost in Bali?",
    answer:
      "Pool cleaning costs in Bali vary based on pool size, frequency of service, and specific requirements. Our weekly pool maintenance Bali packages typically range from affordable rates for small residential pools to premium packages for larger villa pools and resort facilities. We offer three main service levels: Essential Care (weekly visits for small pools), Premium Care (weekly comprehensive service for villas), and Resort Standard (2-3x weekly for commercial properties). Contact us for a free, no-obligation quote tailored to your specific pool and needs. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "How often should a swimming pool be serviced in Bali's climate?",
    answer:
      "In Bali's tropical climate, we strongly recommend weekly pool maintenance at minimum. Bali's consistently high humidity (80-90%), warm temperatures, and intense UV exposure create ideal conditions for rapid algae growth and bacterial proliferation. During monsoon season (November-March), you may need more frequent servicing due to heavy rainfall affecting water chemistry. Our pool maintenance Bali service is specifically designed for these local conditions. Commercial pools, hotel pools, and heavily-used villa pools may require 2-3 visits per week to maintain optimal conditions. We assess each pool individually and recommend the best service frequency for your situation.",
  },
  {
    question: "Can you clean a green or algae-filled pool in Bali?",
    answer:
      "Yes! Our pool rescue & cleaning Bali service specializes in restoring green, murky, or neglected pools. We've rescued hundreds of algae-filled pools across Bali. Our process includes: super-chlorination (shock treatment) to kill algae, thorough brushing to remove algae from surfaces, specialized algaecide application, continuous filtration and backwashing, water chemistry rebalancing, and multiple follow-up visits to ensure the pool stays clear. Most green pools can be restored to crystal-clear condition within 3-7 days depending on severity. We also identify and address the root causes to prevent future algae problems. Emergency pool rescue services available 24/7 throughout Bali including Seminyak, Canggu, Ubud, and Sanur.",
  },
  {
    question: "What chemicals and treatments do you use (eco-friendly/green options)?",
    answer:
      "We use premium, internationally certified pool chemicals that are effective yet safe for Bali's environment. Standard treatments include liquid chlorine or stabilized chlorine tablets, pH increasers/decreasers (soda ash, muriatic acid), alkalinity buffers, calcium hardness adjusters, cyanuric acid stabilizers, and specialized algaecides. For environmentally conscious clients, we offer eco-friendly alternatives including natural enzyme treatments, mineral sanitizers, salt chlorination systems, reduced-chemical maintenance programs, and UV sanitization options. All our kolam renang Bali service packages can be customized with green options that maintain water quality while minimizing environmental impact. We're committed to protecting Bali's natural beauty while keeping your pool pristine. For advanced water treatment systems, we recommend checking out <a href='https://aquapurebali.com/' target='_blank' rel='noopener noreferrer' class='text-primary font-medium hover:underline'>Aqua Pure Bali</a> for eco-friendly water purification solutions.",
  },
  {
    question: "Do you provide emergency pool rescue/cleaning for villas/hotels?",
    answer:
      "Absolutely! We offer 24/7 emergency pool rescue & cleaning Bali services for villas, hotels, resorts, and residential properties throughout the island. Common emergencies we handle include: pump or filter failures causing water quality issues, green pool outbreaks before guest arrivals, major leaks and water loss, equipment malfunctions, water chemistry crises, and storm damage cleanup. Our rapid response team can be on-site within 2-4 hours in major areas like Seminyak, Canggu, Sanur, and Ubud. For villa pool cleaning Bali emergencies, we understand the urgency of having your pool ready for guests. We carry specialized equipment and chemicals to handle severe issues quickly and effectively. Call us anytime for emergency assistance.",
  },
  {
    question: "How long does a standard pool cleaning take in Bali?",
    answer:
      "A standard pool maintenance Bali visit typically takes 45-90 minutes depending on pool size, condition, and service level. Small villa pools (3x6m to 4x8m) usually require 45-60 minutes. Medium pools (4x10m to 5x12m) take approximately 60-75 minutes. Large pools and resort pools (over 100 sqm) require 90+ minutes. The time includes thorough water testing, chemical balancing, complete cleaning (skim, brush, vacuum), filter maintenance, equipment inspection, and digital report preparation. For pool rescue & cleaning Bali of severely neglected or green pools, initial restoration visits may take 2-3 hours. Our technicians never rush - we take the time needed to ensure your pool receives comprehensive care.",
  },
  {
    question: "Are your pool technicians certified and insured?",
    answer:
      "Yes! All our Bali pool cleaning service technicians are professionally trained, certified, and fully insured. Our team holds certifications in pool maintenance, water chemistry, equipment repair, and safety protocols. Each technician undergoes rigorous training specific to Bali's tropical climate conditions and local water characteristics. We carry comprehensive liability insurance covering property damage and accidents. Our kolam renang Bali service team includes both local Indonesian technicians and international experts, ensuring we combine local knowledge with global best practices. All technicians are background-checked, uniformed, and equipped with professional-grade tools and testing equipment. We maintain the highest standards of professionalism and technical expertise in the pool service industry.",
  },
  {
    question: "Do you offer monthly pool maintenance contracts?",
    answer:
      "Yes! We offer flexible monthly pool maintenance Bali contracts tailored to your needs. Our contracts include: weekly or bi-weekly scheduled visits, guaranteed service times, priority emergency response, discounted rates compared to one-time service, comprehensive digital reporting and tracking, dedicated technician assignment, seasonal adjustments (monsoon protocols), and equipment maintenance schedules. Contracts can be customized for villa pool cleaning Bali, residential properties, or commercial facilities. We offer month-to-month flexibility or longer-term agreements with additional savings. All contracts include our satisfaction guarantee - if you're not happy with our service, we'll make it right or release you from the contract. Contact us to discuss a maintenance plan designed for your specific pool and budget.",
  },
  {
    question: "Do you service pools in residential and commercial properties across Bali?",
    answer:
      "Yes! Our pool maintenance Bali services cover all property types throughout the island. We service: private villa pools (single-family homes, vacation rentals), residential complexes and gated communities, boutique hotels and guesthouses, luxury resorts and hotels, commercial properties and offices, apartment buildings and condominiums, water parks and recreational facilities, and government and institutional pools. Our service areas include Seminyak, Canggu, Ubud, Sanur, Jimbaran, Uluwatu, Nusa Dua, Kuta, Legian, Denpasar, Tabanan, and Gianyar. We have technicians stationed across Bali for efficient service coverage. Whether you need weekly villa pool cleaning Bali or comprehensive commercial pool maintenance with multiple daily visits, we have the expertise and resources to handle projects of any size. For additional pool service options, <a href='https://balipoolservice.com/' target='_blank' rel='noopener noreferrer' class='text-primary font-medium hover:underline'>Bali Pool Service</a> also provides quality pool care throughout the island.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      <SEO
        title="Pool Service FAQ | Common Questions About Pool Cleaning & Maintenance Bali"
        description="Find answers to frequently asked questions about Bali pool cleaning service, pool maintenance Bali, costs, service frequency, chemicals, emergency pool rescue, and more."
        keywords="pool cleaning service Bali FAQ, pool maintenance Bali questions, how much pool cleaning cost Bali, pool service frequency Bali, green pool cleaning, emergency pool service"
        structuredData={{
          ...businessStructuredData,
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seoFAQs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-4">
              Everything you need to know about our Bali pool cleaning service
            </p>
            <p className="text-base sm:text-lg text-white/80">
              Get answers about pool maintenance Bali, costs, service frequency, villa pool cleaning, 
              pool rescue & cleaning, and our kolam renang service in Seminyak, Canggu, Ubud, and across Bali.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Common Questions About Pool Service in Bali"
        subtitle="Detailed answers to help you understand our pool cleaning and maintenance services"
        faqs={seoFAQs}
      />

      {/* Additional Resources */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team is here to help with any questions about pool maintenance Bali, 
                villa pool cleaning, or our kolam renang service.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Speak directly with our pool experts
                </p>
                <a href="tel:+6282237565997" className="text-primary font-medium hover:underline">
                  +62 822-3756-5997
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Quick responses via WhatsApp
                </p>
                <a
                  href="https://wa.me/6282237565997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Chat with us
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Get detailed information via email
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  Contact form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                Explore Our Pool Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Learn more about our comprehensive pool cleaning and maintenance services in Bali
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/pool-maintenance">
                <div className="bg-white p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Pool Maintenance Bali
                  </h3>
                  <p className="text-muted-foreground">
                    Weekly pool cleaning service, water testing, chemical balancing, and equipment care 
                    for villas and homes across Bali.
                  </p>
                </div>
              </Link>

              <Link href="/pool-repair">
                <div className="bg-white p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Pool Rescue & Cleaning Bali
                  </h3>
                  <p className="text-muted-foreground">
                    Emergency pool rescue services for green, murky pools. Fast repair and restoration 
                    available 24/7 throughout Bali.
                  </p>
                </div>
              </Link>

              <Link href="/pool-installation">
                <div className="bg-white p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Villa Pool Cleaning Bali
                  </h3>
                  <p className="text-muted-foreground">
                    Specialized villa pool cleaning and maintenance services. Perfect for vacation 
                    rental properties in Seminyak, Canggu, and Ubud.
                  </p>
                </div>
              </Link>

              <Link href="/services">
                <div className="bg-white p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    Kolam Renang Bali Service
                  </h3>
                  <p className="text-muted-foreground">
                    Complete kolam renang (swimming pool) services including cleaning, maintenance, 
                    repair, and installation. Layanan profesional di seluruh Bali.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready for Expert Pool Care?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Contact us today for professional Bali pool cleaning service, villa pool cleaning, 
            or emergency pool rescue & cleaning throughout Bali.
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
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +62 822-3756-5997
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
