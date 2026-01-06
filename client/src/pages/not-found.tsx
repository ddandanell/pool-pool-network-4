import { Button } from "@/components/ui/button";
import { Layout, SEO } from "@/components/layout";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found | Bali Pool Pros"
        description="The page you're looking for doesn't exist. Return to Bali Pool Pros for professional pool services in Bali."
      />
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center px-4">
          <AlertCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been
            moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-none h-12 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
