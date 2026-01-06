import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Layout,
  SEO,
  FAQSection,
  HeroSection,
  businessStructuredData,
} from "@/components/layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/luxury_bali_resort_infinity_pool_at_sunset.png";

// Contact methods
const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+62 822-3756-5997",
    href: "tel:+6282237565997",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed inquiry",
    value: "info@balipoolpros.com",
    href: "mailto:info@balipoolpros.com",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick messages and photos",
    value: "+62 822-3756-5997",
    href: "https://wa.me/6282237565997",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    value: "Mon-Fri 8AM-6PM, Sat 9AM-3PM",
    href: null,
  },
];

// Service areas
const serviceAreas = [
  { name: "Seminyak", description: "30-45 min response" },
  { name: "Canggu", description: "30-45 min response" },
  { name: "Ubud", description: "45-60 min response" },
  { name: "Sanur", description: "30-45 min response" },
  { name: "Jimbaran", description: "45-60 min response" },
  { name: "Uluwatu", description: "60-90 min response" },
  { name: "Nusa Dua", description: "45-60 min response" },
  { name: "Kuta", description: "30-45 min response" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Contact Bali Pool Pros | Get a Free Pool Service Quote"
        description="Contact Bali Pool Pros for pool maintenance, repair, and installation services in Bali. Get a free quote today. Available 24/7 for emergencies across the island."
        keywords="contact pool service Bali, pool maintenance quote Bali, pool repair quote Bali, pool installation quote Bali, pool service phone Bali"
        structuredData={{
          ...businessStructuredData,
          "@type": "ContactPage",
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="Ready to get started with professional pool service in Bali? Contact us for a free quote, schedule a consultation, or get answers to your questions. We're here to help."
        primaryButtonText="Call Now"
        primaryButtonLink="tel:+6282237565997"
        secondaryButtonText="WhatsApp"
        secondaryButtonLink="https://wa.me/6282237565997"
        backgroundImage={heroImage}
        imageAlt="Contact Bali Pool Pros for pool services in Bali"
        badges={[
          "Free Quotes",
          "24/7 Emergency Line",
          "Quick Response",
        ]}
        compact={true}
      />

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/30 flex items-center justify-center rounded-full mx-auto mb-4">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {method.description}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-primary font-medium hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-foreground text-sm font-medium">
                      {method.value}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Request a Free Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
                with a free, no-obligation quote for your pool service needs.
              </p>

              {submitted ? (
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-emerald-600 mb-4">
                      We've received your message and will get back to you within
                      24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          location: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/50">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone / WhatsApp *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+62 xxx xxxx xxxx"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed *</Label>
                          <Select
                            value={formData.service}
                            onValueChange={handleSelectChange}
                            required
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="maintenance">
                                Pool Maintenance
                              </SelectItem>
                              <SelectItem value="repair">Pool Repair</SelectItem>
                              <SelectItem value="installation">
                                Pool Installation
                              </SelectItem>
                              <SelectItem value="cleaning">
                                One-Time Cleaning
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Property Location</Label>
                        <Input
                          id="location"
                          name="location"
                          placeholder="e.g., Seminyak, Ubud, Canggu..."
                          value={formData.location}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your pool and what you need..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-lg"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy.
                        We'll never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Visit Our Office
                </h2>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary mb-2">
                          Bali Pool Pros
                        </h3>
                        <address className="not-italic text-muted-foreground">
                          <p>Jl. Raya Ubud No. 45</p>
                          <p>Gianyar, Bali 80571</p>
                          <p>Indonesia</p>
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Service Areas in Bali
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide pool services throughout Bali. Response times vary by
                  location:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white p-3 rounded-lg border border-border/50"
                    >
                      <span className="font-medium text-foreground">
                        {area.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {area.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Emergency Service
                </h3>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <p className="text-red-700 mb-4">
                      Pool emergency? Our 24/7 emergency line is available for
                      urgent issues like pump failures, major leaks, and safety
                      hazards.
                    </p>
                    <a href="tel:+6282237565997">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none h-12">
                        <Phone className="w-4 h-4 mr-2" />
                        Emergency: +62 822-3756-5997
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-muted-foreground">
              Located in Ubud, we serve all areas of Bali
            </p>
          </div>

          {/* Map placeholder - in production, this would be an actual Google Maps embed */}
          <div className="w-full h-96 bg-muted rounded-xl flex items-center justify-center border border-border/50">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map would be displayed here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Jl. Raya Ubud No. 45, Gianyar, Bali 80571
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Get in Touch with Bali's Pool Service Experts
              </h2>
              <p>
                At Bali Pool Pros, we believe in making pool service in Bali as
                convenient and stress-free as possible. That's why we offer multiple
                ways to reach us—whether you prefer a phone call, email, WhatsApp
                message, or filling out our online form. Our friendly team is ready
                to answer your questions, provide expert advice, and schedule service
                at a time that works for you.
              </p>
              <p>
                When you contact us for a quote, we'll ask about your pool size, type,
                current condition, and what services you're interested in. For
                maintenance and repair quotes, we typically schedule a free site visit
                to assess your pool in person. This ensures we provide an accurate
                quote tailored to your specific needs. For pool installation inquiries,
                we'll schedule a design consultation to discuss your vision and site
                requirements.
              </p>
              <p>
                We understand that pool issues don't always happen during business
                hours. That's why we maintain a 24/7 emergency line for urgent
                situations like pump failures, major leaks, or safety hazards. If you
                have a pool emergency anywhere in Bali, don't hesitate to call our
                emergency number for immediate assistance.
              </p>
              <p>
                Whether you need regular pool maintenance, emergency repairs, or
                you're planning a new pool installation, Bali Pool Pros is here to
                help. Contact us today and discover why we're trusted by hundreds of
                property owners across Bali for their pool service needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Contact & Service Questions"
        subtitle="Common questions about contacting us and our service process"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Contact us now for a free, no-obligation quote on pool services in Bali.
            We look forward to hearing from you!
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
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
