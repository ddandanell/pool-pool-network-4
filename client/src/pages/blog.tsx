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
  ArrowRight,
  Calendar,
  User,
  Clock,
  Tag,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";
import techImage from "@assets/generated_images/professional_pool_technician_testing_water.png";
import dashboardImage from "@assets/generated_images/pool_maintenance_digital_report_dashboard.png";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Essential Pool Maintenance Tips for Bali's Monsoon Season",
    excerpt:
      "Learn how to protect your pool during Bali's wet season. Heavy rains can dramatically affect water chemistry and introduce contaminants. Discover our expert tips for monsoon pool care.",
    author: "I Made Putra",
    date: "December 15, 2024",
    readTime: "7 min read",
    category: "Pool Maintenance",
    image: techImage,
  },
  {
    id: 2,
    title: "Why Infinity Pools Are Perfect for Bali Properties",
    excerpt:
      "Infinity edge pools have become synonymous with Bali luxury living. Explore why these stunning pools are ideal for Bali's landscape and what to consider when planning one for your property.",
    author: "Sarah Mitchell",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Pool Installation",
    image: heroImage,
  },
  {
    id: 3,
    title: "Understanding Pool Water Chemistry in Tropical Climates",
    excerpt:
      "Maintaining proper water chemistry in Bali's humid, tropical environment requires specialized knowledge. Learn about the key factors that affect your pool water and how to keep it balanced.",
    author: "Wayan Sudirta",
    date: "December 5, 2024",
    readTime: "8 min read",
    category: "Water Care",
    image: dashboardImage,
  },
  {
    id: 4,
    title: "Common Pool Equipment Problems in Bali (And How to Fix Them)",
    excerpt:
      "Pool equipment in Bali faces unique challenges from humidity, power fluctuations, and mineral-rich water. Discover the most common issues we see and how to address them.",
    author: "I Made Putra",
    date: "November 28, 2024",
    readTime: "9 min read",
    category: "Pool Repair",
    image: techImage,
  },
  {
    id: 5,
    title: "Eco-Friendly Pool Care Options for Environmentally Conscious Owners",
    excerpt:
      "Interested in reducing your pool's environmental impact? Explore sustainable pool care options from eco-friendly chemicals to energy-efficient equipment that works well in Bali.",
    author: "Sarah Mitchell",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Sustainability",
    image: heroImage,
  },
  {
    id: 6,
    title: "How to Choose the Right Pool Service Company in Bali",
    excerpt:
      "With many pool service providers in Bali, how do you choose the right one? Learn what to look for in a pool maintenance company and questions to ask before signing up.",
    author: "Ketut Ayu Dewi",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Tips & Advice",
    image: dashboardImage,
  },
];

// Categories
const categories = [
  "All Posts",
  "Pool Maintenance",
  "Pool Repair",
  "Pool Installation",
  "Water Care",
  "Tips & Advice",
  "Sustainability",
];

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Pool Care Blog | Pool Maintenance Tips for Bali | Bali Pool Pros"
        description="Expert pool care tips and advice for pool owners in Bali. Learn about pool maintenance, repair, installation, and how to keep your pool perfect in Bali's tropical climate."
        keywords="pool blog Bali, pool maintenance tips Bali, pool care advice Bali, swimming pool tips Bali, pool cleaning guide Bali"
        structuredData={{
          ...businessStructuredData,
          "@type": "Blog",
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date,
          })),
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Pool Care Blog"
        subtitle="Expert Tips & Advice"
        description="Discover expert pool maintenance tips, industry insights, and practical advice for pool owners in Bali. From seasonal care guides to equipment maintenance, learn how to keep your pool perfect."
        primaryButtonText="Browse Articles"
        primaryButtonLink="#articles"
        secondaryButtonText="Get Pool Service"
        secondaryButtonLink="/contact"
        backgroundImage={heroImage}
        imageAlt="Pool care blog - Expert tips for pool maintenance in Bali"
        badges={[
          "Expert Advice",
          "Bali-Specific Tips",
          "Regular Updates",
        ]}
        compact={true}
      />

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30" id="articles">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest pool care tips, industry news, and
              expert advice from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border/50"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2 line-clamp-2 group-hover:text-primary/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto text-sm font-medium group/btn"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-none h-12 px-8"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
              <img
                src={techImage}
                alt="Pool maintenance expert testing water in Bali"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Featured Article
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                The Complete Guide to Pool Maintenance in Bali
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Maintaining a pool in Bali's tropical climate requires specialized
                knowledge. In this comprehensive guide, we cover everything you need
                to know about keeping your pool in perfect condition—from daily care
                routines to seasonal adjustments.
              </p>
              <p className="text-muted-foreground">
                Topics covered include water chemistry basics, dealing with monsoon
                season, preventing algae growth, equipment maintenance, and when to
                call in the professionals. Whether you're a new pool owner or looking
                to improve your pool care routine, this guide has you covered.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Wayan Sudirta
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                Read Full Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Your Resource for Pool Care in Bali
              </h2>
              <p>
                Welcome to the Bali Pool Pros blog, your go-to resource for expert pool
                care information tailored specifically for Bali's unique conditions. Our
                team of Bali pool experts shares their knowledge and experience to help
                you maintain a beautiful, healthy pool throughout the year.
              </p>
              <p>
                Pool ownership in Bali comes with unique challenges and opportunities.
                The tropical climate that makes Bali such a wonderful place to have a
                pool also creates conditions that require specialized maintenance
                approaches. High humidity accelerates algae growth, monsoon rains can
                throw off water chemistry overnight, and the mineral content in local
                water sources can cause scaling and equipment issues.
              </p>
              <p>
                Through our blog, we share practical tips for handling these challenges,
                explain the science behind pool water chemistry in simple terms, and
                provide guidance on everything from routine maintenance to major
                decisions like pool renovations or new installations. Whether you manage
                your pool yourself or work with a professional service like ours, the
                knowledge here will help you make informed decisions.
              </p>
              <p>
                We also cover topics like eco-friendly pool care options for
                environmentally conscious owners, technology and automation trends,
                and design inspiration for those considering a new pool. Our goal is to
                be a comprehensive resource for anyone who owns or manages a pool in
                Bali.
              </p>
              <p>
                Have a topic you'd like us to cover? Questions about pool care that you
                can't find answers to? Feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link> with suggestions. We
                love hearing from our readers and are always looking for new topics to
                explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive the latest pool care tips, special offers, and
              updates from Bali Pool Pros directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border border-border rounded-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Popular Topics
            </h2>
            <p className="text-muted-foreground">
              Browse articles by topic to find what you're looking for
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Pool Maintenance Tips",
              "Water Chemistry",
              "Monsoon Season Care",
              "Pool Equipment",
              "Algae Prevention",
              "Energy Efficiency",
              "Pool Cleaning",
              "Filter Maintenance",
              "Saltwater Pools",
              "Pool Safety",
              "Infinity Pools",
              "Pool Renovation",
            ].map((topic, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer border border-border/50"
              >
                <Tag className="w-3 h-3" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pool Care Questions"
        subtitle="Quick answers to common pool care questions"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Need Professional Pool Care?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            While DIY pool care is great, sometimes you need professional help.
            Contact us for expert pool service anywhere in Bali.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none h-14 px-8 text-lg font-bold shadow-xl"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
