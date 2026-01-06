import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

export const generalPoolFAQs: FAQItem[] = [
  {
    question: "How often should I maintain my pool in Bali's tropical climate?",
    answer:
      "In Bali's humid tropical climate, we recommend weekly pool maintenance at minimum. The high humidity, frequent rainfall during monsoon season, and warm temperatures create ideal conditions for algae growth and bacterial proliferation. Our pool maintenance Bali services include regular cleaning, chemical balancing, and equipment checks to keep your pool pristine year-round.",
  },
  {
    question: "What are common pool problems in Bali?",
    answer:
      "Bali pools face unique challenges including rapid algae growth due to tropical heat, mineral buildup from local water sources, debris from surrounding vegetation, and chemical imbalances caused by heavy monsoon rains. Our pool repair Bali experts are trained to address all these issues efficiently and prevent future problems.",
  },
  {
    question: "Do you offer pool services for both villas and resorts in Bali?",
    answer:
      "Yes! Bali Pool Pros provides comprehensive pool service in Bali for all property types, from private villa pools to large resort facilities. We tailor our services to match your specific needs, whether you need weekly maintenance for a small plunge pool or daily care for a commercial resort with multiple pools.",
  },
  {
    question: "What pool cleaning chemicals do you use in Bali?",
    answer:
      "We use premium, internationally certified pool chemicals that are effective in Bali's unique water conditions. Our pool cleaning Bali services include chlorine management, pH balancing, algaecide treatments, and clarifier applications. We also offer eco-friendly options for environmentally conscious clients.",
  },
  {
    question: "How long does a pool installation in Bali typically take?",
    answer:
      "A standard swimming pool installation in Bali takes approximately 6-12 weeks depending on size, design complexity, and site conditions. This includes excavation, structural work, plumbing, tiling, and equipment installation. Our Bali pool experts provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you provide emergency pool repair services in Bali?",
    answer:
      "Absolutely! We offer 24/7 emergency pool repair services throughout Bali. Whether you're dealing with a pump failure, major leak, or equipment malfunction, our pool repair Bali team can respond quickly to minimize downtime and prevent further damage to your pool.",
  },
  {
    question: "What is included in your regular pool maintenance package?",
    answer:
      "Our standard pool maintenance Bali package includes skimming and debris removal, brushing walls and tiles, vacuuming the pool floor, water testing and chemical balancing, filter cleaning, equipment inspection, and a detailed maintenance report. We also offer premium packages with additional services.",
  },
  {
    question: "Can you help with pool renovation and modernization in Bali?",
    answer:
      "Yes, we specialize in pool renovation services including retiling, resurfacing, equipment upgrades, infinity edge conversions, and modern automation systems. Our pool installation Bali team can transform your outdated pool into a stunning modern oasis that complements Bali's beautiful landscape.",
  },
  {
    question: "What areas in Bali do you serve?",
    answer:
      "Bali Pool Pros provides pool service throughout Bali including Seminyak, Canggu, Ubud, Sanur, Jimbaran, Uluwatu, Nusa Dua, and surrounding areas. We have technicians stationed across the island to ensure prompt service wherever you are located.",
  },
  {
    question: "How do I get a quote for pool services in Bali?",
    answer:
      "Getting a quote is easy! Simply contact us via phone, email, or our online contact form. We'll schedule a free site visit to assess your pool and provide a detailed, transparent quote. Contact us to get a price for our competitive pool service rates in Bali with no hidden fees.",
  },
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about pool services in Bali",
  faqs = generalPoolFAQs,
  className = "",
}: FAQSectionProps) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 bg-muted/30 ${className}`}
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg mb-3 px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
