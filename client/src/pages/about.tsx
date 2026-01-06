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
  Award,
  Heart,
  Leaf,
  Target,
  Users,
  Calendar,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";

// Team members data
const teamMembers = [
  {
    name: "I Made Putra",
    role: "Lead Technician",
    bio: "With 15 years of experience in pool repair and maintenance, Made specializes in Bali's unique water systems and tropical climate challenges. He leads our technical team and oversees all major installations.",
    image: "/placeholder-team-1.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    bio: "Originally from Australia, Sarah brings international hospitality standards to our operations. She manages client relationships and ensures every service meets our exacting quality standards.",
    image: "/placeholder-team-2.jpg",
  },
  {
    name: "Wayan Sudirta",
    role: "Senior Pool Technician",
    bio: "A certified pool water chemistry specialist, Wayan has been with Bali Pool Pros since 2012. He trains our team and develops customized maintenance protocols for each client.",
    image: "/placeholder-team-3.jpg",
  },
  {
    name: "Ketut Ayu Dewi",
    role: "Customer Service Manager",
    bio: "Ketut ensures seamless communication between our team and clients. Fluent in English, Indonesian, and Japanese, she coordinates scheduling and handles all client inquiries.",
    image: "/placeholder-team-4.jpg",
  },
  {
    name: "Michael Chen",
    role: "Technical Consultant",
    bio: "A swimming pool engineer with experience across Asia, Michael oversees our pool installation projects and provides expert guidance on complex technical challenges.",
    image: "/placeholder-team-5.jpg",
  },
  {
    name: "Ni Luh Komang",
    role: "Quality Assurance Lead",
    bio: "Komang conducts regular quality audits of our services and maintains our certification standards. She ensures every pool we service meets Bali Pool Pros' high standards.",
    image: "/placeholder-team-6.jpg",
  },
];

// Company milestones
const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Bali Pool Pros was founded by a group of local Balinese experts and expatriate engineers in Ubud, starting as a small maintenance team serving local villas.",
  },
  {
    year: "2013",
    title: "Expanded to Resort Services",
    description:
      "We began partnering with luxury resorts in Seminyak and Kuta, growing our team to meet commercial-grade service demands.",
  },
  {
    year: "2016",
    title: "Island-Wide Coverage",
    description:
      "Opened additional service hubs in Sanur, Jimbaran, and Ubud to provide coverage across all of Bali's popular areas.",
  },
  {
    year: "2018",
    title: "Eco-Friendly Initiative",
    description:
      "Launched our sustainable pool care program, introducing eco-friendly chemicals and energy-efficient equipment options.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Introduced our digital reporting platform, giving clients real-time access to pool maintenance data and service history.",
  },
  {
    year: "2024",
    title: "500+ Active Clients",
    description:
      "Celebrated serving over 500 active clients including some of Bali's most prestigious resorts and private villas.",
  },
];

// Company values
const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in every service we provide, treating each pool as if it were our own.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description:
      "Our team is committed to exceeding client expectations with reliable, consistent, and caring service.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We prioritize eco-friendly practices that protect Bali's beautiful environment while maintaining pristine pools.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Attention to detail is at the core of our approach, ensuring perfect water chemistry and spotless results.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Bali Pool Pros | Pool Service Experts in Bali Since 2010"
        description="Learn about Bali Pool Pros, Bali's leading pool service company. Our expert team provides pool maintenance, cleaning, repair, and installation services throughout the island since 2010."
        keywords="about Bali Pool Pros, pool service company Bali, pool experts Bali, pool maintenance team Bali, professional pool technicians Bali"
        structuredData={{
          ...businessStructuredData,
          "@type": "AboutPage",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="About Bali Pool Pros"
        subtitle="Our Story"
        description="Founded in 2010, Bali Pool Pros has grown from a small maintenance team to Bali's most trusted pool service provider. Learn about our journey, our team, and our commitment to excellence."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        backgroundImage={heroImage}
        imageAlt="Luxury pool in Bali - About Bali Pool Pros pool service company"
        compact={true}
      />

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-6">
                From Small Beginnings to Bali's Leading Pool Service
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Bali Pool Pros was founded in 2010 by a group of local Balinese experts and
                expatriate engineers who saw a growing need for professional, reliable pool
                service in Bali. What started as a small maintenance team serving just a handful
                of villas in Ubud has grown into the island's most trusted pool service provider,
                now handling over 500 properties across Bali.
              </p>
              <p>
                Our founders brought together the best of both worlds: deep local knowledge of
                Bali's unique water conditions and climate challenges, combined with international
                standards of service and technical expertise. This blend has been the key to our
                success and continues to set us apart in the pool service Bali market.
              </p>
              <p>
                Over the years, we've expanded our services from basic pool maintenance to include
                comprehensive pool repair Bali services, complete swimming pool installation Bali
                projects, and specialized water treatment solutions. We've grown our team to
                include certified technicians, customer service professionals, and technical
                consultants who bring diverse expertise to every project.
              </p>
              <p>
                Today, Bali Pool Pros is proud to serve some of the island's most prestigious
                properties, from five-star resorts in Nusa Dua to private villas in Ubud's rice
                terraces. Our commitment to excellence, eco-friendly practices, and exceptional
                customer service has earned us the trust of property owners and managers across
                Bali.
              </p>
              <p>
                As we look to the future, we remain dedicated to our founding principles: providing
                the highest quality pool service in Bali while respecting and protecting the
                island's beautiful environment. We continue to invest in training, technology,
                and sustainable practices to ensure we remain Bali's premier pool service provider
                for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Company Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4">
              Our Journey Over the Years
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 ml-8 md:ml-0">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md border border-border/50 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-serif font-bold text-primary text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              What Drives Our Pool Service Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every service we provide
              as Bali's leading pool service company.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/30 flex items-center justify-center rounded-full mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30" id="team">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
              Meet The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-4">
              The Bali Pool Experts Behind Our Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines local expertise with international standards to
              deliver exceptional pool service in Bali.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  {/* Placeholder for team photo */}
                  <Users className="w-20 h-20 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-emerald-600 mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img
                src={techImage}
                alt="Bali Pool Pros technician providing professional pool service"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium tracking-wider text-sm uppercase border-b border-primary/20 pb-1">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-4 mb-6">
                  Trusted by Hundreds of Properties Across Bali
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you choose Bali Pool Pros, you're choosing a partner dedicated to
                  maintaining the perfect pool experience for you and your guests. Our
                  reputation as Bali pool experts is built on years of consistent,
                  high-quality service.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "15+ years of pool service experience in Bali",
                  "Certified and continuously trained technicians",
                  "Eco-friendly products and sustainable practices",
                  "Island-wide coverage from Ubud to Uluwatu",
                  "24/7 emergency response for urgent repairs",
                  "Transparent pricing with detailed digital reports",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-none h-12 px-8"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Questions About Our Company"
        subtitle="Learn more about Bali Pool Pros and our pool services"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Experience the Bali Pool Pros Difference?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join hundreds of satisfied clients who trust us with their pool care.
            Contact us today for a free consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl"
            >
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
